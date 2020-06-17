import Vue from 'vue'
import App from './App.vue'

import AkiraDecorator from '../packages'

Vue.use(AkiraDecorator)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
