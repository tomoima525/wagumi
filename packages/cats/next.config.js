/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  presets: [require("../../next.config")],
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:slug(\\d{1,})",
          destination:
            "https://media.githubusercontent.com/media/wagumi/wagumi/main/generated/:slug.png",
        },
      ],
      fallback: [
        {
          source: "/:slug*",
          destination:
            "https://media.githubusercontent.com/media/wagumi/wagumi/main/generated/:slug*",
        },
      ],
    };
  },
};
