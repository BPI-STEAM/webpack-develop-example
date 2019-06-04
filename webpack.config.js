// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  externals: {
    'jquery': 'window.jQuery'
  }
};