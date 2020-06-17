<template>
    <a class="colorui-icon-selector" @click="showDialog">
        <div><i class="cuIcon" :class="'cuIcon-' + selected.name"></i></div>
        <div>{{selected.name}}</div>
        <el-dialog
                top="8vh"
                :visible="selectorDialogShow"
                :modal-append-to-body="true"
                :append-to-body="true"
                :close-on-click-modal="false"
                @close="cancel"
                :show-close="true">
            <template slot="title">
                <el-row>
                    <el-col :span="12">
                        <b style="font-size: 18px">选择图标</b>
                    </el-col>
                    <el-col :span="10" class="text-right">
                        <el-input placeholder="搜索图标" size="small" v-model="searchValue">
                            <template slot="append">
                                <el-button icon="el-icon-search" @click="search"></el-button>
                            </template>
                        </el-input>
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
        props: {
            currentIcon: {
                type: String
            }
        },
        data() {
            return {
                searchValue:'',
                selectorDialogShow: false,
                icons: [],
                selected: {
                    name: '未选择'
                }
            }
        },
        created() {
            if (this.currentIcon) {
                this.selected.name = this.currentIcon.replace('cuIcon-', '')
            }
            const list = JSON.parse(JSON.stringify(colorUIIcons));
            list.forEach(i => {
                i.active = this.selected.name == i.name
            })
            this.icons = list
        },
        methods: {
            search(){
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
                this.$emit('iconSelected', item)
            }
        }
    }
</script>

<style scoped>
    @import "../../icon/colorui-icon.css";

    .cuIcon {
        font-family: "cuIcon";
        font-size: inherit;
        font-style: normal;
    }

    .colorui-icon-selector {
        display: inline-block;
        text-align: center;
        width: 120px;
        cursor: pointer;
        border-radius: 4px;
        border: 1px dashed #909399;
        padding: 4px;
    }

    .colorui-icon-selector:hover {
        border: 1px dashed #409EFF;
        color: #409EFF
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
