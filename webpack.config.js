const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        'font-awesome-loader',
        `${__dirname}/app-client`,
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        preLoaders: [
            {
                test: /(\.js$|\.jsx$)/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: `${__dirname}/node_modules/`,
                loaders: ['react-hot', 'babel-loader'],
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
    eslint: {
        configFile: './.eslintrc',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/index.tmpl.html`,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
