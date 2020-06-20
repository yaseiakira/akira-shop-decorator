<template>
    <section class="decorator">
        <div class="menu-bar">
            <el-row>
                <el-col :span="8">
                    <div class="menu-btn-group">
                        <el-tooltip effect="light" content="新建页面" placement="top" :open-delay="800">
                            <button class="ak-btn">
                                <svg class="svg-icon" aria-hidden="true">
                                    <use xlink:href="#icon-ak-new"></use>
                                </svg>
                            </button>
                        </el-tooltip>
                        <el-tooltip effect="light" content="保存" placement="top" :open-delay="800">
                            <button class="ak-btn" @click="save">
                                <svg class="svg-icon" aria-hidden="true">
                                    <use xlink:href="#icon-ak-save"></use>
                                </svg>
                            </button>
                        </el-tooltip>
                        <el-tooltip effect="light" content="删除" placement="top" :open-delay="800">
                            <button class="ak-btn btn-danger">
                                <svg class="svg-icon" aria-hidden="true">
                                    <use xlink:href="#icon-ak-delete"></use>
                                </svg>
                            </button>
                        </el-tooltip>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="page-selector">
                        <span class="label">当前页面 </span>
                        <el-select placeholder="切换页面" v-model="currentPage">
                            <el-option
                                    v-for="item in pages"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                <span style="float: left">{{ item.label }}</span>
                                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="8">
                    <el-row>
                        <el-col :span="12">
                            <div class="menu-btn-group">
                                <div class="theme-selector">
                                    <el-popover
                                            placement="bottom"
                                            width="380"
                                            trigger="click">
                                        <theme-colors-selector v-model="currentTheme"
                                                               @change="onThemeChange"></theme-colors-selector>
                                        <button class="ak-btn" slot="reference">
                                            <svg class="svg-icon" aria-hidden="true">
                                                <use xlink:href="#icon-ak-theme"></use>
                                            </svg>
                                        </button>
                                    </el-popover>
                                </div>

                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="menu-btn-group right">
                                <el-tooltip effect="light" :content="returnBtnText" placement="right-end"
                                            :open-delay="800">
                                    <button class="ak-btn" @click="exit">
                                        <svg class="svg-icon" aria-hidden="true">
                                            <use xlink:href="#icon-ak-back"></use>
                                        </svg>
                                    </button>
                                </el-tooltip>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <div class="workspace">
            <div class="tool-box">
                <akira-sd-tool-box @componentClick="componentClick"></akira-sd-tool-box>
            </div>
            <div class="mobile-area shadow">
                <akira-sd-displayer ref="displayer" @componentChange="onComponentChange"></akira-sd-displayer>
            </div>
            <div class="property-planes-box">
                <akira-sd-prop-box @propertyChange="onPropertyChange"
                                   :activeComponent="activeComponent"></akira-sd-prop-box>
            </div>
        </div>
    </section>
</template>

<script>
    import './icon/iconfont'
    import AkiraSdToolBox from "./tool-box/akira-sd-tool-box";
    import AkiraSdPropBox from "./property-box/akira-sd-prop-box";
    import AkiraSdDisplayer from "./displayer/akira-sd-displayer";

    export default {
        name: "akira-shop-decorator",
        components: {AkiraSdDisplayer, AkiraSdPropBox, AkiraSdToolBox},
        props: {
            returnBtnText: {
                type: String,
                default: '返回'
            }
        },
        data() {
            return {
                currentTheme: 'white',
                pages: [],
                currentPage: '',
                activePanel: 'page-property',
                activeComponent: null
            }
        },
        methods: {
            save() {
                this.$emit('onSave');
            },
            exit() {
                this.$emit('onExit');
            },
            onComponentChange(component) {
                this.activeComponent = component;
            },
            onThemeChange() {
                this.$refs.displayer.changeTheme(this.currentTheme);
            },
            componentClick(component) {
                this.$refs.displayer.addComponent(component);
            },
            onPropertyChange(property) {
                this.$refs.displayer.propertyChange(property);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./styles/common.scss";

    .text-right {
        text-align: right;
    }

    .decorator {
        height: 100%;
        background-color: #f2f2f2;
    }

    .menu-bar {
        position: fixed;
        width: 100%;
        line-height: 60px;
        background-color: #304156;
        z-index: 520;

        .menu-btn-group {
            .btn-danger {
                color: #F56C6C
            }

            &.right {
                text-align: right;
            }
        }

        .page-selector {
            text-align: center;

            .label {
                color: white;
                font-size: 14px;
            }
        }
    }

    .workspace {
        position: relative;
        height: 100%;
        padding: 0;

        .mobile-area {
            position: absolute;
            top: 10%;
            left: 50%;
            margin-left: -187.5px;
            width: 375px;
            height: 667px;
        }

        .tool-box {
            position: fixed;
            left: 2%;
            top: 10%;
        }

        .property-planes-box {
            position: fixed;
            width: 30%;
            right: 2%;
            top: 10%;
        }
    }
</style>
