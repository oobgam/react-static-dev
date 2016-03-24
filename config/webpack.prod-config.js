var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var config = require('./webpack.common-config');

var routes = [
    '/'
]

config.devtool = 'source-map';
config.output.libraryTarget = 'umd';

config.module.loaders.push(
    {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!sass!postcss?outputStyle=expanded')
    }
);

config.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    }),
    new ExtractTextPlugin('style.css'),
    new StaticSiteGeneratorPlugin('main', routes, null)
)

config.externals = {
    'React': 'react',
    'ReactDOM': 'react-dom'
};

module.exports = config;
