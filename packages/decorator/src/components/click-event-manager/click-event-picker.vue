<template>
    <a class="click-event-picker" href="javascript:;">
        <el-popover
                placement="left"
                width="360"
                trigger="click"
                v-model="show">
            <click-event-manager v-model="currentConfig" @change="configChange"
                                 @confirm="onConfirm"></click-event-manager>
            <el-link type="primary" slot="reference" class="event-picker-button" :underline="false">
                {{config.type | configType}} <i class="el-icon-arrow-right"></i>
            </el-link>
        </el-popover>
    </a>
</template>

<script>
    export default {
        name: "click-event-picker",
        filters: {
            configType(type) {
                let text = '未定义';
                switch (type) {
                    case  0:
                        text = '导航';
                        break;
                    case  1:
                        text = '提示框';
                        break;
                    case  2:
                        text = '对话框';
                        break;
                    case  3:
                        text = '自定义';
                        break;
                    default:
                        break;
                }
                return text;
            }
        },
        model: {
            prop: 'config',
            event: 'change'
        },
        props: {
            config: {
                type: Object
            }
        },
        watch: {
            config() {
                this.setConfig()
            }
        },
        created() {
            this.setConfig()
        },
        data() {
            return {
                show: false,
                currentConfig: null
            }
        },
        methods: {
            onConfirm() {
                this.show = false
            },
            setConfig() {
                this.currentConfig = this.config
            },
            configChange() {
                this.$emit('change', this.currentConfig)
            }
        }
    }
</script>

<style scoped lang="scss">

    .click-event-picker {
        text-decoration: none;

        .el-link{
            vertical-align: initial;
        }
    }
</style>
