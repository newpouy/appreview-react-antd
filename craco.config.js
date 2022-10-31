const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');
const CracoAlias = require('craco-alias');
require('react-scripts/config/env');

process.env.BROWSER = 'none';
console.log(process.env.REACT_APP_API_SERVER_URL, 'process.env.API_SERVER_URL')
module.exports = {
  env: {
    API_SERVER_URL: process.env.REACT_APP_API_SERVER_URL
  },
  webpack: {
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === 'development' ? [new BundleAnalyzerPlugin({ openAnalyzer: false })] : []),
    ],
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: './src/',
        /* tsConfigPath should point to the file where "baseUrl" and "paths"
         are specified*/
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};
