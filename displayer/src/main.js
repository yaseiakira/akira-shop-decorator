import Vue from 'vue'
import App from './App'

import registerComponents from 'register-components.js'

Vue.config.productionTip = false

App.mpType = 'app'

registerComponents.register();

const app = new Vue({
    ...App
})
app.$mount()
