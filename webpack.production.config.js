let loaders;

if (process.env.NODE_ENV === 'development') {
    loaders = ['react-hot', 'babel'];
} else {
    loaders = ['babel'];
}

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const data = require('./data');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        `${__dirname}/src/js/App`
    ],
    output: {
        path: `${__dirname}/public/dist`,
        filename: '[name].bundle.js',
        publicPath: '/dist/',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?sourceMap!sass?sourceMap'
                )
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=img/img-[hash:6].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new StaticSiteGeneratorPlugin('main', data.routes)
    ]
};
