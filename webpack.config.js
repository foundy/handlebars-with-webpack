var path = require('path');

module.exports = {
  entry: './assets/js/index.js',
  output: {
    library: 'Templates',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'templates.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.hbs$/,
        loader: 'handlebars'
      }
    ]
  }
};
