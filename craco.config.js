const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              hack: `true;@import "${require.resolve(
                "./src/assets/less/core-theme.less"
              )}";`,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
