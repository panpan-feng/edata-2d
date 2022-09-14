module.exports = {
  configureWebpack: {
    plugins: [

    ]
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";` //引入全局变量   

      }
    }
  },
  // devServer: {
  //   open: true,
  //   hot: true,
  // }
}