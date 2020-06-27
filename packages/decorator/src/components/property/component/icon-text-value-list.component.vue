<template>
    <div class="icon-text-value-component">
        <div class="form" v-for="(item,index) in list" :key="index">
            <el-form label-position="left">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="左侧文字" label-width="80px">
                            <el-input maxlength="10" v-model="item.leftText" @input="formChange"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="图标">
                            <colorUI-icon-selector v-model="item.icon" @change="formChange"></colorUI-icon-selector>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="颜色">
                            <theme-color-picker v-model="item.leftTextColor" @change="formChange"></theme-color-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="18">
                        <el-form-item label="右侧文字" label-width="80px">
                            <el-input maxlength="10" v-model="item.rightText" @input="formChange"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="颜色">
                            <theme-color-picker v-model="item.rightTextColor" @change="formChange"></theme-color-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div class="del-btn">
                <el-button type="danger" circle size="small" icon="el-icon-delete" @click="remove(index)"></el-button>
            </div>
        </div>

        <div class="text-center">
            <el-button type="primary" round size="small" icon="el-icon-plus" @click="add">添 加</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "icon-text-value-list",
        model: {
            prop: 'list',
            event: 'change'
        },
        props: {
            list: {
                type: Array
            }
        },
        methods: {
            add() {
                let newItem = null;
                if (this.list[0]) {
                    newItem = JSON.parse(JSON.stringify(this.list[0]));
                } else {
                    newItem = {
                        icon: 'favor',
                        leftText: '',
                        rightText: '5',
                        leftTextColor:'gray',
                        rightTextColor:'gray',
                    }
                }
                this.list.push(newItem)
                this.formChange()
            },
            remove(index) {
                this.$confirm('确定删除该项吗?', '提示', {
                    type: 'warning',
                    showCancelButton: true
                }).then(() => {
                    this.list.splice(index, 1)
                    this.formChange()
                })
            },
            formChange() {
                // this.$set(this.list,index,)
                this.$emit('change', this.list)
            }
        }
    }
</script>

<style scoped lang="scss">
    .icon-text-value-component {
        .form {
            position: relative;
            padding: 8px;
            border-radius: 4px;
            border: 1px dashed #999;
            margin: 8px 0;

            .del-btn {
                position: absolute;
                bottom: 4px;
                right: 4px;
            }
        }

        .form:hover {
            border-color: #409EFF
        }
    }
</style>
