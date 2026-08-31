import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // 静的出力にはNext.jsの実行時画像最適化APIがないため、publicの画像をそのまま配信します。
    unoptimized: true,
  },
};

export default nextConfig;
