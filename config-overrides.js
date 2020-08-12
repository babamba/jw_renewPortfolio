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
  addWebpackPlugin
} = require('customize-cra');

const AntdThemePlugin = require('antd-theme/plugin');

//사용자 정의 웹팩 설정
module.exports = {
  webpack: override(disableEsLint(), addDecoratorsLegacy())
};

module.exports = override(
  //myOverrides,
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addBabelPlugin([
    'babel-plugin-styled-components',
    {
      displayName: true
    }
  ]),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' }
    }
  }),
  adjustStyleLoaders(loaders => {
    loaders.use[0] = {
      loader: AntdThemePlugin.loader
    };
  }),
  addWebpackPlugin(
    new AntdThemePlugin({
      themes: [
        {
          name: 'dark',
          filename: require.resolve('antd/lib/style/themes/dark.less')
        },
        {
          name: 'default',
          filename: require.resolve('antd/lib/style/themes/default.less')
        }
      ]
    })
  ),
  disableEsLint(),
  addDecoratorsLegacy()
);
