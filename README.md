# akira-shop-decorator 
## 基于vue.js,element-UI以及 uni-app 的商城装修插件,目前正在编写中

# 安装
```
npm install akira-shop-decorator
```
# 在vue项目中使用
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
        
      }
    }
  }
</script>

<style scoped lang="scss">
 @import "~akira-shop-decorator/lib/akira-shop-decorator.css"; // 注意要引入样式
</style>
```
