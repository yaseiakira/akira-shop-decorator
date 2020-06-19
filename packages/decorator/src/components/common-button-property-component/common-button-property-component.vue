<template>
    <el-form label-position="left">
        <el-row :gutter="20">
            <el-col :span="12">
                <el-form-item label="文字" label-width="60px">
                    <el-input maxlength="10" v-model="property.text"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="颜色">
                    <theme-color-picker :color="property.textColor" @colorChange="onPropertyChange('textColor',$event)"></theme-color-picker>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="图标">
                    <colorui-icon-selector @iconSelected="onPropertyChange('icon',$event)"
                                           :current-icon="property.icon"></colorui-icon-selector>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="10">
                <el-form-item label="背景颜色">
                    <theme-color-picker :color="property.bgColor" @colorChange="onPropertyChange('bgColor',$event)"></theme-color-picker>
                </el-form-item>
            </el-col>
            <el-col :span="14">
                <el-form-item label="大小" label-width="60px">
                    <el-radio-group v-model="property.size">
                        <el-radio lable="sm">小</el-radio>
                        <el-radio lable="''">中</el-radio>
                        <el-radio lable="lg">大</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-form-item label="圆角">
                    <el-switch v-model="property.round"></el-switch>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="阴影">
                    <el-switch v-model="property.shadow"></el-switch>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="镂空">
                    <el-switch v-model="property.isLine"></el-switch>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
</template>

<script>
    export default {
        name: "common-button-property-component",
        props: {
            property: {
                type: Object
            }
        },
        methods: {
            onPropertyChange() {

            }
        }
    }
</script>

<style scoped>
    .common-button-property-component {
        text-align: initial;
    }

    .text-right {
        text-align: right;
    }
</style>
