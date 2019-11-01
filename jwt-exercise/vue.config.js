module.exports = {
  pubilcPath: process.env.NODE_ENV === 'production'? '/vue-project': '/',
  outputDir: 'dist',
  assetsDir: 'static',
  runtimeCompiler:true,
  parallel:require('os').cpus().length>1,
  productionSourceMap:false,
  chainWebpack:config=> {
    config.resolve.alias.set('component',path.resolve(__dirname,'src/components'));
  },
  configureWebpack:{
    plugin:[]
  },
  devServer: {
    proxy: {
      '/api':{
        target: 'http://a.zf.cn:3000',
        changeOrigin: true
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns:[
        path.resolve(__dirname,'src/assets/common.less')
      ]
    }
  }

}