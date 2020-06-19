import AkiraShopDecorator from './decorator'
import ClickEventManager from './decorator/src/components/click-event-manager/click-event-manager'
import ColoruiIconSelector from './decorator/src/components/colorui-icon-selector/colorui-icon-selector'
import CommonSingleButtonProperty from './decorator/src/components/property-panels/common-single-button-property'
import CommonTabsBarProperty from './decorator/src/components/property-panels/common-tabs-bar-property'
import CommonTopToolBarProperty from './decorator/src/components/property-panels/common-top-tool-bar-property'
import CommonSearchBarProperty from './decorator/src/components/property-panels/common-search-bar-property'
import PageProperty from './decorator/src/components/property-panels/page-property'
import ThemeColorsSelector from './decorator/src/components/theme-selector/theme-colors-selector'
import ThemeColorPicker from './decorator/src/components/theme-selector/theme-color-picker'
import SingleImagePicker from './decorator/src/components/single-image-picker/single-image-picker'
import CommonButtonPropertyComponent from './decorator/src/components/common-button-property-component/common-button-property-component'

const components = [
    AkiraShopDecorator,
    ClickEventManager,
    ColoruiIconSelector,
    ThemeColorsSelector,
    ThemeColorPicker,
    SingleImagePicker,
    CommonSingleButtonProperty,
    CommonTabsBarProperty,
    CommonTopToolBarProperty,
    CommonSearchBarProperty,
    PageProperty,
    CommonButtonPropertyComponent

]

const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    AkiraShopDecorator
}
