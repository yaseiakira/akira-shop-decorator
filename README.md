# akira-shop-decorator 
### 基于vue.js,element-UI以及 uni-app 的商城装修插件,目前正在编写中

##进度
```
1.顶部工具条 已完成
2.搜索框 已完成
3.公告栏 已完成
4.卡片, 只完成了案例卡片
5.导航菜单 已完成
6.底部导航 已完成
7.表单 未完成
8.选项卡 未完成
9.按钮组 未完成
10.单按钮 已完成
11.浮动按钮 未完成
```

## 安装
```
npm install akira-shop-decorator
```
## 在vue项目中使用
```
// 在 main.js 中
import AkiraShopDecorator from 'akira-shop-decorator'
Vue.use(AkiraShopDecorator)

// 组件中
<template>
  <akira-shop-decorator></akira-shop-decorator>
</template>

<script>
  export default {
    data() {
      return {
        pages: []
      }
    }
  }
</script>

<style scoped lang="scss">
  /*注意引入样式*/
  @import '~akira-shop-decorator/lib/akira-shop-decorator.css'
</style>
```
## akira-shop-decorator 组件可用事件
```
// on-exit
<template>
    <akira-shop-decorator @on-exit="exit"></akira-shop-decorator>
</template>
<script>
  export default {
    methods:{
        exit(){
            // 退出按钮点击事件的逻辑
            this.$router.back();
        }
    }
  }
</script>
```
