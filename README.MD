##轱辘  - 一个 Vue UI 组件

##介绍

##开始使用
1.添加 CSS 样式
    使用本框架，请在CSS中开启border-box
    ``
        *,*::before,*::after{margin: 0;padding: 0;box-sizing: border-box;}
    ``
    IE8 及以上浏览器都支持此样式

    你还需要设置默认颜色等变量 (后续会改为 SCSS 变量)
    ``
        :root{
            --button-height:32px;
            --font-size:14px;
            --button-bg:white;
            --button-active-bg:#eee;
            --border-radius:4px;
            --color:#333;
            --border-color:#999;
            --border-color-hover:#666;
        }
    ``
    IE15 及以上浏览器都支持此样式

2.安装 gulu
  ``
  npm i  --save lscgogogo
  ``
3.引入gulu
  ``
    import {Button, ButtonGroup, Icon} from 'lscgogogo'
    import 'lscgogogo/dist/index.css'

    export default {
      name: 'app',
      components: {
        'g-button': Button,
        'g-icon': Icon
      }
    }
  ``


##文档

##提问

##变更记录

##联系方式

##贡献代码

