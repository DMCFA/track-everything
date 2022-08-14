/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  env: {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    tmdbApiKey: process.env.tmdbApiKey,
  },
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
  nextConfig,
  eslint: {
    dirs: ['components', 'pages', 'styles', 'ts'],
  },
};
