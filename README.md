# PRACTICE_Blog

一个简易（非常不完善）的博客系统

分为**前端展示**(`blog-next-web`)、**后台管理**(`blog-react-admin`)、**接口开发**(`blog-egg-service`)三大项目模块



## blog-next-web

### 项目介绍

**博客前台页面展示**

使用`Nest`脚手架搭建的`React`项目：使用`Antd`组件库完成界面设计与搭建，配合`marked`、`markdown-navbar`、`highlight`等插件完成`Markdown`文章与目录的展示，代码块高亮等功能。

### 项目展示

- 首页

![blog-next-web-首页](./README-ASSETS/blog-next-web-%E9%A6%96%E9%A1%B5-1677774479552-1.jpeg)

- 文章分类展示

![blog-next-web-分类展示](./README-ASSETS/blog-next-web-%E5%88%86%E7%B1%BB%E5%B1%95%E7%A4%BA-1677774479553-2.jpeg)

- 文章详情

![blog-next-web-文章详情页](./README-ASSETS/blog-next-web-%E6%96%87%E7%AB%A0%E8%AF%A6%E6%83%85%E9%A1%B5.jpeg)



## blog-react-admin

### 项目介绍

博客的后台管理功能

使用create-react-app脚手架搭建，配合Typescript，依靠antd组件、web-vitals等插件，完成了博客系统的基本功能：

1. 博客文章列表的展示与编辑
2. 文章的在线编写与提交
3. 博客前台展示的全局配置选项
4. 平台用户管理

### 项目展示

- 登录页面

![blog-react-admin-登陆页面](./README-ASSETS/blog-react-admin-%E7%99%BB%E9%99%86%E9%A1%B5%E9%9D%A2.jpeg)

- 文章列表

![blog-react-admin-文章列表](./README-ASSETS/blog-react-admin-%E6%96%87%E7%AB%A0%E5%88%97%E8%A1%A8.jpeg)

- 新增文章

![blog-react-admin-新增文章](./README-ASSETS/blog-react-admin-%E6%96%B0%E5%A2%9E%E6%96%87%E7%AB%A0.jpeg)

- 博客全局配置

![blog-react-admin-博客全局配置](./README-ASSETS/blog-react-admin-%E5%8D%9A%E5%AE%A2%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE.jpeg)

- 用户管理

![blog-react-admin-用户管理](./README-ASSETS/blog-react-admin-%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86.jpeg)



## blog-egg-service

### 项目介绍

博客系统前台展示与后台管理的接口实现

使用`Egg.js`框架搭建

