<template>
    <div class="common-nav-list-property">
        <el-tabs v-model="activeTab" stretch>
            <el-tab-pane label="外观" name="first">
                <el-form>
                    <el-row :gutter="20">
                        <el-col :span="14">
                            <el-form-item label="类型">
                                <el-radio-group v-model="property.type" @change="propertyChange">
                                    <el-radio :label="0">列表</el-radio>
                                    <el-radio :label="1">宫格</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="背景">
                                <theme-color-picker v-model="property.bgColor" @change="propertyChange"></theme-color-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div class="list" v-show="property.type===0">
                        <el-row :gutter="20">
                            <el-col :span="12">
                                <el-form-item label="显示箭头">
                                    <el-switch v-model="property.showArrow" @change="propertyChange"></el-switch>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="卡片类型">
                                    <el-switch v-model="property.cardType" @change="propertyChange"></el-switch>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="grid" v-show="property.type===1">
                        <el-row :gutter="20">
                            <el-col :span="16">
                                <el-form-item label="列数">
                                    <el-radio-group v-model="property.columns" @change="propertyChange">
                                        <el-radio :label="3">3列</el-radio>
                                        <el-radio :label="4">4列</el-radio>
                                        <el-radio :label="5">5列</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="边框">
                                    <el-switch v-model="property.border" @change="propertyChange"></el-switch>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="菜单列表" name="second">
                <nav-menu-item v-for="(menu,index) in property.menus" :key="index"
                                         :menu="menu"
                                         @change="menuItemChange(index,$event)"
                                         @remove="menuItemRemove(index)"
                ></nav-menu-item>
                <div class="add-btn text-center">
                    <el-button type="primary" size="small" round icon="el-icon-plus" @click="add">添 加</el-button>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

    export default {
        name: "nav-list-common-panel",
        props: {
            property: {
                type: Object
            }
        },
        data(){
            return {
                activeTab:'first'
            }
        },
        methods: {
            add() {
                const copy = JSON.parse(JSON.stringify(this.property.menus[0]));
                copy.text = '菜单' + (this.property.menus.length + 1);
                this.property.menus.push(copy)
                this.propertyChange()
            },
            menuItemRemove(index) {
                if (this.property.menus.length === 1) {
                    this.$message.error('至少需要一个菜单项目');
                    return;
                }
                this.property.menus.splice(index, 1);
                this.propertyChange()
            },
            menuItemChange(index, menu) {
                this.$set(this.property.menus, index, menu)
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

<style scoped>

</style>
