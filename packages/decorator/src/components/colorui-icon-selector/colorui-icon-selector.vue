<template>
    <a class="colorui-icon-selector" @click="showDialog">
        <div slot="reference" class="icon-picker-button">
                <span class="icon-picker__color">
                    <span class="icon-picker__color-inner"></span>
                </span>
            <span class="icon-picker__icon" :class="'cuIcon-' + selected.name"></span>
        </div>
        <el-dialog
                top="8vh"
                :visible="selectorDialogShow"
                :modal-append-to-body="true"
                :append-to-body="true"
                :close-on-click-modal="false"
                @close="cancel"
                :show-close="true">
            <template slot="title">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <b style="font-size: 18px">选择图标</b>
                    </el-col>
                    <el-col :span="8">
                        <el-input placeholder="搜索图标" size="small" v-model="searchValue">
                            <template slot="append">
                                <el-button icon="el-icon-search" @click="search"></el-button>
                            </template>
                        </el-input>
                    </el-col>
                    <el-col :span="2" class="text-right">
                        <el-button type="text" size="small" @click="clearIcon">不设置图标</el-button>
                    </el-col>
                </el-row>
            </template>
            <div class="icon-selector-box">
                <div class="search-bar"></div>
                <div class="icons">
                    <el-row :gutter="20">
                        <el-col :span="6" v-for="item in icons" :key="item.name" class="icon-item" v-show="item.isShow">
                            <a class="icon-box" @click="confirm(item)" :class="{active:item.active}">
                                <i class="cuIcon" :class="'cuIcon-' + item.name"></i><br>
                                <small>{{item.name}}</small>
                            </a>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-dialog>
    </a>
</template>

<script>
    import {colorUIIcons} from '../../models/color-ui-icons.model'

    export default {
        name: "colorui-icon-selector",
        model: {
            prop: 'icon',
            event: 'change'
        },
        props: {
            icon: {
                type: String
            }
        },
        watch: {
            icon() {
                this.setIcon();
            }
        },
        data() {
            return {
                searchValue: '',
                selectorDialogShow: false,
                icons: [],
                selected: {
                    name: '未选择'
                }
            }
        },
        created() {
            this.setIcon();
            const list = JSON.parse(JSON.stringify(colorUIIcons));
            list.forEach(i => {
                i.active = this.selected.name == i.name
            })
            this.icons = list
        },
        methods: {
            setIcon() {
                if (this.icon) {
                    this.selected.name = this.icon
                }
            },
            clearIcon() {
                this.selected.name = ''
                this.selectorDialogShow = false;
                this.$emit('change', this.selected.name)
            },
            search() {
                let key = this.searchValue.toLowerCase();
                let list = this.icons;
                for (let i = 0; i < list.length; i++) {
                    let a = key;
                    let b = list[i].name.toLowerCase();
                    if (b.search(a) != -1) {
                        list[i].isShow = true
                    } else {
                        list[i].isShow = false
                    }
                }
                this.cuIcon = list
            },
            showDialog() {
                this.selectorDialogShow = true;
            },
            cancel() {
                this.selectorDialogShow = false;
            },
            confirm(item) {
                this.selectorDialogShow = false;
                this.selected = item;
                this.icons.forEach(i => {
                    i.active = this.selected.name == i.name
                })
                this.$emit('change', item.name)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../icon/colorui-icon.css";

    .cuIcon {
        font-family: "cuIcon";
        font-size: inherit;
        font-style: normal;
    }

    .colorui-icon-selector {
        display: inline-block;
        position: relative;
        line-height: normal;
        height: 40px;
    }

    .icon-picker-button {
        display: inline-block;
        box-sizing: border-box;
        height: 40px;
        width: 40px;
        padding: 4px;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        font-size: 0;
        position: relative;
        cursor: pointer;

        .icon-picker__color {
            position: relative;
            display: block;
            box-sizing: border-box;
            border-radius: 2px;
            width: 100%;
            height: 100%;
            text-align: center;

            .icon-picker__color-inner {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
            }
        }

        .icon-picker__icon {
            display: inline-block;
            width: 100%;
            color: #999;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            font-size: 30px;
        }
    }

    .colorui-icon-selector .cuIcon {
        font-size: 26px;
    }

    .colorui-icon-selector div {
        line-height: initial;
    }

    .icon-selector-box .icons {
        height: 520px;
        overflow: hidden;
        overflow-y: auto;
    }

    .icon-selector-box .icons .icon-item {
        text-align: center;
        padding: 6px;
    }

    .icon-selector-box .icons .icon-item .cuIcon {
        font-size: 20px;
    }

    .icon-selector-box .icons .icon-item .icon-box {
        display: inline-block;
        cursor: pointer;
        padding: 4px;
    }

    .icon-selector-box .icons .icon-item .icon-box:hover {
        border-radius: 4px;
        color: #409EFF
    }

    .icon-selector-box .icons .icon-item .icon-box.active {
        color: #409EFF
    }
</style>
