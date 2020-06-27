<template>
    <section class="tag-item">
        <el-form label-position="left">
            <el-form-item label="形状">
                <el-radio-group v-model="data.shape" @change="propertyChange">
                    <el-radio label="default">默认</el-radio>
                    <el-radio label="round">椭圆</el-radio>
                    <el-radio label="radius">圆角</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-row :gutter="20">
                <el-col :span="18">
                    <el-form-item label="文字" label-width="40px">
                        <el-input v-model="data.text" @input="propertyChange" maxlength="10"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="颜色">
                        <theme-color-picker v-model="data.color" @change="propertyChange"></theme-color-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="镂空">
                        <el-switch v-model="data.isLine" @change="propertyChange"></el-switch>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="尺寸">
                        <el-radio-group v-model="data.size" @change="propertyChange">
                            <el-radio label="default">默认</el-radio>
                            <el-radio label="sm">小型</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </section>
</template>

<script>
    export default {
        name: "tag-item",
        props: {
            data: {
                type: Object
            }
        },
        methods: {
            propertyChange() {
                this.$emit('change', this.data)
            }
        }
    }
</script>

<style scoped>

</style>
