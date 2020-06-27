const topToolBar = {
    name: '顶部工具条',
    componentName: 'bar-top-panel',
    icon: 'icon-ak-top-tool-bar',
    property: {
        left: {
            text: '返回',
            icon: 'back',
            color: '',
            visible: true,
            clickConfig: {
                debug: true,
                type: 0,
                navigationConfig: {
                    page: '',
                    url: '',
                    type: 0
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
        },
        center: {
            useSearchBar: false,
            searchBarPlaceholder: '搜索...',
            roundSearchBar: true,
            text: '欢迎使用',
            color: '',
            clickConfig: {
                debug: true,
                type: 0,
                navigationConfig: {
                    page: '',
                    url: '',
                    type: 0
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
        },
        right: {
            text: '',
            icon: 'more',
            color: '',
            visible: true,
            clickConfig: {
                debug: true,
                type: 0,
                navigationConfig: {
                    page: '',
                    url: '',
                    type: 0
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
        }
    }
}
export default topToolBar
