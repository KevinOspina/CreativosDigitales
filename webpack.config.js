const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: __dirname + './src/html',//html/jss
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }

        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}