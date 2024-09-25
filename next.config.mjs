/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        aggregateTimeout: 300,
        poll: 1000,
      };
      
      // Optionnel : désactiver l'extraction CSS en mode développement
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== 'MiniCssExtractPlugin'
      );
    }
    return config;
  },
};

export default nextConfig;
