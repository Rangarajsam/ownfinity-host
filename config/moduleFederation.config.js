const packageJsonCommon = require('../package.json');

const moduleFederationConfig = {
    name:'container',
    remotes:{
        products:'products@http://localhost:2001/remoteEntry.js'
    },
    shared:packageJsonCommon.dependencies
}

module.exports = moduleFederationConfig;