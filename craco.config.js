const { whenDev } = require("@craco/craco");
const CracoAlias = require("craco-alias");
const CracoLessPlugin = require("craco-less");
const CracoAntDesignPlugin = require("craco-antd");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackBar = require("webpackbar");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

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
    plugins: [
      new FilterWarningsPlugin({
        exclude: /Conflicting order/
      }),
      new WebpackBar({ profile: true }),
      new MiniCssExtractPlugin({
        ignoreOrder: true
      }),
      ...whenDev(() => [new BundleAnalyzerPlugin()], [])
    ]
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        babelPluginImportOptions: {
          libraryName: "antd",
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
