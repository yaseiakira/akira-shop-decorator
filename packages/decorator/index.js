import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AkiraShopDecorator from './src'
AkiraShopDecorator.install = function (Vue) {
    Vue.component(AkiraShopDecorator.name, AkiraShopDecorator)
}
Vue.use(ElementUI)
export default AkiraShopDecorator
