var webpack = require('webpack'),
		path = require('path'),
		ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8000',
		'webpack/hot/only-dev-server',
		'./app/app.jsx'
	],

	output: {
		publicPath: 'http://localhost:8000/public',
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},

	devtool: '#inline-source-map',
	debug: true,

	resolveLoader: {
		moduleDirectories: [ 'node_modules' ]
	},

	resolve: {
		extensions: [ '', '.js', '.jsx' ],
		modulesDirectories: [ 'node_modules' ]
	},

	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json-loader'
			},

			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: [ 'jsx-loader', 'react-hot-loader' ]
			},

			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				loader: 'url-loader?limit=10000'
			},

			{
				test: /\.(woff|woff2)$/,
				loader: 'url-loader?limit=100000'
			},

			{
				test: /\.(ttf|eot)$/,
				loader: 'file-loader'
			},

			{
				test: /\.html$/,
				loader: 'html-loader'
			},

			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					'css-loader'
				)
			},

			{
				test: /\.(scss|sass)$/,
				loader: ExtractTextPlugin.extract(
					'css-loader?sourceMap!sass-loader?sourceMap'
				)
			},

			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract(
					'css-loader?sourceMap!less-loader?sourceMap'
				)
			}
		]
	},

	plugins: [
		// This cuts down React's lib size on production.
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.IgnorePlugin(/vertx/),
		new ExtractTextPlugin('styles.css'),
		new webpack.NoErrorsPlugin()
	]
};
