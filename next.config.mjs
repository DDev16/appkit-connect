/** @type {import('next').NextConfig} */
export default {
  webpack: (config) => {
    config.externals = config.externals || [];
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
};
