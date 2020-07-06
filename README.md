# 1 创建项目

打开终端，使用`create-react-app`创建项目

```bash
npx create-react-app ygshop
```

# 2 引入项目需要的图标

+ 在image文件夹有雪碧图 `icon.png`

  ![icon]( 项目步骤.assets/icon.png)

+ 在public文件夹下面创建`icon.css`文件，专门截取某个图标的位置

  ```css
  .icon {
      display         : inline-block;
      background-image: url(./images/icon.png);
      background-size : 350px 350px;
      width           : 30px;
      height          : 30px;
  }
  
  .icon-menu {
      background-position: -317px 5px;
  }
  
  .icon-soso {
      background-position: -320px -21px;
  }
  
  .icon-home {
      background-position: -110px -4px;
      background-size    : 280px 280px;
  }
  
  .icon-home-o {
      background-position: -110px -33px;
      background-size    : 280px 280px;
  }
  
  .icon-community {
      background-position: -73px -4px;
      background-size    : 280px 280px;
  }
  
  .icon-community-o {
      background-position: -73px -33px;
      background-size    : 280px 280px;
  }
  
  .icon-return {
      background-position: -280px -10px;
  }
  
  .icon-add {
      background-position: -320px -175px;
  }
  
  .icon-radio-check {
      background-size    : 300px 300px;
      background-position: -95px -128px;
  }
  
  .icon-radio {
      background-size    : 300px 300px;
      background-position: -127px -128px;
  }
  
  .icon-sub {
      background-size    : 200px 200px;
      background-position: -106px -25px;
      width              : 20px;
      height             : 20px;
  }
  
  .icon-add {
      background-size    : 200px 200px;
      background-position: -106px -4px;
      width              : 20px;
      height             : 20px;
  }
  
  .icon-cart {
      background-size    : 280px 280px;
      background-position: -36px -4px;
  }
  
  .icon-cart-o {
      background-size    : 280px 280px;
      background-position: -36px -33px;
  }
  .icon-my {
      background-size    : 280px 280px;
      background-position: 0 -4px;
  }
  .icon-my-o {
      background-size    : 280px 280px;
      background-position: 0 -33px;
  }
  .icon-pay{
      background-position: 0 -250px;
      background-size: 280px 280px;
  }
  .icon-recieve{
      background-size: 280px 280px;
      background-position: -32px -250px;
  }
  .icon-recieve-good{
      background-position: -64px -250px;
      background-size: 280px 280px;
  }
  .icon-cancel{
      background-position: -92px -250px;
      background-size: 280px 280px;
  }
  .icon-aftersale{
      background-position: -120px -250px;
      background-size: 280px 280px;
  
  ```

+ 在src文件夹下面创建`icon.js`文件

  ```js
  import React, { Component } from 'react'
  export default class Icon extends Component {
      render() {
          return (
              <div>
                  <i className="icon icon-menu"></i>
                  <i className="icon icon-soso"></i>
                  <i className="icon icon-home"></i>
                  <i className="icon icon-home-o"></i>
                  <i className="icon icon-community"></i>
                  <i className="icon icon-community-o"></i>
                  <i className="icon icon-return"></i>
                  <i className="icon icon-radio-check"></i>
                  <i className="icon icon-radio"></i>
                  <i className="icon icon-add"></i>
                  <i className="icon icon-sub"></i>
                  <i className="icon icon-cart-o"></i>
                  <i className="icon icon-cart"></i>
                  <i className="icon icon-my"></i>
                  <i className="icon icon-my-o"></i>
                  <i className="icon icon-pay"></i>
                  <i className="icon icon-recieve"></i>
                  <i className="icon icon-recieve-good"></i>
                  <i className="icon icon-cancel"></i>
                  <i className="icon icon-aftersale"></i>
              </div>
          )
      }
  }
  ```

# 2.1初始化样式

在public文件夹生成`common.css`文件作为初始化样式

```css
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
    --themeColor:#ec3c4e
}
```

在 `public/index.html` 页面引入  图标 css 文件和初始化样式

```html
  <link rel="stylesheet" href="%PUBLIC_URL%/icon.css">
  <link rel="stylesheet" href="%PUBLIC_URL%/common.css">
```

安装axios

```js
npm i axios --save
```

安装路由react路由

```js
npm i react-router-dom --save
```

项目有用到swiper库，所以也要安装

```js
npm i swiper --save
```

# 3. 安装对css 预处理器sass 支持

```
npm install node-sass --dev
```

# 3.1定义开发配置

在项目根目录（跟src，public同级）创建两个文件`.env.development`和`.env.production`，配置axios的url的地址

> 1，关于文件名：必须以如下方式命名，不要乱起名，也无需专门手动控制加载哪个文件
>
> 　　.env 全局默认配置文件，不论什么环境都会加载合并
>
> 　　.env.development 开发环境下的配置文件
>
> 　　.env.production 生产环境下的配置文件

两个文件的内容都是以下url的配置

