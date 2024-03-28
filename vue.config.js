const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

// const path = require("path");
// module.exports = {
//   pluginOptions: {
//     "style-resources-loader": {
//       preProcessor: "scss",
//       patterns: [path.resolve(__dirname, "./src/styles/global.scss")],
//     },
//   },
// };

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/assets/styles/global.scss";`,
      },
    },
  },
};
