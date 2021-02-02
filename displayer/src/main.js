import Vue from 'vue'
import App from './App'

import registerComponents from 'register-components.js'

import {
	initFilters
} from '@utils/globle-filters.js'

Vue.config.productionTip = false

App.mpType = 'app'

registerComponents.register();
initFilters();

const app = new Vue({
	...App
})
app.$mount()
