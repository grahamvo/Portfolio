const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: `${__dirname}/app-client`,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: `${__dirname}/node_modules/`,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                loader: 'style!css-loader?modules&importLoaders=1&' +
                    'localIdentName=[name]__[local]___[hash:base64:5]' +
                    '!sass?sourceMap',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
                ],
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file',
            },
        ],
    },
    postcss: function() {
        return [autoprefixer];
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${__dirname}/src/index.tmpl.html`,
            inject: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
    ],
};
