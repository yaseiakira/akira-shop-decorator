const execComponentEvent = (config) => {
	switch (config.type) {
		case 0: // 导航
			if (config.navigationConfig.type == 0 && config.navigationConfig.page) {
				// 普通页面导航
				uni.navigateTo({
					url: config.navigationConfig.page
				})
				break;
			}
			if (config.navigationConfig.type == 1 && config.navigationConfig.page) {
				// tabbar导航
				uni.switchTab({
					url: config.navigationConfig.page
				})
				break;
			}
			if (config.navigationConfig.url && /^http.+$/.test(config.navigationConfig.url)) {
				// 跳转外部链接
				uni.navigateTo({
					url: `/pages/web-borwser/index?url=${config.navigationConfig.url}`
				})
			}
			break;
		case 1: // 提示框
			uni.showToast(config.toastConfig)
			break;
		case 2: // 对话框
			uni.showModal(config.modalConfig)
			break;
		case 3: // 自定义
			if (config.custom.methodName) {
				uni.$emit(config.custom.methodName)
			}
			break;
		default:
			break;
	}
}
export default {
	execComponentEvent
}
