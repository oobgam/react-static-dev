var path = require('path');
var autoprefixer = require('autoprefixer');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: ['./src/index']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-bundle.js',
        publicPath: '/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: [nodeModulesDir],
                include: path.join(__dirname, '..', 'src'),
            },
            {
                test: /\.(png|gif|svg)$/,
                loader: 'url?limit=8192&name=./assets/[hash].[ext]',
            },
            {
                test: /\.jpg$/,
                loader: 'file?name=./assets/[hash].[ext]',
            },
            {
                test: /\.md$/,
                loader: 'json!yaml-frontmatter',
            },
        ],
    },
    plugins: [],
    postcss: function () {
        return [autoprefixer];
    },
};
