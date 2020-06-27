const card = {
    name: '卡片',
    componentName: 'common-card',
    icon: 'icon-ak-card',
    children: [{
        name: '案例卡片',
        componentName: 'case-card-common-panel',
        icon: 'icon-ak-case-card',
        property: {
            padding: false,
            bgColor: 'white',
            tagText: '热卖',
            tagBgColor: 'blue',
            coverDesc: 'hello akira!',
            cover: 'https://www.yaseiakira.com/static/img/empty.jpg',
            smallCover: 'https://www.yaseiakira.com/static/img/empty-square.jpg',
            smallCoverRound: true,
            title: '标题内容',
            titleColor: 'gray',
            leftText: '左边文字',
            leftTextColor: 'gray',
            rightText: '右边文字',
            rightTextColor: 'gray',
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
    }, {
        name: '动态卡片',
        componentName: 'dynamic-card-common-panel',
        icon: 'icon-ak-dynamic-card',
        property: {
            padding: false,
            bgColor: 'white',
            smallCover: 'https://www.yaseiakira.com/static/img/empty-square.jpg',
            smallCoverRound: true,
            title: '标题内容',
            titleColor: 'gray',
            leftText: '左边文字',
            leftTextColor: 'gray',
            rightText: '右边文字',
            rightTextColor: 'gray',
            contentText: '顶部文字内容，可以写很多文字',
            contentTextColor: 'gray',
            images: ["https://www.yaseiakira.com/static/img/empty.jpg"],
            bottoms: [{
                icon: 'favor',
                leftText: '',
                leftTextColor: 'gray',
                rightText: '5',
                rightTextColor: 'gray',
            }, {
                color: 'gray',
                icon: 'appreciate',
                leftText: '',
                leftTextColor: 'gray',
                rightText: '2',
                rightTextColor: 'gray',
            }, {
                color: 'gray',
                icon: 'friend',
                leftText: '',
                leftTextColor: 'gray',
                rightText: '1',
                rightTextColor: 'gray',
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
    }, {
        name: '文章卡片',
        componentName: 'article-card-common-panel',
        icon: 'icon-ak-article-card',
        property: {
            padding: false,
            bgColor: 'white',
            cover: 'https://www.yaseiakira.com/static/img/empty-square.jpg',
            title: '标题内容',
            titleColor: 'black',
            contentText: '简介内容，可以写很多文字',
            contentTextColor: 'gray',
            tags: [{
                text: '标签1',
                color: 'red',
                size: 'sm',
                isLine: false,
                shape: 'round'
            }, {
                text: '标签2',
                color: 'green',
                size: 'sm',
                isLine: false,
                shape: 'round'
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
    }]
}
export default card
