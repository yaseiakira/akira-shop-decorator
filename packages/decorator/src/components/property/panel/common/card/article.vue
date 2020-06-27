<template>
    <section class="common-article-card-property">
        <el-tabs :active-name="activeTab" stretch>
            <el-tab-pane label="基本" name="first">
                <el-form label-position="left">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <single-image-picker text="封面图" :uploadedImage="property.cover"
                                                 @deleteSuccess="imageChange"
                                                 @uploadSuccess="imageChange"></single-image-picker>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="四边空白">
                                <el-switch v-model="property.padding" @change="propertyChange"></el-switch>
                            </el-form-item>
                            <el-form-item label="背景">
                                <theme-color-picker v-model="property.bgColor"
                                                    @change="propertyChange"></theme-color-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="事件">
                                <click-event-picker v-model="property.clickConfig"
                                                    @change="propertyChange"></click-event-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="内容" name="second">
                <el-form label-position="left">
                    <el-row :gutter="20">
                        <el-col :span="18">
                            <el-form-item label="标题" label-width="40px">
                                <el-input v-model="property.title" maxlength="120" @input="propertyChange"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="颜色">
                                <theme-color-picker v-model="property.titleColor"
                                                    @change="propertyChange"></theme-color-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="内容">
                        <el-input type="textarea" rows="4" placeholder="文件简介内容,100字以内" show-word-limit
                                  v-model="property.contentText" maxlength="100" @input="propertyChange"></el-input>
                    </el-form-item>
                    <el-form-item label="内容文本颜色">
                        <theme-color-picker v-model="property.contentTextColor"
                                            @change="propertyChange"></theme-color-picker>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="标签" name="third">
                <tag-list v-model="property.tags" @change="propertyChange"></tag-list>
            </el-tab-pane>
        </el-tabs>
    </section>
</template>

<script>
    export default {
        name: "article-card-common-panel",
        props: {
            property: {
                type: Object
            }
        },
        data() {
            return {
                activeTab: 'first'
            }
        },
        methods: {
            imageChange(e) {
                this.property.cover = e;
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

<style scoped lang="scss">

</style>
