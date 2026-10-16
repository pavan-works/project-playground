import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';

// Serves the Vercel function api/contact.ts during `npm run dev`, so the contact form
// can be tested locally. Keys come from .env.local (git-ignored); in production Vercel
// runs api/contact.ts itself with the env vars set in the Vercel dashboard.
const devContactApi = (env: Record<string, string>): Plugin => ({
  name: 'dev-contact-api',
  apply: 'serve',
  configureServer(server) {
    for (const key of ['RESEND_API_KEY', 'CONTACT_TO', 'CONTACT_FROM']) {
      if (env[key] && !process.env[key]) process.env[key] = env[key];
    }
    server.middlewares.use('/api/contact', async (req, res) => {
      try {
        const chunks: Buffer[] = [];
        for await (const chunk of req) chunks.push(chunk as Buffer);
        const headers = new Headers();
        for (const [k, v] of Object.entries(req.headers)) {
          if (typeof v === 'string') headers.set(k, v);
        }
        headers.set('x-forwarded-for', req.socket.remoteAddress ?? '127.0.0.1');
        const request = new Request('http://localhost/api/contact', {
          method: req.method,
          headers,
          body: req.method === 'GET' || req.method === 'HEAD' ? undefined : Buffer.concat(chunks),
        });
        const mod = await server.ssrLoadModule('/api/contact.ts');
        const response: Response =
          req.method === 'POST' ? await mod.POST(request) : new Response(null, {status: 405});
        res.statusCode = response.status;
        response.headers.forEach((value, key) => res.setHeader(key, value));
        res.end(Buffer.from(await response.arrayBuffer()));
      } catch (err) {
        server.config.logger.error(`[dev-contact-api] ${err instanceof Error ? err.message : err}`);
        res.statusCode = 500;
        res.end();
      }
    });
  },
});

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), tailwindcss(), devContactApi(env)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
