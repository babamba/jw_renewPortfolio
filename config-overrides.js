/**
 *
 * Mobx decorator를 사용할 수 있도록 해주는 config
 */

const {
  addDecoratorsLegacy, //MobX
  disableEsLint, //MobX
  override,
  addBabelPlugin,
  fixBabelImports,
  addLessLoader,
  adjustStyleLoaders,
  addWebpackPlugin,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");
const AntdThemePlugin = require("antd-theme/plugin");

//사용자 정의 웹팩 설정
module.exports = {
  webpack: override(disableEsLint(), addDecoratorsLegacy()),
};

module.exports = override(
  //myOverrides,
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addBabelPlugin([
    "babel-plugin-styled-components",
    {
      displayName: true,
    },
  ]),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  }),
  adjustStyleLoaders((loaders) => {
    loaders.use[0] = {
      loader: AntdThemePlugin.loader,
    };
  }),
  addWebpackAlias({
    ["components"]: path.resolve(__dirname, "./src/components"),
    ["hooks"]: path.resolve(__dirname, "./src/hooks"),
    ["pages"]: path.resolve(__dirname, "./src/pages"),
    ["images"]: path.resolve(__dirname, "./src/assets/images"),
    ["store"]: path.resolve(__dirname, "./src/store"),
    ["interfaces"]: path.resolve(__dirname, "./src/interfaces"),
  }),
  addWebpackPlugin(
    new AntdThemePlugin({
      themes: [
        {
          name: "dark",
          filename: require.resolve("antd/es/style/themes/dark.less"),
        },
        {
          name: "default",
          filename: require.resolve("antd/es/style/themes/default.less"),
        },
      ],
    })
  ),
  disableEsLint(),
  addDecoratorsLegacy()
);
