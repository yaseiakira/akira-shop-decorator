<template>
    <div class="tool-box-component shadow">
        <div v-for="group in toolsGroup" :key="group.name">
            <ul class="tool-group">
                <li class="tool-item" v-for="item in group.tools" :key="item.name">
                    <el-tooltip effect="light" :content="item.name" placement="top" :open-delay="800">
                        <button class="ak-btn" @click="onComponentClick(item)">
                            <svg class="svg-icon" aria-hidden="true">
                                <use :xlink:href="'#' + item.icon"></use>
                            </svg>
                        </button>
                    </el-tooltip>
                </li>
            </ul>
            <hr>
        </div>
    </div>
</template>

<script>
    import topToolBar from '../models/tools-panel/common/top-tool-bar.model'
    import bottomTabBar from '../models/tools-panel/common/bottom-tab-bar.model'
    import searchBar from '../models/tools-panel/common/search-bar.model'
    import singleButton from '../models/tools-panel/common/single-button.model'
    import noticeBar from '../models/tools-panel/common/notice-bar.model'
    import navList from '../models/tools-panel/common/nav-list.model'

    export default {
        name: 'akira-sd-tool-box',
        data() {
            return {
                toolsGroup: [{
                    name: 'common',
                    tools: [topToolBar, searchBar, noticeBar, {
                        name: '卡片',
                        componentName: 'common-card',
                        icon: 'icon-ak-card'
                    }, navList, bottomTabBar, {
                        name: '表单',
                        componentName: 'common-basic-form',
                        icon: 'icon-ak-form'
                    }, {
                        name: '选项卡',
                        componentName: 'common-tabs',
                        icon: 'icon-ak-tabs'
                    }, {
                        name: '按钮组',
                        componentName: 'common-buttons-group',
                        icon: 'icon-ak-btn-group'
                    }, singleButton, {
                        name: '浮动按钮',
                        componentName: 'common-float-button',
                        icon: 'icon-ak-btn-float'
                    }]
                }, {
                    name: 'pictures',
                    tools: [{
                        name: '图片轮播',
                        componentName: 'pictures-slider',
                        icon: 'icon-ak-picture-slider'
                    }, {
                        name: '图片分组',
                        componentName: 'pictures-group',
                        icon: 'icon-ak-picture-group'
                    }, {
                        name: '图片展播',
                        componentName: 'pictures-banner',
                        icon: 'icon-ak-picture-slider-1'
                    }, {
                        name: '图片魔方',
                        componentName: 'pictures-box',
                        icon: 'icon-ak-picture-box'
                    }]
                }, {
                    name: 'media',
                    tools: [{
                        name: '视频',
                        componentName: 'media-video',
                        icon: 'icon-ak-video'
                    }, {
                        name: '音频',
                        componentName: 'media-audio',
                        icon: 'icon-ak-audio'
                    }]
                }, {
                    name: 'product',
                    tools: [{
                        name: '商品选项卡',
                        componentName: 'product-tabs',
                        icon: 'icon-ak-product-tabs'
                    }, {
                        name: '商品列表',
                        componentName: 'product-list',
                        icon: 'icon-ak-product-list'
                    }]
                }, {
                    name: 'others',
                    tools: [{
                        name: '辅助线',
                        componentName: 'others-line',
                        icon: 'icon-ak-line'
                    }, {
                        name: '空白块',
                        componentName: 'others-block',
                        icon: 'icon-ak-block'
                    }, {
                        name: '标题',
                        componentName: 'others-title',
                        icon: 'icon-ak-title'
                    }]
                }]
            }
        },
        methods: {
            onComponentClick(item) {
                this.$emit('componentClick', item)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/common.scss";

    .tool-box-component {
        text-align: initial;
        background-color: #304156;
        padding: 10px 6px;
        width: 90px;

        hr {
            background: #4e5d6f;
            border: none;
            height: 1px;
            margin: 0.5em 0;
        }
    }

    .tool-group {
        margin: 0;
        padding: 0;

        .tool-item {
            list-style: none;
            display: inline-block;
            height: 36px;
            width: 36px;
            padding: 4px
        }

    }
</style>

