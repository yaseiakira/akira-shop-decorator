const noticeBar = {
    name: '公告栏',
    componentName: 'common-notice-bar',
    icon: 'icon-ak-notice-bar',
    property: {
        icon: 'notification',
        iconColor: 'red',
        bgColor: 'white',
        textColor: 'gray',
        autoplay: true,
        interval: 3000,
        items: [{
            title: "Hello akira! welcome!"
        }, {
            title: '这是一个通知公告'
        }],
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
export default noticeBar
