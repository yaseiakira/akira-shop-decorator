<template>
    <div class="common-single-button-property">
        <el-divider>边距</el-divider>
        <el-form label-position="left">
            <el-row :gutter="10">
                <el-col :span="6">
                    <el-form-item label="上" label-width="20px">
                        <el-input type="number" v-model="property.paddingTop" @input="onPropertyChange"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="右" label-width="20px">
                        <el-input type="number" v-model="property.paddingRight" @input="onPropertyChange"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="下" label-width="20px">
                        <el-input type="number" v-model="property.paddingBottom" @input="onPropertyChange"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="左" label-width="20px">
                        <el-input type="number" v-model="property.paddingLeft" @input="onPropertyChange"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="10">
                    <el-form-item label="成块">
                        <el-switch v-model="property.block" @change="onPropertyChange"></el-switch>
                    </el-form-item>
                </el-col>
                <el-col :span="14" v-show="!property.block">
                    <el-form-item label="位置">
                        <el-radio-group v-model="property.align" @change="onPropertyChange">
                            <el-radio label="left">左</el-radio>
                            <el-radio label="center">中</el-radio>
                            <el-radio label="right">右</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>

        </el-form>
        <common-colorUI-button :property="property"
                                          @propertyChange="onPropertyChange"></common-colorUI-button>
    </div>
</template>

<script>
    export default {
        name: "single-button-common-panel",
        props: {
            property: {
                type: Object
            }
        },
        methods: {
            onPropertyChange() {
                this.$emit('propertyChange', {
                    name: this.$options.name,
                    data: this.property
                })
            }
        }
    }
</script>

<style scoped>

</style>
