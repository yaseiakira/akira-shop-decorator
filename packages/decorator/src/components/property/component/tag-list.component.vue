<template>
    <section class="tag-list">
        <div class="item" v-for="(tag,index) in list" :key="index">
            <tag-item :data="tag"
                      @change="propertyChange(index,$event)"></tag-item>
            <div class="delete-btn">
                <el-button type="danger" size="small" circle icon="el-icon-delete" @click="remove(index)"></el-button>
            </div>
        </div>
        <div class="add-btn text-center">
            <el-button type="primary" size="small" round icon="el-icon-plus" @click="add">添 加</el-button>
        </div>
    </section>
</template>

<script>
    export default {
        name: "tag-list",
        model: {
            prop: 'list',
            event: 'change'
        },
        props: {
            list: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        watch: {
            list(newValue) {
                this.list = newValue
            }
        },
        methods: {
            remove(index) {
                this.$confirm('确定删除该标签吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.list.splice(index, 1)
                    this.$emit('change', this.list)
                }).catch(() => {

                })
            },
            add() {
                let data = null
                if (this.list[0]) {
                    data = JSON.parse(JSON.stringify(this.list[0]))
                } else {
                    data = {
                        text: '标签1',
                        color: 'green',
                        size: 'sm',
                        isLine: false,
                        shape: 'round'
                    }
                }
                this.list.push(data);
                this.$emit('change', this.list)
            },
            propertyChange(index, e) {
                this.$set(this.list, index, e)
                this.$emit('change', this.list)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../styles/common.scss";

    .item {
        position: relative;
        padding: 8px;
        margin-bottom: 4px;
        border-radius: 4px;
        border: 1px dashed $element-color-info;

        &:hover {
            border-color: $element-color-primary;
        }

        .delete-btn {
            position: absolute;
            top: 8px;
            right: 8px;
        }
    }
</style>
