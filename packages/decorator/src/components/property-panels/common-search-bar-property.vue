<template>
    <div class="common-search-bar-property">
        <el-tabs v-model="activeName" stretch>
            <el-tab-pane label="搜索框" name="bar">
                <el-form>
                    <el-form-item label="提示文字">
                        <el-input maxlength="20" v-model="property.bar.placeholder"></el-input>
                    </el-form-item>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="背景">
                                <theme-color-picker :color="property.bar.bgColor" @colorChange="onPropertyChange('bar','bgColor',$event)"></theme-color-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="图标">
                                <colorui-icon-selector @iconSelected="onPropertyChange('bar','icon',$event)"
                                                       :current-icon="property.bar.icon"></colorui-icon-selector>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="圆角">
                                <el-switch v-model="property.bar.round"></el-switch>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="搜索按钮" name="button">
                <common-button-property-component :property="property.button"></common-button-property-component>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "common-search-bar-property",
        props: {
            property: {
                type: Object
            }
        },
        data() {
            return {
                activeName: 'bar'
            }
        },
        methods: {
            onPropertyChange(prop, type, e) {
                if (prop) {
                    console.log('a')
                }
                if (type) {
                    console.log('a')
                }
                if (e) {
                    console.log('a')
                }
            }
        }
    }
</script>

<style scoped>
    .common-search-bar-property {
        text-align: initial;
    }
</style>
