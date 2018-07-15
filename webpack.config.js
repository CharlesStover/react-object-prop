const path = require('path');

module.exports = {
  entry: './react-object-prop.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ]
          }
        }
      }
    ]
  },
  output: {
    filename: 'react-object-prop.min.js',
    library: 'react-object-prop',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '.'),
    umdNamedDefine: true
  }
};
