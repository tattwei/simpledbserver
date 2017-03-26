const ExtractTextPlugin = require('extract-text-webpack-plugin'),
	path = require('path')

const extractSass = new ExtractTextPlugin({
	filename: "css/[name].css",
	disable: process.env.NODE_ENV === "development"
});

module.exports={
    entry: path.resolve(__dirname,'./client/js/sample.js'),
    output: {
	path: path.resolve(__dirname,'./server/public/'),
	filename: 'app.js'
    },
    module: {
	rules:[
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
	extractSass
    ],
    resolve: {
	modules: [
	    "node_modules",
	    path.resolve(__dirname,"client")
	],
	extensions: ['.js','.sass','.css']
    }

}
