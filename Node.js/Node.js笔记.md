# 使用Node.js创建第一个应用

## 1:本地常用电脑命令

- md 创建目录
- rmdir(rd) 删除命令，目录中没有文档
- echo on a.txt 创建空文件
- del 删除文件
- rm 文件名 删除文件
- cat 文件名 查看文件内容
- cat > 文件名 向文件中写上内容

## 2:使用nvm来更改node.js的配置

## nvm常用的命令
  
- nvm list 查看当前安装的node.js所有版本
- nvm install 版本号 安装指定版本的node.js
- nvm uninstall 版本号 卸载指定版本的node.js
- nvm use 版本号 选择指定版本的node.js

## 3：引入required模块

使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http</p>
`var http = require("http");`

## 4：创建服务器

使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。 函数通过 request, response 参数来接收和响应数据

1. 在项目的根目录创建一个serve.js的文件

```javascript
var http = require('http');   // 发送 HTTP 头部
http.createServer(function (request, response) {    // HTTP 状态值: 200 : OK
    response.writeHead(200, {'Content-Type': 'text/plain'});    // 内容类型: text/plain
    response.end('Hello World\n');    // 发送响应数据 "Hello World"
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');// 终端打印如下信息
```
