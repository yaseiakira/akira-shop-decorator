import Vue from 'vue'

import cuCustom from './colorui/components/cu-custom.vue'

// import componentContainer from '@components/component-container.vue'
// import commonBasicForm from '@components/common/form/common-basic-form.vue'
// import commonButton from '@components/common/common-button.vue'
// import commonButtonsGroup from '@components/common/common-buttons-group.vue'
// import commonCard from '@components/common/common-card.vue'
// import commonFloatButton from '@components/common/common-float-button.vue'
// import commonNavList from '@components/common/common-nav-list.vue'
// import commonNoticBar from '@components/common/common-notice-bar.vue'
// import commnSearchBar from '@components/common/common-search-bar.vue'
// import commonTabs from '@components/common/common-tabs.vue'
// import commonTabsBar from '@components/common/common-tabs-bar.vue'

// import mediaAudio from '@components/media/media-audio.vue'
// import mediaVideo from '@components/media/media-video.vue'

// import othersBlock from '@components/others/others-block.vue'
// import othersLine from '@components/others/others-line.vue'
// import othersTitle from '@components/others/others-title.vue'

// import picturesBox from '@components/pictures/pictures-box.vue'
// import picturesGroup from '@components/pictures/pictures-group.vue'
// import picturesSlider from '@components/pictures/pictures-slider.vue'
// import picturesBanner from '@components/pictures/pictures-banner.vue'

// import productList from '@components/product/product-list.vue'
// import productTabs from '@components/product/product-tabs.vue'

const register = () => {
	const requireComponent = require.context(
		// 其组件目录的相对路径
		'./@components',
		// 是否查询其子目录
		true,
		// 匹配基础组件文件名的正则表达式
		/[a-z]\w+\.(vue|js)$/
	)

	Vue.component('cu-custom', cuCustom)

	requireComponent.keys().forEach(fileName => {
		// 获取组件配置
		const componentConfig = requireComponent(fileName)

		// 获取组件的 PascalCase 命名
		const componentName = fileName
			.split('/')
			.pop()
			.replace(/\.\w+$/, '')

		// 全局注册组件
		Vue.component(
			componentName,
			// 如果这个组件选项是通过 `export default` 导出的，
			// 那么就会优先使用 `.default`，
			// 否则回退到使用模块的根。
			componentConfig.default || componentConfig
		)
	})
}
export default {
	register
}
