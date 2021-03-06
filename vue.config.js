module.exports = {
  devServer: {
    open: false, // 编译完成是否打开网页
    host: 'localhost', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 9999, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    proxy: {
      [process.env.VUE_APP_API]: {
        target: 'http://upload.9yuecloud.com:8887', // API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_API}`]: '',
        },
      },
    },
    // css: {
    //   loaderOptions: {
    //     scss: {
    //       additionalData: "@import './src/styles/scssconfig.scss';",
    //     },
    //   },
    // },
  },
}
