const searchBar = {
    name: '搜索框',
    componentName: 'common-search-bar',
    icon: 'icon-ak-search-bar',
    property: {
        bar: {
            bgColor: 'white',
            round: true,
            placeholder: '搜索...',
            icon: 'search'
        },
        button: {
            icon: 'search',
            round: true,
            circle: false,
            text: '搜索',
            size: 'medium',
            shadow: false,
            isLine: false,
            bgColor: 'green',
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

export default searchBar
