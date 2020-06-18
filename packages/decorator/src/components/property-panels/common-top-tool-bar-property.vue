<template>
    <div class="common-top-tool-bar-property">
        <el-tabs v-model="activeName" stretch>
            <el-tab-pane label="左侧" name="left">
                <el-form>
                    <el-form-item label="隐藏/显示">
                        <el-switch v-model="property.left.visible"
                                   @change="onPropertyChange('left')"></el-switch>
                    </el-form-item>
                    <el-form-item label="文字内容">
                        <el-input v-model="property.left.text" @input="onPropertyChange('left')"
                                  maxlength="6"></el-input>
                    </el-form-item>
                    <el-form-item label="图标">
                        <colorui-icon-selector @iconSelected="onPropertyChange('left','icon',$event)"
                                               :current-icon="property.left.icon"></colorui-icon-selector>
                    </el-form-item>
                </el-form>
                <theme-colors-selector @themeChange="onPropertyChange('left','color',$event)"
                                       text="文本颜色"></theme-colors-selector>
                <click-event-manager @propertyChange="onPropertyChange('left','event',$event)"></click-event-manager>
            </el-tab-pane>
            <el-tab-pane label="标题栏" name="center">
                <el-form>
                    <el-form-item label="使用搜索框">
                        <el-switch v-model="property.center.useSearchBar"
                                   @change="onPropertyChange('center')"></el-switch>
                    </el-form-item>
                    <div class="center-text" v-if="!property.center.useSearchBar">
                        <el-form-item label="文字内容">
                            <el-input v-model="property.center.text" @input="onPropertyChange('center')"></el-input>
                        </el-form-item>
                        <theme-colors-selector @themeChange="onPropertyChange('center','color',$event)"
                                               text="文本颜色"></theme-colors-selector>
                    </div>
                    <div v-else>
                        <el-form-item label="提示文字">
                            <el-input v-model="property.center.searchBarPlaceholder"
                                      @input="onPropertyChange('center')"></el-input>
                        </el-form-item>
                        <el-form-item label="圆角">
                            <el-switch v-model="property.center.roundSearchBar"
                                       @change="onPropertyChange('center')"></el-switch>
                        </el-form-item>
                        <click-event-manager title="点击搜索框设置"
                                             @propertyChange="onPropertyChange('center','event',$event)"></click-event-manager>
                    </div>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="右侧" name="right">
                <el-form>
                    <el-form-item label="隐藏/显示">
                        <el-switch v-model="property.right.visible" @change="onPropertyChange('right')"></el-switch>
                    </el-form-item>
                    <el-form-item label="文字内容">
                        <el-input v-model="property.right.text" maxlength="6"
                                  @input="onPropertyChange('right')"></el-input>
                    </el-form-item>
                    <el-form-item label="图标">
                        <colorui-icon-selector @iconSelected="onPropertyChange('right','icon',$event)"
                                               :current-icon="property.right.icon"></colorui-icon-selector>
                    </el-form-item>
                </el-form>
                <theme-colors-selector @themeChange="onPropertyChange('right','color',$event)"
                                       text="文本颜色"></theme-colors-selector>
                <click-event-manager @propertyChange="onPropertyChange('right','event',$event)"></click-event-manager>
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
                        this.property.left.icon = 'cuIcon-' + e.name
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
                        this.property.right.icon = 'cuIcon-' + e.name
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
                    name: 'common-top-tool-bar-property',
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
