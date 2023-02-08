const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin"); //추가됨 sha256에러
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//여기서부터 추가됨 sha256
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
})
