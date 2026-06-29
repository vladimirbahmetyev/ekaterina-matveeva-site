import type { NextConfig } from "next";
import { withNextVideo } from "next-video/dist/cjs/with-next-video.js";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default withNextVideo(nextConfig);
