import Vue from 'vue'

import cuCustom from './colorui/components/cu-custom.vue'

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
		// const componentName = fileName
		// 	.split('/')
		// 	.pop()
		// 	.replace(/\.\w+$/, '')

		// 全局注册组件
		Vue.component(
			componentConfig.default.name,
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
