import Vue from 'vue'

import util from './common.js'

export function initFilters () {
	Vue.filter('themeColorConvert', function(value) {
		return util.themeColorConvert(value)
	});
}
