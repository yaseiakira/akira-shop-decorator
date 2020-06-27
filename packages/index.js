import AkiraShopDecorator from './decorator'

import register from './decorator/component-register'

const components = [
    AkiraShopDecorator
]

const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
    register.componentsRegister()
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    AkiraShopDecorator
}
