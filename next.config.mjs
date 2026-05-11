/** @type {import('next').NextConfig} */
// Set NEXT_BASE_PATH to deploy under a subfolder, e.g. NEXT_BASE_PATH=/test
// for https://example.com/test/. Leave unset for root-level deploys.
const basePath = process.env.NEXT_BASE_PATH || "";
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(basePath && { basePath, assetPrefix: basePath }),
};
export default nextConfig;
