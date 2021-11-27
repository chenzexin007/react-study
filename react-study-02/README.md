## antd 按需引入
 1.npm install babel-plugin-import --save-dev
 2.package.json 的 babel 中加入
     "plugins": [
      [
       "import",
       {
        "libraryName": "antd",
        "style": "css"
       }
      ]
     ]

## fetch的使用
  1. 直接使用， 详细见官网

## react 中配置跨域解决方案
 1.在package.json中配置：  "proxy": "http://iwenwiki.com/api"
 2.手动配置代理： 
  1) 安装 http-poxy-middleware  
  2) 在src/根目录下新建 setupProxy.js文件， 并配置：
    const {createProxyMiddleware} = require("http-proxy-middleware");
        module.exports = function(app){
            app.use(
                createProxyMiddleware("/api",{
                    target:"http://47.96.0.211:9000",
                    changeOrigin:true,
                    pathRewrite:{
                    "^/api":""
                    }
                })
            )
        }   