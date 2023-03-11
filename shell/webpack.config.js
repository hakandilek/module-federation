const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "catalog": "http://localhost:4201/remoteEntry.js",
    "cart": "http://localhost:4300/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    'state-lib' : {singleton: true, strictVersion: true}
  },

  sharedMappings: ['state-lib'],

});
