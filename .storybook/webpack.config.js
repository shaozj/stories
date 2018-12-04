const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.jsx?$/,
    include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../stories')],
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            [
              '@babel/env',
              {
                targets: {
                  browsers: ['Chrome>=59'],
                },
                modules: false,
                loose: true,
              },
            ],
            '@babel/react',
          ],
          plugins: [
            [
              'import',
              { libraryName: 'antd', libraryDirectory: 'es', style: true },
            ],
            [require("@babel/plugin-proposal-class-properties"), { "loose": false }],
            [require("@babel/plugin-proposal-decorators"), { "legacy": true }],
          ],
        },
      },
    ],
  });

  defaultConfig.module.rules.push({
    test: /\.less$/,
    include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../stories')],
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: false,
          modules: true,
          localIdentName: '[local]___[hash:base64:5]',
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('autoprefixer')],
        },
      },
      {
        loader: 'less-loader',
        options: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    ],
  });

  defaultConfig.module.rules.push({
    test: /\.less$/,
    include: path.resolve(__dirname, '../node_modules'),
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    ],
  });

  defaultConfig.resolve.alias = defaultConfig.resolve.alias || {};
  defaultConfig.resolve.alias['~'] = path.resolve(__dirname, '../src');

  return defaultConfig;
};
