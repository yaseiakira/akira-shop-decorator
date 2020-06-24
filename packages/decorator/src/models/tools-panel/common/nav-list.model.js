const navListModel = {
    name: '列表导航',
    componentName: 'common-nav-list',
    icon: 'icon-ak-nav-list',
    property: {
        type: 0, // 0 列表, 1 宫格
        bgColor: 'white',
        showArrow: true,
        cardType: false,
        columns: 3,
        border: false,
        menus: [{
            icon: 'circlefill',
            customImage: false,
            image: '',
            text: '菜单1',
            color: 'gray',
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
        }, {
            icon: 'tagfill',
            customImage: false,
            image: '',
            text: '菜单2',
            color: 'gray',
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
        }, {
            icon: 'cart',
            customImage: false,
            image: '',
            text: '菜单3',
            color: 'gray',
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
        }]
    }
}
export default navListModel
