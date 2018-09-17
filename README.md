# 阮一峰webpack-demos

来源: [webpack-demos](https://github.com/ruanyf/webpack-demos)

对demo进行重命名，方便随时查看。

>总结webpack可以做如下事情

1. **多入口**：可以有多入口，多出口，解决多页问题；
2. 样式(局部作用域)、图片资源处理；babel前置处理+js压缩+创建html和打开浏览器插件
3. **代码分割技术**： require.ensure/bundle-loader
4. **复用处理**：相同代码打包一起插件CommonsChunkPlugin和vendor公用
5. **全局变量不打包**externals
6. **环境变量**的定义DefinePlugin
