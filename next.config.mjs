/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Matches .svg files
      use: ["@svgr/webpack"], // Use @svgr/webpack to handle them as React components
    });

    return config;
  },
};

export default nextConfig;
