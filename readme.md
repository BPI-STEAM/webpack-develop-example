# webpack-develop-example

这个示例项目将提供一个本地开发浏览器组件运行环境，使用 webpack 打包，提供各类 JavaScript 使用示范，例如：设计并导出闭包对象，外部引用浏览器第三方组件，VSCODE 本地开发，近似 Js bin 的开发基础示例。

![](readme.png)

## ready venv

```shell
npm i webpack webpack-cli webpack-dev-server
```

## use local file

### build + watch

```shell
node_modules/.bin/webpack -w
```

### view

dist/index.html open in brower.

In VSCODE Recommend a plug-in `open in brower`.

### use server file

```shell
node_modules/.bin/webpack-dev-server
```

### view

http://localhost:8080/dist/

## Interesting thing

https://www.v2ex.com/t/310767

不要学它们， Jser 。

## 说明

以茉莉机器人为例，这示例提供了借用 webpack 编写 浏览器端面向对象的 JavaScript 代码供参考。
