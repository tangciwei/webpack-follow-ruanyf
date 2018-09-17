var webpack = require('webpack');

module.exports = {
    entry: {
        app: './main.js',
        // jquery should be included in the common chunk vendor.js
        vendor: ['jquery']
    },
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        })
    ]
};
