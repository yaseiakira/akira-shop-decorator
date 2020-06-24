<template>
    <div class="icon-text-value-component">
        <div class="form" v-for="(item,index) in list" :key="index">
            <el-form class="icon-text-value-component">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-form-item label="左侧图标">
                            <colorui-icon-selector v-model="item.icon" @change="formChange"></colorui-icon-selector>
                        </el-form-item>
                    </el-col>
                    <el-col :span="9">
                        <el-form-item label="左侧文字">
                            <el-input maxlength="10" v-model="item.leftText" @input="formChange"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="9">
                        <el-form-item label="右侧文字">
                            <el-input maxlength="10" v-model="item.rightText" @input="formChange"></el-input>
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
        name: "icon-text-value-component",
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
                        rightText: '5'
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
                top: 4px;
                right: 4px;
            }
        }

        .form:hover {
            border-color: #409EFF
        }
    }
</style>
