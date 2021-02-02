<template>
    <view class="content custom-body" :class="['bg-'+main.page.bgName]" :style="{'background':main.page.background}">
        <view class="top-tool-bar" v-if="main.topToolBar">
            <component-container :component="main.topToolBar"
                                 @click.native="activeTopBarComponent"
                                 :theme="main.theme"
                                 @remove="removeComponent"></component-container>
        </view>
        <view class="scroll-content" :class="{'hasTopBar':main.hasTopBar,'hasBottomBar': main.hasBottomBar}">
            <draggable v-model="main.components">
                <component-container v-for="(item,index) in main.components"
                                     :key="index"
                                     :component="item"
                                     :theme="main.theme"
                                     @remove="removeComponent"
                                     @click.native="activeComponent(index)"></component-container>
            </draggable>
        </view>
        <view class="bottom-tool-bar" v-if="main.bottomToolBar">
            <component-container :component="main.bottomToolBar"
                                 :theme="main.theme"
                                 @click.native="activeBottomBarComponent"
                                 @remove="removeComponent"></component-container>
        </view>
    </view>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        components: {
            draggable
        },
        data() {
            return {
                main: {
                    page: {
                        background: '#f0f0f0',
                        bgName: ''
                    },
                    theme: {
                        name: 'white'
                    },
                    hasTopBar: false,
                    hasBottomBar: false,
                    topToolBar: null,
                    bottomToolBar: null,
                    components: []
                }
            }
        },
        onLoad() {
            window.addEventListener('message', this.receiveMessage, false)
        },
        onUnload() {
            window.removeEventListener('message', this.receiveMessage);
        },
        methods: {
            removeComponent(e) {
                let removeSuccess = true
                switch (e) {
                    case 'bar-top-panel':
                        this.main.topToolBar = null;
                        this.main.hasTopBar = false;
                        break;
                    case 'tabs-bottom-panel':
                        this.main.bottomToolBar = null;
                        this.main.hasBottomBar = false;
                        break;
                    default :
                        const comIndex = this.main.components.findIndex(p => p.componentName == e)
                        if (comIndex != -1) {
                            this.main.components.splice(comIndex, 1)
                        } else {
                            removeSuccess = false
                        }
                        break;
                }
                if (removeSuccess) {
                    this.postMessageToParent('componentRemove');
                }

            },
            activeTopBarComponent() {
                if (this.main.bottomToolBar) {
                    this.$set(this.main.bottomToolBar, 'active', false)
                }
                this.$set(this.main.topToolBar, 'active', true)
                this.unActiveComponents();
                this.postMessageToParent('componentChange', this.main.topToolBar);
            },
            activeBottomBarComponent() {
                if (this.main.topToolBar) {
                    this.$set(this.main.topToolBar, 'active', false)
                }
                this.$set(this.main.bottomToolBar, 'active', true)
                this.unActiveComponents();
                this.postMessageToParent('componentChange', this.main.bottomToolBar);
            },
            activeComponent(index) {
                for (let i = 0; i < this.main.components.length; i++) {
                    this.$set(this.main.components[i], 'active', i === index)
                }
                this.unActiveAllTopAndBottom();
                this.postMessageToParent('componentChange', this.main.components[index]);
            },
            unActiveAllTopAndBottom() {
                if (this.main.topToolBar) {
                    this.$set(this.main.topToolBar, 'active', false)
                }
                if (this.main.bottomToolBar) {
                    this.$set(this.main.bottomToolBar, 'active', false)
                }
            },
            unActiveComponents() {
                for (let i = 0; i < this.main.components.length; i++) {
                    this.main.components[i].active = false;
                    // this.$set(this.main.components, i, this.main.components[i])
                }
            },
            confirm() {

            },
            receiveMessage(e) {
                if (e.data && e.data.method) {
                    switch (e.data.method) {
                        case 'changeTheme':
                            this.changeTheme(e.data.messageContent);
                            break;
                        case 'addComponent':
                            this.addComponent(e.data.messageContent);
                            break;
                        case 'propertyChange':
                            this.propertyChange(e.data.messageContent);
                            break;
                        case 'getAllComponents':
                            this.postMessageToParent('componentsSave', this.main)
                            break;
                        case 'renderAll':
                            if (e.data.messageContent) {
                                this.main = e.data.messageContent
                            } else {
                                this.main = {
                                    page: {
                                        background: '#f0f0f0',
                                        bgName: ''
                                    },
                                    theme: {
                                        name: 'white'
                                    },
                                    hasTopBar: false,
                                    hasBottomBar: false,
                                    topToolBar: null,
                                    bottomToolBar: null,
                                    components: []
                                }
                            }
                            break;
                        default:
                            break;
                    }

                }
            },
            changeTheme(theme) {
                this.main.theme.name = theme
            },
            propertyChange(property) {
                switch (property.name) {
                    case 'page-panel':
                        this.pagePropertyChange(property.data);
                        break;
                    case 'bar-top-panel':
                        this.commonTopToolBarPropertyChange(property.data);
                        break;
                    case 'tabs-bottom-panel':
                        this.commonBottomTabBarPropertyChange(property.data);
                        break;
                    default:
                        this.commonPropertyChange(property.data);
                        break
                }
            },
            commonPropertyChange(property) {
                const index = this.main.components.findIndex(p => p.active);
                if (index !== -1) {
                    this.$set(this.main.components[index], 'property', property)
                }
            },
            commonBottomTabBarPropertyChange(property) {
                this.$set(this.main.bottomToolBar, 'property', property)
            },
            commonTopToolBarPropertyChange(property) {
                this.$set(this.main.topToolBar, 'property', property)
            },
            pagePropertyChange(property) {
                if (property.isImage) {
                    this.main.page.bgName = '';
                    this.main.page.background = 'url(' + property.bgImage + ') no-repeat top center / cover';
                } else {
                    this.main.page.background = property.bgColor.indexOf('#') == -1 ? '' : property.bgColor;
                    this.main.page.bgName = property.bgColor.indexOf('#') == -1 ? property.bgColor : '';
                }
            },
            addComponent(component) {
                component.active = true;
                // 如果是顶部工具条
                if (component.componentName === 'bar-top-panel') {
                    if (this.main.topToolBar) {
                        uni.showModal({
                            title: '提示',
                            content: '已存在顶部工具栏'
                        })
                    } else {
                        if (this.main.bottomToolBar) {
                            this.main.bottomToolBar.active = false;
                        }
                        this.main.topToolBar = component;
                        this.main.hasTopBar = true;
                        this.postMessageToParent('componentChange', component);
                    }
                    this.unActiveComponents();
                    return;
                }
                // 如果是底部工具栏
                if (component.componentName === 'tabs-bottom-panel') {
                    if (this.main.bottomToolBar) {
                        uni.showModal({
                            title: '提示',
                            content: '已存在底部工具栏'
                        })
                    } else {
                        if (this.main.topToolBar) {
                            this.main.topToolBar.active = false;
                        }
                        this.main.bottomToolBar = component;
                        this.main.hasBottomBar = true;
                        this.postMessageToParent('componentChange', component);
                    }
                    this.unActiveComponents();
                    return;
                }
                // 已激活的设置未激活
                for (let i = 0; i < this.main.components.length; i++) {
                    this.$set(this.main.components[i], 'active', false)
                }
                // 新增组件,选中该组件
                this.main.components.push(component)
                this.unActiveAllTopAndBottom();
                this.postMessageToParent('componentChange', component)
            },
            postMessageToParent(method, content) {
                window.parent.postMessage({
                    method: method,
                    messageContent: content
                }, '*');
            }
        }
    }
</script>

<style scoped lang="scss">
    page,
    .custom-body {
        height: 100%;
    }

    .top-tool-bar {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 10;
    }

    .scroll-content {
        &.hasTopBar {
            padding-top: 100upx;
        }

        &.hasBottomBar {
            padding-bottom: 100upx;
        }
    }

    .bottom-tool-bar {
        position: fixed;
        width: 100%;
        bottom: 0;
        z-index: 10;
    }
</style>
