const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	plugins: [new MiniCssExtractPlugin({filename: '[name].css'})],
	mode: "development",
	watch: true,
	entry: {
      app: './src/index.js',
    },
	output: {
		filename: "main.js",
		path: path.join(__dirname, 'dist'),
		publicPath: 'dist'
	},
	devtool: 'inline-source-map',
   devServer: {
   	contentBase: "./",
     publicPath: '/dist',
     hot: false,
     watchContentBase: true, 
     watchOptions: {
      poll: true
    }
   },
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
			MiniCssExtractPlugin.loader,
			"css-loader","sass-loader"	
			]
		}]
	}
};