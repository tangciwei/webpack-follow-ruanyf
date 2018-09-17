module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css: 读css文件
                // insert <style> tag into HTML page
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
