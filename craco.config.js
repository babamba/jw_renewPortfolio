const { whenDev } = require("@craco/craco");
const CracoAlias = require("craco-alias");
const CracoLessPlugin = require("craco-less");
const CracoAntDesignPlugin = require("craco-antd");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackBar = require("webpackbar");
module.exports = {
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      [
        "@babel/plugin-proposal-class-properties",
        {
          loose: true
        }
      ]
    ]
  },
  webpack: {
    plugins: [new WebpackBar({ profile: true }), ...whenDev(() => [new BundleAnalyzerPlugin()], [])]
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        // customizeTheme: getThemeVariables({
        //   dark: true
        // }),
        babelPluginImportOptions: {
          libraryDirectory: "es"
        }
      }
    },
    {
      plugin: CracoAlias,
      eslint: {
        enable: false
      },
      options: {
        source: "tsconfig",
        tsConfigPath: "tsconfig.paths.json"
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
