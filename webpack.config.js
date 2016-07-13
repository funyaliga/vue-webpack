var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'app.js')
    },
    // devtool : 'source-map',
    output: {
        path: BUILD_PATH,
        publicPath: 'dist/', //代码分割出来的位置
        filename: 'app.js',
        chunkFilename: 'chunks/[name]-[chunkhash:8].js'
    },
    devtool: false,
    module : {
        loaders : [
            { test : /\.vue$/, loader : "vue"},
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-loader/,
                loader : "babel"
            }, //支持ES6
        ]
    },
    babel: {
        presets: ['es2015']
    },
    vue: {
        postcss: [
            require('precss'),
        ],
        autoprefixer: {
            browsers: ["Android >= 2.3", "iOS >= 7"],
            cascade: false  // 不美化输出 css
        }
    },
    // publicPath: './dist/',
    // 将jQuery全局变量变为模块可引
    externals: { jquery: "jQuery" },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common.js")
    ]
};
