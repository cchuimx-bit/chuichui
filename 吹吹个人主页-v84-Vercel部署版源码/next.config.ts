import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site uses only local assets. Keeping image optimization disabled avoids
  // extra runtime work while preserving the existing artwork exactly.
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
