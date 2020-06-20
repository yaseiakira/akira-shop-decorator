const singleButton = {
    name: '单按钮',
    componentName: 'common-single-button',
    icon: 'icon-ak-btn',
    property: {
        paddingTop: 20,
        paddingRight: 10,
        paddingBottom: 20,
        paddingLeft: 10,
        block: false,
        align:'center',
        icon: 'search',
        round: true,
        circle: false,
        text: '按钮',
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

export default singleButton
