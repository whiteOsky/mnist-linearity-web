import type { NextConfig } from "next";

// Allow static export for GitHub Pages and similar static hosts.
// Use an optional base path (e.g., "/mnist-linearity-web") when deploying under a project subpath.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Required for `output: 'export'` when using next/image
    unoptimized: true,
  },
  // Helpful when hosting under a repo subpath on GitHub Pages
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
