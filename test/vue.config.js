const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin"); //추가됨 sha256에러

module.exports = defineConfig({
  devServer: {
    // 프록시 설정
    proxy: {
        // 프록시 요청을 보낼 api의 시작 부분
        '/api': {
            // 프록시 요청을 보낼 서버의 주소
            target: 'http://localhost:3000',
            changeOrigin: true
        }
    }
  },
  transpileDependencies: true,
  lintOnSave: false,//여기서부터 추가됨 sha256
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  }
  
})

