const path = require('path');

module.exports = {
    entry: {
        bundle: './src/index.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        // open: true
        static: {
            directory: path.resolve(__dirname, 'dist'),
            staticOptions: {},
            // Don't be confused with `devMiddleware.publicPath`, it is `publicPath` for static directory
            // Can be:
            // publicPath: ['/static-public-path-one/', '/static-public-path-two/'],
            publicPath: '/',
            // Can be:
            // serveIndex: {} (options for the `serveIndex` option you can find https://github.com/expressjs/serve-index)
            serveIndex: true,
            // Can be:
            // watch: {} (options for the `watch` option you can find https://github.com/paulmillr/chokidar)
            watch: true
        },
        watchFiles: ['dist/*', 'dist/**/*']   // htmlファイルでもWatchできる
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /(\.s[ac]ss)$/,
                use: [
                  'style-loader', // creates style nodes from JS strings
                  'css-loader', // translates CSS into CommonJS
                  //'postcss-loader', // 追記
                  'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    }
}