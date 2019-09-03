const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './../PruebaCreaivos3/src/js/index.js',
    output: {
        path: __dirname + './../PruebaCreaivos3/src/html/jss',//html/jss
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