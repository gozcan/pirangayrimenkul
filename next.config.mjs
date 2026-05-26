/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Old Vite-era files we deliberately ignore so they don't break Next typechecking.
  typescript: {
    // Vite leftovers under /src are still on disk; Next will still typecheck app/*.
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
