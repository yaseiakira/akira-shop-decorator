const bottomTabBar = {
    name: '底部导航',
    componentName: 'common-tabs-bar',
    icon: 'icon-ak-tabbar',
    property: {
        count: 4,
        color: 'gray',
        activeColor: 'green',
        tabs: [{
            text: '首页',
            customImage: false,
            image: '',
            activeImage: '',
            icon: 'home',
            enableBadge: false,
            badgeMax: 99,
            badgeValue: 1,
            clickConfig: {
                debug: true,
                type: 0,
                navigationConfig: {
                    page: '',
                    url: '',
                    type: 1
                },
                toastConfig: {
                    title: 'hello akira!',
                    icon: 'none', //success , loading,none
                    mask: false,
                    duration: 1500,
                    position: 'center' //top ,center,bottom
                },
                modalConfig: {
                    title: '提示',
                    content: 'hello akira!',
                    showCancel: true,
                    cancelText: '取消',
                    confirmText: '确定'
                },
                custom: {
                    methodName: ''
                }
            }
        }, {
            text: '商品',
            customImage: false,
            image: '',
            activeImage: '',
            icon: 'apps',
            enableBadge: false,
            badgeMax: 99,
            badgeValue: 1,
            clickConfig: {
                debug: true,
                type: 0,
                navigationConfig: {
                    page: '',
                    url: '',
                    type: 1
                },
                toastConfig: {
                    title: '',
                    icon: '', //success , loading,none
                    mask: false,
                    duration: 1500,
                    position: '' //top ,center,bottom
                },
                modalConfig: {
                    title: '',
                    content: '',
                    showCancel: true,
                    cancelText: '',
                    confirmText: ''
                },
                custom: {
                    methodName: ''
                }
            }
        }, {
            text: '购物车',
            customImage: false,
            image: '',
            activeImage: '',
            icon: 'cart',
            enableBadge: true,
            badgeMax: 99,
            badgeValue: 1,
            clickConfig: {
                debug: true,
                type: 0,
                navigationConfig: {
                    page: '',
                    url: '',
                    type: 1
                },
                toastConfig: {
                    title: '',
                    icon: '', //success , loading,none
                    mask: false,
                    duration: 1500,
                    position: '' //top ,center,bottom
                },
                modalConfig: {
                    title: '',
                    content: '',
                    showCancel: true,
                    cancelText: '',
                    confirmText: ''
                },
                custom: {
                    methodName: ''
                }
            }
        }, {
            text: '我的',
            customImage: false,
            activeImage: '',
            image: '',
            icon: 'people',
            enableBadge: false,
            badgeMax: 99,
            badgeValue: 1,
            clickConfig: {
                debug: true,
                type: 0,
                navigationConfig: {
                    page: '',
                    url: '',
                    type: 1
                },
                toastConfig: {
                    title: '',
                    icon: '', //success , loading,none
                    mask: false,
                    duration: 1500,
                    position: '' //top ,center,bottom
                },
                modalConfig: {
                    title: '',
                    content: '',
                    showCancel: true,
                    cancelText: '',
                    confirmText: ''
                },
                custom: {
                    methodName: ''
                }
            }
        }]
    }
}
export default bottomTabBar
