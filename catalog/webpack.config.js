const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'catalog',

  exposes: {
    './Component': './src/app/catalog/catalog.component.ts',
    './Module': './src/app/catalog/catalog.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
