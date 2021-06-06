const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    module: {
        rules: [
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
        ]
      },
    output: {
        path: path.resolve(__dirname, 'src', 'js'),
        filename: 'index_bundle.js'
    },
    mode: 'development'
    
}