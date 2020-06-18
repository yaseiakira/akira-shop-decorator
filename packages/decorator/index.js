import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import AkiraShopDecorator from './src'

// 为组件提供 install 安装方法，供按需引入
AkiraShopDecorator.install = function (Vue) {
    Vue.component(AkiraShopDecorator.name, AkiraShopDecorator)
}

Vue.use(ElementUI);

// 导出组件
export default AkiraShopDecorator
