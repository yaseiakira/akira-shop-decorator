<template>
    <div class="common-top-tool-bar-property">
        <el-tabs v-model="activeName" stretch>
            <el-tab-pane label="左侧" name="left">
                <el-form label-position="left">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="图标">
                                <colorui-icon-selector @change="onPropertyChange"
                                                       v-model="property.left.icon"></colorui-icon-selector>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="文字" label-width="40px">
                                <el-input v-model="property.left.text" @input="onPropertyChange"
                                          maxlength="6"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="颜色">
                                <theme-color-picker v-model="property.left.color"
                                                    @change="onPropertyChange"></theme-color-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="16">
                            <el-form-item label="点击事件">
                                <click-event-picker v-model="property.left.clickConfig" @change="onPropertyChange"></click-event-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="隐藏/显示">
                                <el-switch v-model="property.left.visible"
                                           @change="onPropertyChange"></el-switch>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="标题栏" name="center">
                <el-form label-position="left">
                    <el-form-item label="使用搜索框">
                        <el-switch v-model="property.center.useSearchBar"
                                   @change="onPropertyChange"></el-switch>
                    </el-form-item>
                    <div class="center-text" v-if="!property.center.useSearchBar">
                        <el-row :gutter="20">
                            <el-col :span="18">
                                <el-form-item label="文字内容" label-width="80px">
                                    <el-input v-model="property.center.text"
                                              @input="onPropertyChange"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="颜色">
                                    <theme-color-picker v-model="property.center.color"
                                                        @change="onPropertyChange"></theme-color-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                    <div v-else>
                        <el-row :gutter="20">
                            <el-col :span="10">
                                <el-form-item label="提示文字" label-width="70px">
                                    <el-input v-model="property.center.searchBarPlaceholder"
                                              @input="onPropertyChange"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="圆角">
                                    <el-switch v-model="property.center.roundSearchBar"
                                               @change="onPropertyChange"></el-switch>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="事件">
                                    <click-event-picker v-model="property.center.clickConfig" @change="onPropertyChange"></click-event-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="右侧" name="right">
                <el-form label-position="left">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="图标">
                                <colorui-icon-selector @change="onPropertyChange"
                                                       v-model="property.right.icon"></colorui-icon-selector>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="文字" label-width="40px">
                                <el-input v-model="property.right.text" @input="onPropertyChange"
                                          maxlength="6"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="颜色">
                                <theme-color-picker v-model="property.right.color"
                                                    @change="onPropertyChange"></theme-color-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="16">
                            <el-form-item label="点击事件">
                                <click-event-picker v-model="property.right.clickConfig" @change="onPropertyChange"></click-event-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="隐藏/显示">
                                <el-switch v-model="property.right.visible"
                                           @change="onPropertyChange"></el-switch>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: 'common-top-tool-bar-property',
        props: {
            property: {
                type: Object
            }
        },
        data() {
            return {
                activeName: 'center'
            }
        },
        methods: {
            onPropertyChange() {
                this.propertyChange()
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
    .common-top-tool-bar-property {
        text-align: initial;
    }
</style>
