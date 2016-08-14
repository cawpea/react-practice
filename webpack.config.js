const path = require('path');

module.exports = {
	entry: {
		bundle_todo: './src/todo.js'
	},
	output: {
		path: path.join( __dirname, 'public' ),
		filename: '[name].js'
	},
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
			}
		]
	},
	devServer: {
		contentBase: 'public',
		port: 3000
	}
};