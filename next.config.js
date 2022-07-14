const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
});
