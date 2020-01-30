const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');
const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: "./app/index.js",
  output: {
    filename: "index.js"
  },
  module: {
    rules: [
     {
        test: /\.css$/,
        include: MONACO_DIR,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      PathObserver: ['observe-js', 'PathObserver'],
      BpmnJS: ['bpmn-js/dist/bpmn-viewer.development.js']
    }),
    new MonacoWebpackPlugin({
      languages: ['javascript', 'typescript', 'json']
    }),
    new CopyPlugin([
      {
        from: 'app',
        ignore: ['**/*.js', 'app.css'],
        to: ''
      }
    ])
  ],
  devServer: {
    watchOptions: {
      ignored: [
        path.resolve(__dirname, 'dist'),
        path.resolve(__dirname, 'resources'),
        path.resolve(__dirname, 'node_modules')
      ]
    }
  }
}