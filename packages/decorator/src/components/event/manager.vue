<template>
    <div class="click-event-manager">
        <el-divider v-if="title">{{title}}</el-divider>
        <el-form>
            <el-form-item label="类型">
                <el-radio-group v-model="config.type" @change="propertyChange">
                    <el-radio :label="0">导航</el-radio>
                    <el-radio :label="1">提示框</el-radio>
                    <el-radio :label="2">对话框</el-radio>
                    <el-radio :label="3">自定义</el-radio>
                </el-radio-group>
            </el-form-item>
            <div class="nav-config" v-show="config.type==0">
                <el-alert
                        title="注意!"
                        type="info"
                        description="如果配置了 [导航页面] 优先级则高于 [网址]">
                </el-alert>
                <el-form-item label="导航页面">
                    <el-input type="text" v-model="config.navigationConfig.page"
                              placeholder="app或小程序的页面链接,如:/pages/a/b"
                              @input="propertyChange"></el-input>
                </el-form-item>
                <el-form-item label="导航类型">
                    <el-radio-group v-model="config.navigationConfig.type" @change="propertyChange">
                        <el-radio :label="0">普通页面</el-radio>
                        <el-radio :label="1">底部导航页面</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="网址">
                    <el-input type="text" v-model="config.navigationConfig.url"
                              placeholder="外部网址,如: http://xxx.com"
                              @input="propertyChange"></el-input>
                </el-form-item>
            </div>
            <div class="toast-config" v-show="config.type==1">
                <el-alert
                        title="注意!"
                        type="info">
                    1. 提示内容建议简短明了<br>2. 显示蒙层可以防止用户点击到后面的内容<br>3. 显示时间为毫秒,1秒=1000毫秒
                </el-alert>
                <el-form-item label="提示内容">
                    <el-input type="text" v-model="config.toastConfig.title" placeholder="如:hello akira!"
                              @input="propertyChange"></el-input>
                </el-form-item>
                <el-form-item label="图标">
                    <el-radio-group v-model="config.toastConfig.icon" @change="propertyChange">
                        <el-radio label="success">成功</el-radio>
                        <el-radio label="loading">加载</el-radio>
                        <el-radio label="none">无</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="位置">
                    <el-radio-group v-model="config.toastConfig.position" @change="propertyChange">
                        <el-radio label="top">顶部</el-radio>
                        <el-radio label="center">居中</el-radio>
                        <el-radio label="bottom">底部</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="显示蒙层">
                    <el-switch v-model="config.toastConfig.mask" @change="propertyChange"></el-switch>
                </el-form-item>
                <el-form-item label="显示时间">
                    <el-input-number v-model="config.toastConfig.duration" :step="100" size="small"
                                     @change="propertyChange"></el-input-number>
                </el-form-item>
            </div>
            <div class="modal-config" v-show="form.type==2">
                <el-form-item label="标题">
                    <el-input type="text" v-model="config.modalConfig.title" placeholder="如:提示"
                              @input="propertyChange"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input type="text" v-model="config.modalConfig.content" placeholder="如:hello akira!"
                              @input="propertyChange"></el-input>
                </el-form-item>
                <el-form-item label="显示取消按钮">
                    <el-switch v-model="config.modalConfig.showCancel" @change="propertyChange"></el-switch>
                </el-form-item>
                <el-form-item label="取消按钮文字">
                    <el-input type="text" v-model="form.modalConfig.cancelText" placeholder="如:取消"
                              @input="propertyChange"></el-input>
                </el-form-item>
                <el-form-item label="确认按钮文字">
                    <el-input type="text" v-model="config.modalConfig.confirmText" placeholder="如:确定"
                              @input="propertyChange"></el-input>
                </el-form-item>
            </div>
            <div class="custom-config" v-show="config.type==3">
                <el-form-item label="方法名">
                    <el-input type="text" v-model="config.custom.methodName" placeholder="如:onClick"
                              @input="propertyChange"></el-input>
                </el-form-item>
            </div>
            <el-form-item class="text-center">
                <el-button type="primary" size="small" round @click="confirm">确 定</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "click-event-manager",
        model: {
            prop: 'config',
            event: 'change'
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            config: {
                type: Object
            }
        },
        watch: {
            config: {
                deep: true,
                handler() {
                    this.setConfig()
                }

            }
        },
        created() {
            this.setConfig()
        },
        data() {
            return {}
        },
        methods: {
            confirm() {
                this.$emit('confirm')
            },
            setConfig() {
                if (this.config) {
                    this.form = this.config
                }
            },
            propertyChange() {
                this.$emit('change', this.config)
            }
        }
    }
</script>

<style scoped>
    @import "../../styles/common.scss";
    .click-event-manager {
        max-height: 520px;
        overflow: hidden;
        overflow-y: auto;
    }
</style>
