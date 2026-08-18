/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* dev: stop the browser from caching Turbopack chunks at stable URLs —
     stale CSS/JS mixing with fresh HTML is what breaks animations and
     resurrects deleted styles on refresh */
  ...(process.env.NODE_ENV !== 'production'
    ? {
        async headers() {
          return [
            {
              source: '/:path*',
              headers: [{ key: 'Cache-Control', value: 'no-store' }],
            },
          ];
        },
      }
    : {}),
};

export default nextConfig;
