# akira-shop-decorator 
### 基于vue.js,element-UI以及 uni-app 的商城装修插件,目前正在编写中

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
