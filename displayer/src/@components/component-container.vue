<template>
    <view class="component-container">
        <view class="tool-bar" v-show="component.active">
            <button class="tool-btn cu-btn sm bg-red" @tap="remove">
                <text class="cuIcon-close"></text>
            </button>
        </view>
        <keep-alive>
            <component :is="component.componentName" :propertyData="component.property" :theme="theme"
                       @clickEvent="clickEvent"></component>
        </keep-alive>
    </view>
</template>

<script>
    import common from '../@utils/common.js'

    export default {
        name: 'component-container',
        props: {
            component: {
                type: Object,
                default() {
                    return {
                        active: false,
                        componentName: '',
                        property: null
                    }
                }
            },
            theme: {
                type: Object
            }
        },
        watch: {},
        data() {
            return {}
        },
        created() {

        },
        methods: {
            remove() {
                uni.showModal({
                    title: '删除提示',
                    content: '确定删除该组件吗?',
                    success: (res) => {
                        if (res.confirm) {
                            this.$emit('remove', this.component.componentName)
                        }
                    }
                })
            },
            clickEvent(config) {
                common.execComponentEvent(config)
            }
        }
    }
</script>

<style scoped lang="scss">
    .component-container {
        position: relative;

        .tool-bar {
            position: absolute;
            height: 100%;
            width: 100%;
            border: 2px dashed red;
            z-index: 1;
            pointer-events: none;


            .tool-btn {
                position: absolute;
                top: 0;
                right: 0;
                opacity: .5;
                padding: 0 0upx;
                border-radius: 0;
                height: 30upx;
                pointer-events: auto;
            }
        }
    }
</style>
