const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const webpackCommon = require('./webpack.common');
const ModuleFederationConfig = require('./moduleFederation.config');

const devConfig = {
    mode: 'development',
    entry:'./src/index.js',
    output:{
        publicPath:'http://localhost:2000/'
    },
    devServer:{
        port:2000,
        historyApiFallback:true
    },
    plugins: [
        new ModuleFederationPlugin(ModuleFederationConfig)
    ]
}

module.exports = merge(webpackCommon, devConfig);