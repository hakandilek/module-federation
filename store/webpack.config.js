const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'state',

  exposes: {
    './Service': './src/app/state/state.service.ts',
    './Module': './src/app/state/state.module.ts',
    './Store': './src/app/state/store.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
