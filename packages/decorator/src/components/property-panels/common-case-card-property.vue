<template>
    <section class="common-case-card">
        <el-tabs v-model="activeTab" stretch>
            <el-tab-pane label="封面" name="first">
                <el-form label-position="left">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <single-image-picker text="封面图" :uploadedImage="property.cover" u
                                                 @deleteSuccess="imageChange('cover',$event)"
                                                 @uploadSuccess="imageChange('cover',$event)"></single-image-picker>
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
                    <el-form-item label="封面描述" label-width="80px">
                        <el-input v-model="property.coverDesc" maxlength="50" @input="propertyChange"></el-input>
                    </el-form-item>
                    <div class="tag">
                        <el-row :gutter="20">
                            <el-col :span="16">
                                <el-form-item label="徽标文字" label-width="80px">
                                    <el-input v-model="property.tagText" @input="propertyChange"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="徽标颜色">
                                    <theme-color-picker v-model="property.tagBgColor"
                                                        @change="propertyChange"></theme-color-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="底部组件" name="second">
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
        </el-tabs>

    </section>
</template>

<script>
    export default {
        name: "common-case-card-property",
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
            imageChange(type, e) {
                if (type === 'cover') {
                    this.property.cover = e;
                } else {
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
