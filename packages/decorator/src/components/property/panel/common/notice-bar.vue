<template>
    <div class="common-notice-bar-property">
        <el-form label-position="left">
            <el-row :gutter="10">
                <el-col :span="12">
                    <el-form-item label="自动播放">
                        <el-switch v-model="property.autoplay" @change="onPropertyChange"></el-switch>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="播放间隔" label-width="80px">
                        <el-input type="number" v-model="property.interval" @change="onPropertyChange"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12">
                    <el-form-item label="背景颜色">
                        <theme-color-picker v-model="property.bgColor" @change="onPropertyChange"></theme-color-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="文字颜色">
                        <theme-color-picker v-model="property.textColor"
                                            @change="onPropertyChange"></theme-color-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12">
                    <el-form-item label="通知图标">
                        <colorUI-icon-selector @change="onPropertyChange"
                                               v-model="property.icon"></colorUI-icon-selector>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="图标颜色">
                        <theme-color-picker v-model="property.iconColor"
                                            @change="onPropertyChange"></theme-color-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="点击事件">
                <click-event-picker v-model="property.clickConfig" @change="onPropertyChange"></click-event-picker>
            </el-form-item>
            <el-divider>公告条目</el-divider>
            <el-form-item :label="'公告'+(index+1)" v-for="(item,index) in property.items" :key="index"
                          label-width="60px">
                <el-input v-model="item.title" maxlength="100" @input="onPropertyChange">
                    <el-button slot="append" icon="el-icon-delete" @click="deleteNotice(index)"></el-button>
                </el-input>
            </el-form-item>
            <el-form-item style="text-align: center">
                <el-button type="primary" size="small" icon="el-icon-plus" round @click="addNotice">添加公告</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "notice-bar-common-panel",
        props: {
            property: {
                type: Object
            }
        },
        methods: {
            deleteNotice(index) {
                this.property.items.splice(index, 1);
                this.onPropertyChange()
            },
            addNotice() {
                this.property.items.push({
                    title: 'hello akira!'
                });
                this.onPropertyChange()
            },
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
