import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows the placeholder illustrations in /public/images to render via
    // next/image. Safe here because these are local files we control, not
    // user-uploaded or remote SVGs.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
