/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  presets: [require("../../next.config")],
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:slug(\\d{1,3})",
          destination:
            "https://media.githubusercontent.com/media/wagumi/wagumi/main/generated/:slug.png",
        },
      ],
    };
  },
};
