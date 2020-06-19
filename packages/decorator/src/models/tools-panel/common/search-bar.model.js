const searchBar = {
    name: '搜索框',
    componentName: 'common-search-bar',
    icon: 'icon-ak-search-bar',
    property: {
        bar: {
            bgColor: '',
            round: true,
            placeholder: '搜索...',
            icon: 'search'
        },
        button: {
            icon: '',
            round: true,
            circle: false,
            text: '搜索',
            size: '',
            shadow: false,
            isLine: false,
            bgColor: 'green',
            textColor: '',
            clickConfig: {
                debug: true,
                type: 0,
                navigationConfig: {
                    page: '',
                    url: '',
                    type: 0
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
        }
    }
}

export default searchBar
