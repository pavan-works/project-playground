import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const DEPTH_RANGE = 40;
const MAX_X = 3.2;
const MAX_Y = 2.2;
const X_OFFSET = 1.1;

const createClothMaterial = () =>
  new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      map: { value: null },
      opacity: { value: 1 },
      blurAmount: { value: 0 },
      scrollForce: { value: 0 },
      time: { value: 0 },
    },
    vertexShader: `
      uniform float scrollForce;
      uniform float time;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 pos = position;
        float curveIntensity = scrollForce * 0.25;
        float d = length(pos.xy);
        float curve = d * d * curveIntensity;
        float ripple = sin(pos.x * 2.0 + time) * 0.015 + sin(pos.y * 2.5 + time * 0.8) * 0.012;
        pos.z -= curve + ripple * abs(curveIntensity) * 2.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D map;
      uniform float opacity;
      uniform float blurAmount;
      varying vec2 vUv;
      void main() {
        vec4 color = texture2D(map, vUv);
        if (blurAmount > 0.0) {
          vec2 texel = vec2(1.0 / 1024.0);
          vec4 sum = vec4(0.0);
          float total = 0.0;
          for (float x = -2.0; x <= 2.0; x += 1.0) {
            for (float y = -2.0; y <= 2.0; y += 1.0) {
              float w = 1.0 / (1.0 + length(vec2(x, y)));
              sum += texture2D(map, vUv + vec2(x, y) * texel * blurAmount * 3.0) * w;
              total += w;
            }
          }
          color = sum / total;
        }
        gl_FragColor = vec4(color.rgb, color.a * opacity);
      }
    `,
  });

function Scene({
  images,
  visibleCount,
  onActiveChange,
  interactedRef,
}: {
  images: string[];
  visibleCount: number;
  onActiveChange: (i: number) => void;
  interactedRef: React.MutableRefObject<number>;
}) {
  const textures = useTexture(images);
  const velocity = useRef(0);
  const activeRef = useRef(-1);

  const materials = useMemo(
    () => Array.from({ length: visibleCount }, () => createClothMaterial()),
    [visibleCount],
  );

  const spatial = useMemo(
    () =>
      Array.from({ length: visibleCount }, (_, i) => ({
        x: X_OFFSET + (Math.sin((i * 2.618) % (Math.PI * 2)) * ((i % 3) * 1.2) * MAX_X) / 3,
        y: (Math.cos((i * 1.618 + Math.PI / 3) % (Math.PI * 2)) * (((i + 1) % 4) * 0.8) * MAX_Y) / 4,
      })),
    [visibleCount],
  );

  const planes = useRef(
    Array.from({ length: visibleCount }, (_, i) => ({
      z: (DEPTH_RANGE / visibleCount) * i,
      imageIndex: i % images.length,
    })),
  );

  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
      velocity.current += dy * 0.012;
      interactedRef.current = Date.now();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") velocity.current -= 2;
      else if (e.key === "ArrowDown" || e.key === "ArrowRight") velocity.current += 2;
      else return;
      interactedRef.current = Date.now();
    };
    const canvas = document.querySelector<HTMLCanvasElement>("[data-journey-gallery] canvas");
    canvas?.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      canvas?.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, [interactedRef]);

  useFrame((state, delta) => {
    const idle = Date.now() - interactedRef.current > 3000;
    if (idle) velocity.current += 0.35 * delta;
    velocity.current *= 0.94;

    const time = state.clock.getElapsedTime();
    const half = DEPTH_RANGE / 2;
    let bestIdx = -1;
    let bestDist = Infinity;

    planes.current.forEach((plane, i) => {
      let z = plane.z + velocity.current * delta * 12;
      if (z >= DEPTH_RANGE) {
        z -= DEPTH_RANGE;
        plane.imageIndex = (plane.imageIndex + (visibleCount % images.length || images.length)) % images.length;
      } else if (z < 0) {
        z += DEPTH_RANGE;
        plane.imageIndex =
          (((plane.imageIndex - (visibleCount % images.length || images.length)) % images.length) + images.length) %
          images.length;
      }
      plane.z = z;

      const n = z / DEPTH_RANGE;
      let opacity = 1;
      if (n < 0.08) opacity = 0;
      else if (n < 0.24) opacity = (n - 0.08) / 0.16;
      else if (n > 0.62) opacity = 0;
      else if (n > 0.5) opacity = 1 - (n - 0.5) / 0.12;

      let blur = 0;
      if (n < 0.12) blur = 8 * (1 - n / 0.12);
      else if (n > 0.5) blur = Math.min(8, ((n - 0.5) / 0.12) * 8);

      const m = materials[i];
      m.uniforms.time.value = time;
      m.uniforms.scrollForce.value = velocity.current;
      m.uniforms.opacity.value = Math.max(0, Math.min(1, opacity));
      m.uniforms.blurAmount.value = blur;

      const worldZ = z - half;
      const mesh = meshRefs.current[i];
      if (mesh) mesh.position.set(spatial[i].x, spatial[i].y, worldZ);

      const dist = Math.abs(worldZ - -6);
      if (opacity > 0.5 && dist < bestDist) {
        bestDist = dist;
        bestIdx = plane.imageIndex;
      }
    });

    if (bestIdx >= 0 && bestIdx !== activeRef.current) {
      activeRef.current = bestIdx;
      onActiveChange(bestIdx);
    }
  });

  return (
    <>
      {planes.current.map((plane, i) => {
        const tex = textures[plane.imageIndex];
        const img = tex?.image as { width?: number; height?: number } | undefined;
        const aspect = img?.width && img?.height ? img.width / img.height : 1;
        const base = 4.6;
        const scale: [number, number, number] = aspect > 1 ? [base * aspect, base, 1] : [base, base / aspect, 1];
        const mat = materials[i];
        if (mat) mat.uniforms.map.value = tex;
        return (
          <mesh
            key={i}
            ref={(el) => {
              meshRefs.current[i] = el;
            }}
            scale={scale}
            material={mat}
          >
            <planeGeometry args={[1, 1, 32, 32]} />
          </mesh>
        );
      })}
    </>
  );
}

export const InfiniteGallery = ({
  images,
  onActiveChange,
  className = "",
}: {
  images: string[];
  onActiveChange: (i: number) => void;
  className?: string;
}) => {
  const [supported, setSupported] = useState(true);
  const [paused, setPaused] = useState(false);
  const interactedRef = useRef(0);

  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      if (!(c.getContext("webgl2") || c.getContext("webgl"))) setSupported(false);
    } catch {
      setSupported(false);
    }
  }, []);

  useEffect(() => {
    const id = setInterval(() => setPaused(Date.now() - interactedRef.current < 3000), 500);
    return () => clearInterval(id);
  }, []);

  const noteInteraction = useCallback(() => {
    interactedRef.current = Date.now();
  }, []);

  if (!supported) {
    return (
      <div className={className}>
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, i) => (
            <button key={src} type="button" onClick={() => onActiveChange(i)} className="overflow-hidden rounded-2xl">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      data-journey-gallery
      onPointerDown={noteInteraction}
      onTouchStart={noteInteraction}
      className={`relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[var(--rv-card)]/40 ${className}`}
    >
      <Canvas camera={{ position: [0, 0, 14], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Scene images={images} visibleCount={10} onActiveChange={onActiveChange} interactedRef={interactedRef} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-2 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/70 to-transparent px-6 pb-6 pt-14 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
          Use mouse wheel, arrow keys, or touch to navigate
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/20">
          {paused ? "Auto-play resumes after 3 seconds of inactivity" : "Auto-playing"}
        </p>
      </div>
    </div>
  );
};
