# akira-shop-decorator 

### 基于vue.js, element-UI以及 uni-app 的商城装修插件, 目前正在编写中

##进度

``` 
1.顶部工具条 已完成
2.搜索框 已完成
3.公告栏 已完成
4.卡片, 已完成
5.导航菜单 已完成
6.底部导航 已完成
7.表单 未完成
8.选项卡 未完成
9.按钮组 未完成
10.单按钮 已完成
11.浮动按钮 未完成
```

## 开发和运行
``` 
// 下载本项目后
npm run dev

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

## 在纯html + js 项目中使用
```
// 1.拷贝 本项目 lib 中的 displayer 文件夹, fonts文件夹,akira-shop-decorator.css,akira-shop-decorator.umd.min.js 到你的项目中位置任意,需要配置 displayer-base-path,如果未配置,则默认是 /akira-sd-displayer/index.html

// 2.引入 本项目 lib 中的样式 和 js代码 , 因为是基于vue 和 element-ui 的,所以可能需要需要引入库之前引入这两个库(js版)
// 引入element-ui js版库
<link href="youpath/element-ui/index.css" rel="stylesheet" />
// 引入本项目样式库
<link href="lib/akira-shop-decorator.css?t=@ticks" rel="stylesheet" />

// 引入vue 和 element-ui js版库
<script src="youpath/js/vue.min.js"></script>
<script src="youpath/js/element-ui/index.js"></script>
// 引入本项目js库
<script src="lib/akira-shop-decorator.umd.min.js"></script>

// 3.然后就可以按照下方的示例使用了
```


## akira-shop-decorator 组件可用属性、事件

``` 
// displayer-base-path : 自定义displayer页面路径 如 : /youpath/js/decorator/displayer/index.html
<template>
    <akira-shop-decorator @on-exit="exit" 
                          displayer-base-path="custom-dosplayer-path"
                          :page-list="pages"
                          :new-page-handler="newPage"
                          :save-page-handler="savePage"
                          :delete-page-handler="deletePage"></akira-shop-decorator>
</template>
<script>
  export default {
    data: () {
           return {
              pages:[]
           }
    },
    created(){
      // 你自己的api接口
      api.getPages().then(data=>{
        this.pages = data
      }).catch(()=>{})
    },
    methods:{
      newPage(e) {
        // 返回Promise 或者 页面对象 ,结构同 e 参数, 注意 e.id 必须返回
        // e = { id:'', name:'页面名称', type:0 , data:'' }
        // e.type : 0 首页,1 产品列表 ,2 产品详情,3 个人中心, 4 单页
        // e.data : 新页面默认是 '' 空字符串
        return api.newPage(e)           
      },
      savePage(e){
        // 返回Promise 或者 bool 值,标识是否保存成功
        // e = { id:'page-id', name:'页面名称', type:0 , data:{} }
        // e.type : 0 首页,1 产品列表 ,2 产品详情,3 个人中心, 4 单页
        // e.data : 组件json对象 详情可自行 console.log 打印出来查看
        return api.savePage(e)
      },
      deletePage(id){
        // id: 页面id
        // 返回Promise 或者 bool 值,标识是否删除成功
        return api.deletePage(id)
      },
      exit(){
        // 退出按钮点击事件的逻辑
        this.$router.back();
      }
    }
  }
</script>
```