```js
REACT_APP_URL = http://s.linweiqin.com/api/s/
```

配置好之后就可以使用了，这里我是在src文件创建util库存放`axios.js`

```js
const instance = axios.create({
    baseURL: process.env.REACT_APP_URL
  });
```

![env文件配置]( 项目步骤.assets/env文件配置.png)

这里的`process`就是去访问.env的文件里面的变量

# 4.添加移动端的适配方案

> Flex 布局 + rem + flexible+sass

## React

1. 暴露webpack配置，即 react-scripts 包

```bash
npm run eject
```

⚠️ 在运行该命令的时候，要先将已经修改的文件提交到本地仓库中过，否则会报错！

2. 安装项目项目需要的包 `lib-flexible` 、 `postcss-px2rem` 和 `postcss-loader`：

```bash
npm install postcss-px2rem lib-flexible --save
npm install postcss-loader --dev
```

3. 在项目的 public/index.html 入口文件添加 

```html
<meta name="viewport" content="width=device-width,inital-scale=1.0,
    maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
```

4. 然后在项目入口文件 index.js 中引入 `lib-flexible`

```js
import "lib-flexible" ;
```

5. 接着，在项目config目录下的 webpack.config.js 中引入 `postcss-px2rem`

```bash
const px2rem = require("postcss-px2rem");
```

![image-20200627220634758](%20%E9%A1%B9%E7%9B%AE%E6%AD%A5%E9%AA%A4.assets/image-20200627220634758.png)

- 在 webpack.config.js 的 `postcss-loader` loader里面添加 ：

```js
{
        loader: require.resolve("postcss-loader"),
        options: {
          /* 省略代码... */
          plugins: () => [
            require( postcss-flexbugs-fixes ),
            require( postcss-preset-env )({
              autoprefixer: {
                flexbox:  no-2009 ,
              },
              stage: 3,
            }),
            px2rem({remUnit: 37.5}), // 添加的内容
            /* 省略代码... */
          ],
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
      },
```



![image-20200627220813596](%20%E9%A1%B9%E7%9B%AE%E6%AD%A5%E9%AA%A4.assets/image-20200627220813596.png)

重新启动项目，发现里面的px单位都变成了rem

注意：使用 px2rem-loader 后再使用px上有些不同：
    直接写 px ，编译后会直接转化成rem —— 除开下面两种情况，其他长度用这个
    在 px 后面添加 /*no*/ ，不会转化 px，会原样输出。 —— 一般border需用这个
    在 px 后面添加 /*px*/ ，会根据 dpr 的不同，生成三套代码。—— 一般字体需用这个,默认是@2x图 style

```css
.App {
  .header {
    border: 10px solid #ddd; /*no*/
    color:#f00;
    font-size: 100px; /*px*/  
  }
}
```

## Vue

vue项目配置px2rem

- 首先，我们使用 vue 的脚手架 vue-cli 初始化一个 webpack 项目（前提是已经安装过 vue-cli，具体不再阐述），一些选项根据自己项目需要选择。

```
vue init webpack my-app
```

- 命令执行之后，会在当前目录生成一个以“my-app”命名的项目文件夹。进入项目目录：

```
cd my-app
```

- 使用`yarn` 安装项目所需依赖后，安装 `lib-flexible` 和  `px2rem-loader`：

```
yarn add lib-flexible
yarn add px2rem-loader --dev
```

- 在入口页面 index.html 中设置``标签：

```
<meta name="viewport" content="width=device-width,inital-scale=1.0,
    maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
```

- 然后在项目入口文件 main.js 中引入 `lib-flexible`：

```
  import "lib-flexible/flexible.js" ;
```

- **用 vue-cli3 创建的 vue 项目配置 px2rem-loader 如下：**

    找到文件 node_modules/@vue/cli-service/lib/config/css.js，在css loader之前添加规则，如下所示：

  ![image-20200624175748054](%20%E9%A1%B9%E7%9B%AE%E6%AD%A5%E9%AA%A4.assets/image-20200624175748054.png)

  ```js
  rule
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .options({emUnit: 75})
  ```

- 最后，使用 `yarn dev` 重启项目，会发现自己设置的px被转为rem 了。

![image-20200624084208330](%20%E9%A1%B9%E7%9B%AE%E6%AD%A5%E9%AA%A4.assets/image-20200624084208330.png)



## 适用情况 & 不适用情况

- 以上实现转换适用于：

  （1）vue 组件中编写的下的css。

  （2）从 react 项目的 index.js 或者 vue 项目的 main.js 中通过`import ../../static/css/reset.css `引入css。

  （3）在 vue 组件的`import ../../static/css/reset.css `中引入css。

- 另外的情况不适用：

  （1）在 vue 组件的中通过`@import "../../static/css/reset.css"` (可考虑上面（2）、（3）的形式引入)。

  （2）外部样式：``。

  （3）元素内部样式：`style="height: 417px; width: 550px;"`。



