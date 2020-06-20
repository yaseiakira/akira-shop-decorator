<template>
    <div class="common-tabs-bar-property">
        <el-form label-position="left">
            <el-form-item label="数量">
                <el-radio-group v-model="property.count" @change="onPropertyChange">
                    <el-radio :label="1">1个</el-radio>
                    <el-radio :label="2">2个</el-radio>
                    <el-radio :label="3">3个</el-radio>
                    <el-radio :label="4">4个</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-divider>文字颜色</el-divider>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="未激活">
                        <theme-color-picker v-model="property.color"
                                            @change="onPropertyChange"></theme-color-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="激活">
                        <theme-color-picker v-model="property.activeColor"
                                            @change="onPropertyChange"></theme-color-picker>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <el-tabs v-model="activeName" stretch>
            <el-tab-pane :label="(index+1) > property.count ? '' : '按钮'+(index+1)" :name="index.toString()"
                         v-for="(tab,index) in property.tabs"
                         :key="index" :disabled="(index+1) > property.count">
                <bottom-tab-bar-config :tab="tab"
                                       @propertyChange="onPropertyChange('tab',index,$event)"></bottom-tab-bar-config>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import BottomTabBarConfig from "../bottom-tab-bar-config/bottom-tab-bar-config";

    export default {
        name: 'common-tabs-bar-property',
        components: {BottomTabBarConfig},
        props: {
            property: {
                type: Object,
                default() {
                    return {
                        tabs: []
                    }
                }
            }
        },
        data() {
            return {
                count: 4,
                activeName: '0'
            }
        },
        methods: {
            onPropertyChange(type, index, e) {
                if (type === 'tab') {
                    this.property[index] = e;
                }
                if (type === 'color') {
                    this.property.color = e.name ? e.name : e.color;
                }
                if (type === 'activeColor') {
                    this.property.activeColor = e.name ? e.name : e.color;
                }
                this.propertyChange();
            },
            propertyChange() {
                this.$emit('propertyChange', {
                    name: this.$options.name,
                    data: this.property
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .common-tabs-bar-property {
        text-align: initial;
    }
</style>
