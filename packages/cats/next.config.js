/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  presets: [require("../../next.config")],
  async rewrites() {
    return {
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
