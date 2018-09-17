// create index.html for you
var HtmlwebpackPlugin = require('html-webpack-plugin');
// 打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'html-webpack-plugin',
            filename: 'index.html'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ]
};
