<template>
    <div class="bottom-tab-bar-config">
        <el-form :mode="tab" label-position="left">
            <el-form-item label="文字" label-width="40px">
                <el-input maxlength="4" v-model="tab.text" placeholder="按钮文字,4个字以内"
                          @input="onPropertyChange()"></el-input>
            </el-form-item>
            <el-row :gutter="20">
                <el-col :span="16">
                    <el-form-item label="徽章最大值" v-show="tab.enableBadge" label-width="100px">
                        <el-input type="number" v-model="tab.badgeMax"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="启用徽章">
                        <el-switch v-model="tab.enableBadge" @change="onPropertyChange"></el-switch>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="图标" v-show="!tab.customImage">
                        <colorUI-icon-selector @change="onPropertyChange('icon',$event)"
                                               v-model="tab.icon"></colorUI-icon-selector>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="自定义图片">
                        <el-switch v-model="tab.customImage" @change="onPropertyChange"></el-switch>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="事件">
                        <click-event-picker v-model="tab.clickConfig" @change="onPropertyChange"></click-event-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="image-prop" v-show="tab.customImage">
                <el-alert
                        title="注意!"
                        type="info">
                    建议尺寸 80px × 80px,100Kb 以内,png 图片
                </el-alert>
                <el-row :gutter="20" class="image-picker">
                    <el-col :span="12">
                        <single-image-picker text="未激活图片"
                                             :uploadedImage="tab.image"
                                             @deleteSuccess="onPropertyChange('image',$event)"
                                             @uploadSuccess="onPropertyChange('image',$event)"></single-image-picker>
                    </el-col>
                    <el-col :span="12">
                        <single-image-picker text="激活图片"
                                             :uploadedImage="tab.activeImage"
                                             @deleteSuccess="onPropertyChange('activeImage',$event)"
                                             @uploadSuccess="onPropertyChange('activeImage',$event)"></single-image-picker>
                    </el-col>
                </el-row>
            </div>
        </el-form>
    </div>
</template>

<script>

    export default {
        name: "tab-item",
        props: {
            tab: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            onPropertyChange(type, e) {
                if (type === 'image') {
                    this.tab.image = e;
                }
                if (type === 'activeImage') {
                    this.tab.activeImage = e;
                }
                this.$emit('propertyChange', this.tab)
            }
        }
    }
</script>

<style scoped lang="scss">
    .image-prop {
        text-align: center;

        .image-picker {
            margin: 8px 0;
        }

    }
</style>
