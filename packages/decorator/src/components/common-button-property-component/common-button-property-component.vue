<template>
    <el-form label-position="left">
        <el-row :gutter="20">
            <el-col :span="18" v-show="!property.circle">
                <el-form-item label="文字" label-width="60px">
                    <el-input maxlength="10" v-model="property.text" @input="onPropertyChange"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="图标">
                    <colorui-icon-selector @change="onPropertyChange"
                                           v-model="property.icon"></colorui-icon-selector>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="10">
                <el-form-item label="颜色">
                    <theme-color-picker v-model="property.bgColor"
                                        @change="onPropertyChange"></theme-color-picker>
                </el-form-item>
            </el-col>
            <el-col :span="14">
                <el-form-item label="大小" label-width="60px">
                    <el-radio-group v-model="property.size" @change="onPropertyChange">
                        <el-radio label="sm">小</el-radio>
                        <el-radio label="medium">中</el-radio>
                        <el-radio label="lg">大</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-form-item label="圆角">
                    <el-switch v-model="property.round" @change="onPropertyChange"></el-switch>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="圆形">
                    <el-switch v-model="property.circle" @change="onPropertyChange('circle',$event)"></el-switch>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="阴影">
                    <el-switch v-model="property.shadow" @change="onPropertyChange"></el-switch>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="镂空">
                    <el-switch v-model="property.isLine" @change="onPropertyChange"></el-switch>
                </el-form-item>
            </el-col>
        </el-row>
        <el-form-item label="点击事件">
            <click-event-picker v-model="property.clickConfig" @change="onPropertyChange"></click-event-picker>
        </el-form-item>
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
            onPropertyChange(type) {
                if (type === 'circle') {
                    this.property.text = this.property.circle ? '' : '搜索';
                }
                this.$emit('propertyChange', this.property)
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
