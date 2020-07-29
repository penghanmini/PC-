export default {
  env: 'development',
  apis:{
    modules:{
      //登陆模块
      loginData:{
        host:"http://192.168.3.225:8090",
        url:"/"
      },
    },
    defaultHost: 'http://192.168.3.224:8870',//默认HOST（当loginData.host==""时，会使用defaulHost的值）
    // defaultUrl: ''//均为""时。则会请求本机

  },
  siteInfo:{
    // 多站点配置
    sites: {
      file_server_url_api: "",   // 文件下载地址
      file_server_url_file: "",   // 文件上传地址
    }
  }
}
