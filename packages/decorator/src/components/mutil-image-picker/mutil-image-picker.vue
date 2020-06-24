<template>
    <el-row :gutter="20">
        <el-col :span="8" v-for="(img,index) in images" :key="index">
            <a class="mutil-image-picker" href="javascript:;">
                <div class="el-upload-custom">
                    <div class="image-picker">
                        <div class="uploader-content">
                            <el-image :src="img" class="image"
                                      fit="contain"></el-image>
                            <el-button type="danger"
                                       class="delete-image"
                                       circle size="mini"
                                       icon="el-icon-close"
                                       @click.stop="remove(index)"></el-button>
                        </div>
                    </div>
                </div>
            </a>
        </el-col>
        <el-col :span="8" v-show="images.length < max">
            <a class="mutil-image-picker" href="javascript:;">
                <el-upload action=""
                           ref="uploader"
                           name="upload"
                           :multiple="false"
                           :show-file-list="false"
                           :limit="1"
                           accept="images/*"
                           :on-change="onFileChange"
                           :auto-upload="false"
                           :on-error="uploadError"
                           class="image-picker"
                           v-loading="uploadConfig.processing">
                    <div class="uploader-content">
                        <div class="add-btn">
                            <i class="el-icon-plus uploader-icon"></i>
                            <small>{{text}}</small>
                        </div>
                    </div>
                </el-upload>
            </a>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "mutil-image-picker",
        model: {
            prop: 'images',
            event: 'change'
        },
        props: {
            max: {
                type: Number,
                default: 9
            },
            text: {
                type: String,
                default() {
                    return '添加图片'
                }
            },
            images: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                uploadConfig: {
                    hasFile: false,
                    processing: false
                }
            }
        },
        watch: {
            images(newVal) {
                this.images = newVal
            }
        },
        created() {

        },
        methods: {
            uploadError() {
                this.$message({
                    message: '上传失败!',
                    type: 'error'
                })
            },
            remove(index) {
                this.$confirm('确定删除该图片吗?', '提示', {
                    type: 'warning',
                    showCancelButton: true
                }).then(() => {
                    this.images.splice(index, 1)
                    this.$emit('change', this.images)
                })
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
                        self.images.push(canvas.toDataURL(file.raw.type, 0.2));
                        self.uploadConfig.processing = false
                        self.$emit('change', self.images)
                        this.$refs.uploader.clearFiles()
                    }
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    .mutil-image-picker {
        display: inline-block;
        color: initial;

        .el-upload-custom {
            height: 120px;
            width: 120px;
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .el-upload-custom:hover {
            border-color: #409EFF;
        }
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
