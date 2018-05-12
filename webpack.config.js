// Webpack Config
var webpack = require('webpack');
var BabiliPlugin = require('babili-webpack-plugin');
var path = require('path');

//This is where we get the usecase name from the npm script
var usecase = process.env.USECASE;

//Change this to your library name
//Also remember to change the 'main' entry point in package.json
var outputName = 'same_output';
var outputFile = outputName + '.js';
var plugins = [];
if(env === 'build'){
  plugins.push(new BabiliPlugin());
  // This is where we could distinguish a .min.js version for build
  // But I'm keeping both versions as .js for now for ease of development
}

//The default entry point is <usecase_name>/index.js
//The output path will be the same regardless
//This allows you to follow the exact same dev and build process but with
//different components/custom code included.
var config = {
  entry: ['whatwg-fetch',path.resolve(__dirname, './' + process + '/index.js')],
  resolve: {
    alias: {
      //This is a handy alias to use so that anywhere in your usecase you can import
      //using an absolute path to core by doing: import ___ from '@core/___'.
      //You can also accomplish the same if using babel and the babel module-resolver plugin
      '@core': path.resolve(__dirname, './core')
    }
  },
  devtool: 'source-map',
  node: { fs: 'empty' },
  plugins: plugins,
  target: 'web',
  output: {
    path: __dirname + '/build',
    filename: outputFile,
    library: outputName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
    ]
  }
};

module.exports = config;
