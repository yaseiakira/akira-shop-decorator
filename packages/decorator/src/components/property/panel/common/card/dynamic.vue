<template>
    <section class="common-dynamic-card-property">
        <el-tabs v-model="activeTab" stretch>
            <el-tab-pane label="通用" name="common">
                <el-form label-position="left">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="四边空白">
                                <el-switch v-model="property.padding" @change="propertyChange"></el-switch>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
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
            <el-tab-pane label="顶部" name="top">
                <el-form label-position="left">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <single-image-picker text="小图" :uploadedImage="property.smallCover"
                                                 @deleteSuccess="imageChange('smallCover',$event)"
                                                 @uploadSuccess="imageChange('smallCover',$event)"></single-image-picker>
                        </el-col>
                        <el-col :span="16">
                            <el-form-item label="标题" label-width="40px">
                                <el-input v-model="property.title" @input="propertyChange"></el-input>
                            </el-form-item>
                            <el-row :gutter="20">
                                <el-col :span="8">
                                    <el-form-item label="颜色">
                                        <theme-color-picker v-model="property.titleColor"
                                                            @change="propertyChange"></theme-color-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="圆形">
                                        <el-switch v-model="property.smallCoverRound"
                                                   @change="propertyChange"></el-switch>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="18">
                            <el-form-item label="左边文字" label-width="80px">
                                <el-input v-model="property.leftText" @input="propertyChange"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="颜色">
                                <theme-color-picker v-model="property.leftTextColor"
                                                    @change="propertyChange"></theme-color-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="18">
                            <el-form-item label="右边文字" label-width="80px">
                                <el-input v-model="property.rightText" @input="propertyChange"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="颜色">
                                <theme-color-picker v-model="property.rightTextColor"
                                                    @change="propertyChange"></theme-color-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="文字" name="text">
                <el-form>
                    <el-form-item label="颜色">
                        <theme-color-picker v-model="property.contentTextColor" @change="propertyChange"></theme-color-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="textarea" placeholder="自定义文案，200字以内" rows="8" maxlength="200" show-word-limit
                                  v-model="property.contentText" @input="propertyChange"></el-input>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="图片" name="images">
                <el-alert
                        title="注意! 最多上传 9 张图片"
                        type="info">
                </el-alert>
                <mutil-image-picker style="margin-top:12px" v-model="property.images" @change="propertyChange"></mutil-image-picker>
            </el-tab-pane>
            <el-tab-pane label="底部" name="bottom">
                <el-alert
                        title="注意! 左侧图标 显示优先级高于 左侧文字"
                        type="info">
                </el-alert>
                <icon-text-value-list style="margin-top: 8px" v-model="property.bottoms" @change="propertyChange"></icon-text-value-list>
            </el-tab-pane>
        </el-tabs>
    </section>
</template>

<script>
    export default {
        name: "dynamic-card-common-panel",
        props: {
            property: {
                type: Object
            }
        },
        data() {
            return {
                activeTab: 'common'
            }
        },
        methods: {
            imagesChange(index, e) {
                this.$set(this.property.images, index, e)
                this.propertyChange()
            },
            imageChange(type, e) {
                if (type === 'smallCover') {
                    this.property.smallCover = e;
                }
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
