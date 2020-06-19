<template>
    <div class="common-top-tool-bar-property">
        <el-tabs v-model="activeName" stretch>
            <el-tab-pane label="左侧" name="left">
                <el-form>
                    <el-form-item label="文字">
                        <el-input v-model="property.left.text" @input="onPropertyChange('left')"
                                  maxlength="6"></el-input>
                    </el-form-item>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="图标">
                                <colorui-icon-selector @iconSelected="onPropertyChange('left','icon',$event)"
                                                       :current-icon="property.left.icon"></colorui-icon-selector>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="颜色">
                                <theme-color-picker :color="property.left.color" @colorChange="onPropertyChange('left','color',$event)"></theme-color-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" style="text-align: right">
                            <el-form-item label="隐藏/显示">
                                <el-switch v-model="property.left.visible"
                                           @change="onPropertyChange('left')"></el-switch>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <click-event-manager :config="property.left.clickConfig" @propertyChange="onPropertyChange('left','event',$event)"></click-event-manager>
            </el-tab-pane>
            <el-tab-pane label="标题栏" name="center">
                <el-form label-position="left" >
                    <el-form-item label="使用搜索框">
                        <el-switch v-model="property.center.useSearchBar"
                                   @change="onPropertyChange('center')"></el-switch>
                    </el-form-item>
                    <div class="center-text" v-if="!property.center.useSearchBar">
                        <el-row :gutter="20">
                            <el-col :span="18">
                                <el-form-item label="文字内容" label-width="80px">
                                    <el-input v-model="property.center.text" @input="onPropertyChange('center')"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="颜色">
                                    <theme-color-picker :color="property.center.color" @colorChange="onPropertyChange('left','color',$event)"></theme-color-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                    <div v-else>
                        <el-row :gutter="20">
                            <el-col :span="18">
                                <el-form-item label="提示文字" label-width="80px">
                                    <el-input v-model="property.center.searchBarPlaceholder"
                                              @input="onPropertyChange('center')"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="圆角">
                                    <el-switch v-model="property.center.roundSearchBar"
                                               @change="onPropertyChange('center')"></el-switch>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <click-event-manager title="点击搜索框设置"
                                             :config="property.center.clickConfig"
                                             @propertyChange="onPropertyChange('center','event',$event)"></click-event-manager>
                    </div>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="右侧" name="right">
                <el-form>
                    <el-form-item label="文字">
                        <el-input v-model="property.right.text" maxlength="6"
                                  @input="onPropertyChange('right')"></el-input>
                    </el-form-item>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="图标">
                                <colorui-icon-selector @iconSelected="onPropertyChange('right','icon',$event)"
                                                       :current-icon="property.right.icon"></colorui-icon-selector>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="颜色">
                                <theme-color-picker :color="property.right.color" @colorChange="onPropertyChange('right','color',$event)"></theme-color-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" style="text-align: right">
                            <el-form-item label="隐藏/显示">
                                <el-switch v-model="property.right.visible"
                                           @change="onPropertyChange('right')"></el-switch>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <click-event-manager :config="property.right.clickConfig" @propertyChange="onPropertyChange('right','event',$event)"></click-event-manager>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

    export default {
        name: 'common-top-tool-bar-property',
        props: {
            property: {
                type: Object
            }
        },
        data() {
            return {
                activeName: 'center'
            }
        },
        methods: {
            onPropertyChange(property, field, e) {
                if (property == 'left') {
                    if (field === 'icon') {
                        this.property.left.icon = e.name
                    }
                    if (field === 'color') {
                        this.property.left.color = e.name ? e.name : e.color;
                    }
                    if (field === 'event') {
                        this.property.left.clickConfig = e;
                    }
                }
                if (property == 'center') {
                    if (field === 'color') {
                        this.property.center.color = e.name ? e.name : e.color;
                    }
                    if (field === 'event') {
                        this.property.center.clickConfig = e;
                    }
                }
                if (property == 'right') {
                    if (field === 'icon') {
                        this.property.right.icon = e.name
                    }
                    if (field === 'color') {
                        this.property.right.color = e.name ? e.name : e.color;
                    }
                    if (field === 'event') {
                        this.property.right.clickConfig = e;
                    }
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

<style scoped lang="scss">
    .common-top-tool-bar-property {
        text-align: initial;
    }
</style>
