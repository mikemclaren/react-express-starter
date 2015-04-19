var webpack = require('webpack'),
		path = require('path'),
		ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./app/app.jsx'
	],

	output: {
		publicPath: '/public',
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},

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
				loaders: [ 'jsx-loader' ]
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
				loader: 'css-loader'
			},

			{
				test: /\.(scss|sass)$/,
				loader: ExtractTextPlugin.extract(
					'css-loader!sass-loader'
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
		new ExtractTextPlugin('styles.css'),
		new webpack.IgnorePlugin(/vertx/),
		new webpack.optimize.UglifyJsPlugin({ minimize: true })
	]
};
