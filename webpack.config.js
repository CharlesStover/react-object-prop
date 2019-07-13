const path = require('path');

module.exports = {
  entry: './src/react-object-prop.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [ '@babel/plugin-proposal-object-rest-spread' ],
            presets: [ '@babel/preset-env' ],
          },
        },
      },
    ],
  },
  output: {
    filename: 'react-object-prop.js',
    library: 'react-object-prop',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '.'),
    umdNamedDefine: true,
  },
};
