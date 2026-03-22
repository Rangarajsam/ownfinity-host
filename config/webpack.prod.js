const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const {ModuleFederationPlugin} = require('webpack').container;
const packageJson = require('../package.json');


const prodConfig = {
    mode: 'production',
    devtool: false,
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            filename: 'remoteEntry.js',
            remotes: {
                products: `products@/products/latest/remoteEntry.js`,
                header: `header@/header/latest/remoteEntry.js`,
                authorization: `authorization@/authorization/latest/remoteEntry.js`,
                cart: `cart@/cart/latest/remoteEntry.js`,
                wishlist: `wishlist@/wishlist/latest/remoteEntry.js`,
                profile: `profile@/profile/latest/remoteEntry.js`
            },
            exposes: {
                './eventBus': './src/event-bus.js'
            },
            shared: {
                ...packageJson.dependencies,
                react: {
                    singleton: true,
                    requiredVersion: packageJson.dependencies.react,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: packageJson.dependencies['react-dom'],
                },
                'react-router-dom': {
                    singleton: true,
                    requiredVersion: packageJson.dependencies['react-router-dom'],
                },
            },
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);