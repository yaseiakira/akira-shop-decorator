<template>
    <div class="single-image-picker">
        <el-upload action=""
                   ref="singleUploader"
                   name="upload"
                   :multiple="false"
                   :show-file-list="false"
                   :limit="1"
                   accept="images/*"
                   :on-change="onFileChange"
                   :auto-upload="false"
                   :on-success="uploadSuccess"
                   :on-remove="removeImage"
                   :on-error="uploadError"
                   class="image-picker"
                   v-loading="uploadConfig.processing">
            <div class="uploader-content">
                <el-image v-if="uploadConfig.displayImage" :src="uploadConfig.displayImage" class="image"
                          fit="contain"></el-image>
                <div v-else class="add-btn">
                    <i class="el-icon-plus uploader-icon"></i>
                    <small>{{text}}</small>
                </div>
                <el-button type="danger"
                           class="delete-image"
                           circle size="mini"
                           icon="el-icon-close"
                           v-if="uploadConfig.imageUrl"
                           @click.stop="removeImage()"></el-button>

            </div>
        </el-upload>
    </div>
</template>

<script>
    export default {
        name: "single-image-picker",
        props: {
            text: {
                type: String,
                default() {
                    return '选择图片'
                }
            },
            uploadedImage: {
                type: String,
                default() {
                    return ''
                }
            }
        },
        data() {
            return {
                uploadConfig: {
                    hasFile: false,
                    displayImage: '',
                    imageUrl: '',
                    processing: false
                }
            }
        },
        created() {
            if (this.uploadedImage) {
                this.uploadConfig.displayImage = this.uploadConfig.imageUrl = this.uploadedImage
            }
        },
        watch: {
            uploadedImage(newVal) {
                this.uploadConfig.processing = false
                this.$refs.singleUploader.clearFiles()
                this.uploadConfig.displayImage = this.uploadConfig.imageUrl = newVal
            }
        },
        methods: {
            uploadSuccess() {

            },
            onFileChange(file) {
                this.uploadConfig.processing = true
                const reader = new FileReader();
                reader.readAsDataURL(file.raw);

                const self = this;
                reader.onloadend = (e) => {

                    const image = new Image();
                    image.src = e.target.result;

                    image.onload = (e) => {
                        const canvas = document.createElement('canvas');
                        const w = e.path[0].width
                        const h = e.path[0].height
                        canvas.setAttribute('width', w);
                        canvas.setAttribute('height', h);
                        canvas.getContext('2d').drawImage(e.path[0], 0, 0, w, h);
                        self.uploadConfig.displayImage = this.uploadConfig.imageUrl = canvas.toDataURL(file.raw.type, 0.2);
                        self.uploadConfig.processing = false
                        self.$emit('uploadSuccess', self.uploadConfig.displayImage)
                    }
                }
            },
            removeImage() {
                this.$confirm('确定删除该图片吗?', '提示', {
                    type: 'warning',
                    showCancelButton: true
                }).then(() => {
                    this.uploadConfig.processing = true
                    this.deleteImageSuccess()
                })
            },
            deleteImageSuccess() {
                this.uploadConfig.processing = false
                this.$refs.singleUploader.clearFiles()
                this.uploadConfig.displayImage = ''
                this.uploadConfig.imageUrl = ''
                this.$emit('deleteSuccess', '')
            },
            uploadError() {
                this.$message({
                    message: '上传失败!',
                    type: 'error'
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .single-image-picker {
        display: inline-block;
    }

    .image-picker {
        height: 124px;
        width: 124px;
        overflow: hidden;

        /deep/ .el-upload {
            height: 120px;
            width: 120px;
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        /deep/ .el-upload:hover {
            border-color: #409EFF;
        }

        .image {
            width: 120px;
            height: 120px;
        }

        .delete-image {
            position: absolute;
            top: 4px;
            right: 4px;
            opacity: .85;
        }

        .uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 120px;
            height: 120px;
            line-height: 120px;
            text-align: center;
        }

        .add-btn {
            position: relative;

            small {
                position: absolute;
                top: 65%;
                width: 100%;
                display: block;
            }
        }
    }


</style>
