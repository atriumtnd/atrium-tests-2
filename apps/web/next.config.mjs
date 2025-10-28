/** @type {import('next').NextConfig} */
const nextConfig = {
  // mantém o build do UI dentro do web sem tsc extra
  transpilePackages: ["@atrium/ui"],
};

export default nextConfig;
