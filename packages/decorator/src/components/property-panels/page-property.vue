<template>
    <div class="page-property">
        <div class="switch">
            <el-switch
                    v-model="property.isImage"
                    active-text="背景图片"
                    inactive-text="背景色"
                    @change="typeChange">
            </el-switch>
        </div>
        <el-form>
            <el-form-item v-show="!property.isImage">
                <theme-colors-selector v-model="property.bgColor" @change="propertyChange"></theme-colors-selector>
            </el-form-item>
            <div class="image" v-show="property.isImage">
                <el-alert
                        title="注意!"
                        type="info">
                    建议尺寸 750px × 1334px,500Kb 以内,jpg 图片
                </el-alert>
                <el-form-item>
                    <div style="text-align: center;margin-top:12px">
                        <single-image-picker text="背景图"
                                             :uploadedImage="property.bgImage"
                                             @deleteSuccess="deleteSuccess"
                                             @uploadSuccess="uploadSuccess"></single-image-picker>
                    </div>
                </el-form-item>
            </div>

        </el-form>
    </div>
</template>

<script>
    // import SingleImageUploader from '../Upload/single-image-uploader';

    export default {
        name: 'page-property',
        // components: { SingleImageUploader },
        data() {
            return {
                property: {
                    isImage: false,
                    bgColor: '',
                    bgImage: ''
                }
            }
        },
        methods: {
            typeChange() {
                if (!this.property.isImage) {
                    this.property.bgImage = '';
                    this.property.bgColor = '#f0f0f0';
                }
                this.propertyChange()
            },
            deleteSuccess() {
                this.property.bgImage = '';
                this.property.bgColor = '#f0f0f0';
                this.propertyChange()
            },
            uploadSuccess(url) {
                this.property.bgColor = '#f0f0f0';
                this.property.bgImage = url
                this.propertyChange()
            },
            propertyChange() {
                this.$emit('propertyChange', {
                    name: 'page-property',
                    data: this.property
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .switch {
        text-align: center;
        margin-bottom: 14px;
    }

    .page-property {
        text-align: initial;
    }
</style>
