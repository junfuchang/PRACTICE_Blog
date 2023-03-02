/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1670488146390_7334";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    // database configuration
    client: {
      host: "127.0.0.1",
      port: "3306",
      user: "root",
      password: "123456",
      database: "bolg",
    },
    app: true,
    agent: false,
  };

  //跨域插件配置
  config.security = {
    csrf: {
      enable: false,
    },
    // csrf: false,
    domainWhiteList: ["*"],
  };
  config.cors = {
    // origin: 'http://localhost:3000', //只允许这个域进行访问接口
    // credentials: true,   // 开启认证
    //允许所有
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
  };

  return {
    ...config,
    ...userConfig,
  };
};
