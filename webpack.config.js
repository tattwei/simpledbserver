const ExtractTextPlugin = require('extract-text-webpack-plugin'),
	path = require('path'),
	LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin')

const extractSass = new ExtractTextPlugin({
	filename: "css/[name].css",
	disable: process.env.NODE_ENV === "development"
})

const runEslint = new LoaderOptionsPlugin({
	options:{
	    eslint: {configFile: '.eslintrc'}
	}
})

module.exports={
    entry: path.resolve(__dirname,'client/js/main.js'),
    output: {
	path: path.resolve(__dirname,'server/public/'),
	filename: 'app.js'
    },
    module: {
	rules:[
	 // {
	 //   enforce: 'pre',
	 //   test: /\.js$/,
	  //  loader: 'eslint-loader',
	  //  exclude: /node_modules/
	  //},
	  {
	    test: /\.js$/,
	    exclude: /node_modules/,
	    loader: 'babel-loader',
	    query:{
		cacheDirectory: true,
		presets: ['es2015', 'stage-1', 'react']
	    }
	  },
	  {
	    test: /\.sass$/,
	    use:extractSass.extract({
	      use:[
		{loader: "css-loader"},
		{loader: "postcss-loader"},
		{loader: "sass-loader", options:{includePaths: [path.resolve(__dirname, './client')]}}
	      ],
	      fallback: "style-loader"
	    })
	  }
	]
    },
    plugins: [
	extractSass,
	runEslint
    ],
    resolve: {
	modules: [
	    "node_modules",
	    path.resolve(__dirname,"client")
	],
	extensions: ['.js','.sass','.css']
    }

}
