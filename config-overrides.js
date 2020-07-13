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
  // disableChunk,
  // addBundleVisualizer,
} = require('customize-cra');

const AntdThemePlugin = require('antd-theme/plugin');

// const fs = require('fs');
// const path = require('path');
//const { updateConfig } = require('react-app-rewire-antd-theme');
// const options = {
//   varFile: path.join(__dirname, './src/asset/css/variable.less'),
//   generateOnce: false
// };
// const paletteLess = fs.readFileSync(__dirname, './src/asset/css/variables.less', 'utf8');
// const variables = lessToJs(paletteLess);

// const options = {
//   antDir: path.join(__dirname, './node_modules/antd'),
//   stylesDir: path.join(__dirname, './src/asset/css'),
//   varFile: path.join(__dirname, './src/asset/css/variable.less'),
//   mainLessFile: path.join(__dirname, './src/asset/css/custom.less'),
//   themeVariables: Object.keys(variables),
//   indexFileName: 'index.html',
//   generateOnce: false,
//   publicPath: '' // e.g. in case you are hosting at gh-pages `https://username.github.io/project` then you can add `/project` here
// };

// const options = {
//   antDir: path.join(__dirname, './node_modules/antd'),
//   varFile: path.join(__dirname, './src/asset/css/variable.less'),
//   stylesDir: path.join(__dirname, './src/asset/css'),
//   themeVariables: ['@primary-color'],
//   mainLessFile: path.join(__dirname, './src/asset/css/custom.less'),
//   outputFilePath: path.join(__dirname, './public/color.less'), // if provided, file will be created with generated less/styles
//   customColorRegexArray: [/^fade\(.*\)$/] // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
// };

// generateTheme(options)
//   .then(less => {
//     console.log('Theme generated successfully');
//   })
//   .catch(error => {
//     console.log('Error', error);
//   });

// const options = {
//   vars: {
//     'primary-color': '#eb6608', // primary color for all components
//     'link-color': '#1890ff', // link color
//     'success-color': '#52c41a', // success state color
//     'warning-color': '#faad14', // warning state color
//     'error-color': '#f5222d', // error state color
//     'font-size-base': '14px', // major text font size
//     'heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
//     'text-color': 'rgba(0, 0, 0, 0.65)', // major text color
//     'text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
//     'disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
//     'border-radius-base': '4px', // major border radius
//     'border-color-base': '#d9d9d9', // major border color
//     'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)' // major
//   }
// };

//사용자 정의 웹팩 설정
module.exports = {
  webpack: override(disableEsLint(), addDecoratorsLegacy())
};

// function myOverrides(config, env) {
//   config = updateConfig(config, env, options);
//   return config;
// }

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
      // any extra config from babel-plugin-styled-components
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
  // addBundleVisualizer(
  //   {
  //     analyzerMode: 'static',
  //     reportFilename: 'report.html',
  //   },
  //   true
  // ),
  disableEsLint(),
  // disableChunk(),
  addDecoratorsLegacy()
);
