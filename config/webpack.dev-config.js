var webpack = require('webpack');
var config = require('./webpack.common-config');

config.devtool = 'cheap-module-eval-source-map';
config.entry.main.unshift('webpack-hot-middleware/client');

config.module.loaders.push(
    {
        test: /\.(css|scss)$/,
        loader: 'style!css!sass!postcss'
    }
);

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
);

module.exports = config;
