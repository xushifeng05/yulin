module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    // 端口配置
    port: 1888,
    // 反向代理配置
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
