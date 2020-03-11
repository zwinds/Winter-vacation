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

# 大纲-day02
## Buffer基本操作
> Buffer对象是Node处理二进制数据的一个接口。它是Node原生提供的全局对象，可以直接使用，不需要require(‘buffer’)。

- 实例化
    + Buffer.from(array)
    + Buffer.from(string)
    + Buffer.alloc(size)
- 功能方法
    + Buffer.isEncoding() 判断是否支持该编码
    + Buffer.isBuffer() 判断是否为Buffer
    + Buffer.byteLength() 返回指定编码的字节长度，默认utf8
    + Buffer.concat() 将一组Buffer对象合并为一个Buffer对象
- 实例方法
    + write() 向buffer对象中写入内容
    + slice() 截取新的buffer对象
    + toString() 把buf对象转成字符串
    + toJson() 把buf对象转成json形式的字符串

## 核心模块API
### 路径操作
- 路径基本操作API

### 文件操作
- 文件信息获取
- 读文件操作
- 写文件操作
- 目录操作

### 文件操作案例

## 包
> 多个模块可以形成包，不过要满足特定的规则才能形成规范的包

### NPM （node.js package management）
> 全球最大的模块生态系统，里面所有的模块都是开源免费的；也是Node.js的包管理工具。

- [官方网站](https://www.npmjs.com/ )

### npm包安装方式
- 本地安装
- 全局安装

### 解决npm安装包被墙的问题
- --registry
    + npm config set registry=https//registry.npm.taobao.org 
- cnpm
    + 淘宝NPM镜像,与官方NPM的同步频率目前为10分钟一次 
    + 官网: http://npm.taobao.org/ 
    + npm install -g cnpm –registry=https//registry.npm.taobao.org 
    + 使用cnpm安装包: cnpm install 包名
- nrm
    + 作用：修改镜像源 
    + 项目地址：https://www.npmjs.com/package/nrm 
    + 安装：npm install -g nrm

### npm常用命令
- 安装包
- 更新包
- 卸载包

### yarn基本使用
- 类比npm基本使用

## 自定义包
### 包的规范
- package.json必须在包的顶层目录下
- 二进制文件应该在bin目录下
- JavaScript代码应该在lib目录下
- 文档应该在doc目录下
- 单元测试应该在test目录下

### package.json字段分析
- name：包的名称，必须是唯一的，由小写英文字母、数字和下划线组成，不能包含空格
- description：包的简要说明
- version：符合语义化版本识别规范的版本字符串
- keywords：关键字数组，通常用于搜索
- maintainers：维护者数组，每个元素要包含name、email（可选）、web（可选）字段
- contributors：贡献者数组，格式与maintainers相同。包的作者应该是贡献者数组的第一- 个元素
- bugs：提交bug的地址，可以是网站或者电子邮件地址
- licenses：许可证数组，每个元素要包含type（许可证名称）和url（链接到许可证文本的- 地址）字段
- repositories：仓库托管地址数组，每个元素要包含type（仓库类型，如git）、url（仓- 库的地址）和path（相对于仓库的路径，可选）字段
- dependencies：生产环境包的依赖，一个关联数组，由包的名称和版本号组成
- devDependencies：开发环境包的依赖，一个关联数组，由包的名称和版本号组成

### 自定义包案例


