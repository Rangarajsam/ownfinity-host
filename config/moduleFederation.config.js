const { exposes, filename } = require('../../Ownfinity-Products/config/moduleFederaion.config');
const packageJsonCommon = require('../package.json');

const moduleFederationConfig = {
    name: 'container',
    filename: 'remoteEntry.js',
    remotes: {
        products: 'products@http://localhost:2001/remoteEntry.js',
        header: 'header@http://localhost:2002/remoteEntry.js'
    },
    exposes: {
        './eventBus': './src/event-bus'
    },
    shared: {
        ...packageJsonCommon.dependencies,
        mitt: { singleton: true }
    }
}

module.exports = moduleFederationConfig;