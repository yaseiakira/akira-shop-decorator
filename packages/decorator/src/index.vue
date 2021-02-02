<template>
    <section class="decorator">
        <div class="menu-bar">
            <el-row>
                <el-col :span="8">
                    <div class="menu-btn-group">
                        <el-tooltip effect="light" content="新建页面" placement="top" :open-delay="800">
                            <button class="ak-btn" @click="newPage">
                                <svg class="svg-icon" aria-hidden="true">
                                    <use xlink:href="#icon-ak-new"></use>
                                </svg>
                            </button>
                        </el-tooltip>
                        <el-tooltip effect="light" content="保存" placement="top" :open-delay="800" v-if="currentPage.id">
                            <button class="ak-btn" @click="save">
                                <svg class="svg-icon" aria-hidden="true">
                                    <use xlink:href="#icon-ak-save"></use>
                                </svg>
                            </button>
                        </el-tooltip>
                        <el-tooltip effect="light" content="删除" placement="top" :open-delay="800" v-if="currentPage.id">
                            <button class="ak-btn btn-danger" @click="remove">
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
                        <el-select placeholder="切换页面" v-model="currentPage.id" size="small" @change="changePage">
                            <el-option
                                    v-for="item in pages"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
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
        <div class="workspace" v-loading="loading">
            <div class="tool-box">
                <akira-sd-tool-box @componentClick="componentClick"></akira-sd-tool-box>
            </div>
            <div class="mobile-area shadow">
                <akira-sd-displayer ref="displayer"
                                    :base-path="displayerBasePath"
                                    @componentChange="onComponentChange"
                                    @componentRemove="onComponentRemove"
                                    @componentsSave="onComponentsSave"
                                    @ready="displayerReady"></akira-sd-displayer>
            </div>
            <div class="property-planes-box">
                <akira-sd-prop-box @propertyChange="onPropertyChange"
                                   ref="propBox"
                                   :activeComponent="activeComponent"></akira-sd-prop-box>
            </div>
        </div>
        <!--新建页面对话框-->
        <el-dialog :visible.sync="newPageModalShow"
                   :center="true"
                   width="42%"
                   top="8vh"
                   :close-on-click-modal="false"
                   :close-on-press-escape="false"
                   :modal-append-to-body="true"
                   :destroy-on-close="false"
                   :show-close="false">
            <el-form :model="newPageForm"
                     :rules="newPageFormRules"
                     ref="newPageForm">
                <el-form-item prop="name">
                    <el-input maxlength="50" v-model="newPageForm.name"
                              placeholder="请填写页面名称,必填,50字以内"></el-input>
                </el-form-item>
                <el-form-item label="页面类型" prop="type">
                    <el-radio-group v-model="newPageForm.type">
                        <el-radio :label="0">首页</el-radio>
                        <el-radio :label="1">产品列表</el-radio>
                        <el-radio :label="2">产品详情</el-radio>
                        <el-radio :label="3">个人中心</el-radio>
                        <el-radio :label="4">单页</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item class="text-center">
                    <el-button type="default" size="small"
                               round @click="newPageModalShow = false"
                               :disabled="newPageSaving">
                        取消
                    </el-button>
                    <el-button type="primary" size="small"
                               round @click="confirmSaveNewPage"
                               :loading="newPageSaving">
                        保存
                    </el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
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
            displayerBasePath: {
                type: String
            },
            returnBtnText: {
                type: String,
                default: '返回'
            },
            newPageHandler: {
                type: Function
            },
            savePageHandler: {
                type: Function
            },
            deletePageHandler: {
                type: Function
            },
            pageList: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                newPageModalShow: false,
                loading: false,
                newPageSaving: false,
                currentTheme: 'white',
                pages: [],
                currentPage: {
                    id: '',
                    name: '',
                    data: ''
                },
                newPageForm: {
                    id: '',
                    name: '',
                    type: 0 // 0 首页,1 产品列表 ,2 产品详情,3 个人中心, 4 单页
                },
                newPageFormRules: {
                    name: [{
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            if (value) {
                                if (value.length > 50) {
                                    callback(new Error('名称须在50字以内'))
                                    return
                                }
                                let idx = this.pages.findIndex(p => p.name == value)
                                if (idx != -1) {
                                    callback(new Error('该名称已经存在'))
                                    return
                                }
                                callback()
                            } else {
                                callback(new Error('名称必须填写'))
                            }
                        }
                    }]
                },
                activePanel: 'page-property',
                activeComponent: null
            }
        },
        watch:{
            pageList(){
                this.init()
            }
        },
        created() {

        },
        methods: {
            init(){
                if (this.pageList && this.pageList.length > 0) {
                    this.pages = this.pageList
                    this.selectDefaultPage('dc init -data')
                }
            },
            displayerReady(){

            },
            confirmSaveNewPage() {
                if (typeof this.newPageHandler != 'function') {
                    return
                }
                this.$refs.newPageForm.validate(success => {
                    if (success) {
                        try {
                            this.newPageSaving = true
                            this.newPageHandler(this.newPageForm).then(data => {
                                this.newPageSaving = false
                                this.newPageModalShow = false
                                this.pages.push({
                                    id: data.id,
                                    name: data.name,
                                    data: data.data,
                                    type: this.newPageForm.type
                                })
                                this.currentPage.id = data.id
                                this.currentPage.name = this.newPageForm.name
                                this.currentPage.data = data.data
                                this.currentPage.type = this.newPageForm.type
                                this.$refs.displayer.render(this.currentPage.data)
                            }).catch(err => {
                                this.newPageSaving = false
                                this.$notify.error({
                                    title: '新建页面失败',
                                    message: err
                                });
                            })
                        } catch (e) {
                            this.newPageSaving = true
                            let pageData = this.newPageHandler(this.newPageForm)
                            this.newPageSaving = false
                            this.newPageModalShow = false
                            if (pageData.id && pageData.data) {
                                this.pages.push({id: pageData.id, name: pageData.name, data: pageData.data})
                                this.pages.push({
                                    id: pageData.id,
                                    name: pageData.name,
                                    data: pageData.data,
                                    type: this.newPageForm.type
                                })
                                this.currentPage.id = pageData.id
                                this.currentPage.name = this.newPageForm.name
                                this.currentPage.data = pageData.data
                                this.currentPage.type = this.newPageForm.type
                                this.$refs.displayer.render(this.currentPage.data)
                            } else {
                                this.$notify.error({
                                    title: '新建页面失败',
                                    message: '数据异常'
                                });
                            }
                        }
                    }
                })
            },
            onComponentsSave(data) {
                const index = this.pages.findIndex(p => p.id == this.currentPage.id)
                if (index != -1) {
                    this.pages[index].data = data
                    this.currentPage.data = data
                    try {

                        this.savePageHandler(this.currentPage).then(() => {
                            this.loading = false
                            this.$notify.success({
                                title: '操作成功',
                                message: `${this.currentPage.name} 已保存!`
                            });
                        }).catch(err => {
                            this.loading = false
                            this.$notify.error({
                                title: '保存页面失败',
                                message: err
                            });
                        })
                    } catch (e) {
                        this.loading = true
                        let success = this.savePageHandler(this.currentPage)
                        this.loading = false
                        if (success) {
                            this.$notify.success({
                                title: '操作成功',
                                message: `${this.currentPage.name} 已保存!`
                            });
                        } else {
                            this.$notify.error({
                                title: '提示',
                                message: '保存页面失败'
                            });
                        }
                    }
                }
            },
            newPage() {
                this.newPageForm.id = ''
                this.newPageForm.name = ''
                this.newPageForm.type = 0
                if(this.$refs.newPageForm){
                    this.$refs.newPageForm.resetFields()
                }
                this.newPageModalShow = true
            },
            save() {
                const index = this.pages.findIndex(p => p.id == this.currentPage.id)
                if (index == -1 || typeof this.savePageHandler != 'function') {
                    return
                }
                this.loading = true
                this.$refs.displayer.getAllComponents()

            },
            remove() {
                const index = this.pages.findIndex(p => p.id == this.currentPage.id)
                if (index == -1 || typeof this.deletePageHandler != 'function') {
                    return
                }
                this.$confirm(`确定删 ${this.currentPage.name} 吗?`, '删除提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    try {
                        this.loading = true
                        this.deletePageHandler(this.pages[index].id).then(() => {
                            this.loading = false
                            this.pages.splice(index, 1)
                            this.$notify.success({
                                title: '操作成功',
                                message: `${this.currentPage.name} 已删除!`
                            });
                            this.currentPage.id = ''
                            this.currentPage.name = ''
                            this.currentPage.data = ''
                            this.selectDefaultPage()
                        }).catch(err => {
                            this.loading = false
                            this.$notify.error({
                                title: '删除页面失败',
                                message: err
                            });
                        })
                    } catch (e) {
                        this.loading = true
                        let success = this.deletePageHandler(this.pages[index].id)
                        this.loading = false
                        if (success) {
                            this.pages.splice(index, 1)
                            this.$notify.success({
                                title: '操作成功',
                                message: `${this.currentPage.name} 已删除!`
                            });
                            this.currentPage.id = ''
                            this.currentPage.name = ''
                            this.currentPage.data = ''
                            this.selectDefaultPage()
                        } else {
                            this.$notify.error({
                                title: '提示',
                                message: '删除页面失败'
                            });
                        }
                    }
                }).catch(() => {

                });

            },
            changePage() {
                let selected = this.pages.find(p => p.id == this.currentPage.id)
                if (selected) {
                    this.currentPage.name = selected.name
                    this.currentPage.data = selected.data
                    this.$refs.displayer.render(this.currentPage.data)
                }
            },
            selectDefaultPage() {
                if (this.pages.length > 0) {
                    this.currentPage.id = this.pages[0].id
                    this.currentPage.name = this.pages[0].name
                    this.currentPage.data = this.pages[0].data
                }
                this.$refs.displayer.render(this.currentPage.data)
            },
            exit() {
                this.$emit('onExit');
            },
            onComponentRemove() {
                this.$refs.propBox.resetComponentProp()
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
