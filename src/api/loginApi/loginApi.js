import apiFactory from "../apiFactory";

const module = {
  moduleName: "loginData",
  apis: [{
    // 登陆界面
    method: "post", // 请求方式
    name: "login", // 接口名称
    url: "/auth/login" // 接口全路径
  },{
    // 退出登录
    method: "post", // 请求方式
    name: "logout", // 接口名称
    url: "/auth/logout" // 接口全路径
  }]
};

export default apiFactory(module)
