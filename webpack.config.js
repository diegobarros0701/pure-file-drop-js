const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');

module.exports = function(env, argv) {
	var entry_name = env.mode === 'production' ? 'pure-file-drop.min' : 'pure-file-drop';

	return {
		mode: env.mode,
		entry: {
			[entry_name]: './entry.js'
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js',
			libraryTarget: 'umd',
		},
		optimization: {
			minimizer: [ 
				new OptimizeCSSAssetsPlugin({}),
				new UglifyJsPlugin()
			]
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				},
				{
					test: /\.scss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader
						},
						{
							loader: "css-loader"
						},
						{
							loader: "sass-loader"
						}
					]
				}
			]
		},
		plugins: [
	    	new MiniCssExtractPlugin({ // define where to save the file
		    	filename: '[name].css'
		  	}),
	    ],
    }
};