const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        `${__dirname}/src/js/App`
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: `${__dirname}/src/js`,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.js?/,
                include: `${__dirname}/src/js`,
                loaders: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.scss$/,
                loader: 'style!css-loader?modules&importLoaders=1&' +
                    'localIdentName=[name]__[local]___[hash:base64:5]' +
                    '!sass?sourceMap'
            },
            {
                test: /\.png$/,
                loader: "url-loader?mimetype=image/png"
            }
        ]
    },
    eslint: {
        configFile: './.eslintrc'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
