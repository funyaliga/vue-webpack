var webpack = require('webpack')
var config = require('./webpack.config.js')

config.debug = true
config.watch = true
config.devServer = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
}

module.exports = config