const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		bundle: './src/app.js'
	},
	output: {
		path: path.join( __dirname, 'public' ),
		filename: '[name].js'
	},
	plugins: [
		new ExtractTextPlugin('app.css', {
			allChunks: true
		}),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				loader: 'babel',
				exclude: /node_modules/,
				test: /\.js[x]?$/,
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
			}
		]
	},
	devServer: {
		contentBase: 'public',
		port: 3000
	}
};