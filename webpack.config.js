const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  devServer:{
    port:3050,
    
  },
 
  module: {
    rules: [
    
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        use:{
            loader:"babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
  ]

};