微信移动端页面脚手架
====

## 前言

这个作为脚手架，每次做新项目时，不用那么麻烦去初始化工作环境了。
本来想使用yeoman去做的，奈何难懂不好用，使用git，简单粗暴明了。


## 框架说明

+ 样式使用[compass](http://compass-style.org/)
+ 前端构建使用[fis3](http://fis.baidu.com/)
+ `start.cmd`启动fis服务器
+ `dev.cmd`开发
+ `pub.cmd`发布


## 目录说明

    - other                    // 摆放psd设计稿及文档等的目录
    - public                   // 发布目录
    - source                   // 源码目录
        - css                  
        - img                  
            - icon             // 精灵图源图片
        - js                   
            - index.js         
        - scss                 
            - _animate.scss    // 动画库
            - _pc-sprite.scss  // sprite 库
            - _reset-m.scss    // 样式重置
            - style.scss       
        - thr                  // 其它文件目录
        - config.rb            
        - index.html           

        
## todo 

+ _reset-m.scss文件未整理完成
+ _animate.scss文件未整理完成
+ 图片优化不能用