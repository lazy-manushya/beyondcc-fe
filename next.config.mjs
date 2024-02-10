import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    // Important: return the modified config
    config.resolve.modules = [path.resolve(__dirname, "src"), "node_modules"];
    return config;
  },
};

export default nextConfig;
