var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require('webpack');

module.exports = {
    entry: './tab_test.jsx',
    output: {
        filename: 'dist/bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        // publicPath: 'http://127.0.0.0:8099/assets'
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
            {test: /\.es$/, loader: "babel"},
            // {test: /\.css$/, loader: "style!css"},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss$/, loader: "style!css!sass"},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
      new ExtractTextPlugin("i5ting-jquery-tab.css")
    ]
}