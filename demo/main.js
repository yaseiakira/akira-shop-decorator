import Vue from 'vue'
import App from './App.vue'

import AkiraShopDecorator from '../packages'

Vue.use(AkiraShopDecorator)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
