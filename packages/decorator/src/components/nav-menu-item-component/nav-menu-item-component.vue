<template>
    <div class="nav-menu-item-component">
        <el-form label-position="left">
            <el-row :gutter="20">
                <el-col :span="10">
                    <el-form-item label="文字" label-width="40px">
                        <el-input maxlength="10" v-model="menu.text" @input="propertyChange"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="颜色">
                        <theme-color-picker v-model="menu.color" @change="propertyChange"></theme-color-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8" v-show="!menu.customImage">
                    <el-form-item label="图标">
                        <colorui-icon-selector v-model="menu.icon" @change="propertyChange"></colorui-icon-selector>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="事件">
                        <click-event-picker v-model="menu.clickConfig" @change="propertyChange"></click-event-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="自定义图片">
                        <el-switch v-model="menu.customImage" @change="propertyChange"></el-switch>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div class="image-picker" v-show="menu.customImage">
            <single-image-picker text="菜单图片"
                                 :uploadedImage="menu.image"
                                 @deleteSuccess="imageChange"
                                 @uploadSuccess="imageChange"></single-image-picker>
        </div>
        <div class="del-btn">
            <el-button type="danger" circle icon="el-icon-delete" size="mini" @click="remove"></el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "nav-menu-item-component",
        props: {
            menu: {
                type: Object
            }
        },
        methods: {
            propertyChange() {
                this.$emit('change', this.menu)
            },
            imageChange(img) {
                this.menu.image = img;
                this.propertyChange()
            },
            remove() {
                this.$confirm('确定删除该菜单吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$emit('remove')
                }).catch(() => {

                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .nav-menu-item-component {
        position: relative;
        border: 1px dashed #999;
        padding: 8px;
        margin: 4px 0;
        border-radius: 4px;

        .del-btn {
            position: absolute;
            right: 4px;
            top: 4px;
        }
    }

    .nav-menu-item-component:hover {
        border: 1px dashed #409EFF;
    }
</style>
