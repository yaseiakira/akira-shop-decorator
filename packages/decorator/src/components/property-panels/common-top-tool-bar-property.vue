<template>
    <div class="common-top-tool-bar-property">
        <el-tabs v-model="activeName" stretch>
            <el-tab-pane label="左侧" name="left">
                <el-form>
                    <el-form-item label="隐藏/显示">
                        <el-switch v-model="property.left.visible"></el-switch>
                    </el-form-item>
                    <el-form-item label="文字内容">
                        <el-input v-model="property.left.text"></el-input>
                    </el-form-item>
                    <el-form-item label="图标">
                        <colorui-icon-selector @iconSelected="onLeftIconSelected"
                                               :current-icon="property.left.icon"></colorui-icon-selector>
                    </el-form-item>
                </el-form>
                <theme-colors-selector @themeChange="onLeftColorChange" text="文本颜色"></theme-colors-selector>
                <click-event-manager></click-event-manager>
            </el-tab-pane>
            <el-tab-pane label="标题栏" name="center">
                <el-form>
                    <el-form-item label="使用搜索框">
                        <el-switch v-model="property.center.userSearchBar"></el-switch>
                    </el-form-item>
                    <el-form-item label="文字内容" v-if="!property.center.userSearchBar">
                        <el-input v-model="property.center.text"></el-input>
                    </el-form-item>
                    <div v-else>
                        <el-form-item label="提示文字" v-show="property.center.searchBarPlaceholder">
                            <el-input v-model="property.center.searchBarPlaceholder"></el-input>
                        </el-form-item>
                        <el-form-item label="圆角" v-show="property.center.roundSearchBar">
                            <el-switch v-model="property.center.roundSearchBar"></el-switch>
                        </el-form-item>
                        <click-event-manager title="点击搜索框设置"></click-event-manager>
                    </div>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="右侧" name="right">
                <el-form>
                    <el-form-item label="隐藏/显示">
                        <el-switch v-model="property.right.visible"></el-switch>
                    </el-form-item>
                    <el-form-item label="文字内容">
                        <el-input v-model="property.right.text"></el-input>
                    </el-form-item>
                    <el-form-item label="图标">
                        <colorui-icon-selector @iconSelected="onRightIconSelected"
                                               :current-icon="property.right.icon"></colorui-icon-selector>
                    </el-form-item>
                </el-form>
                <theme-colors-selector @themeChange="onRightColorChange" text="文本颜色"></theme-colors-selector>
                <click-event-manager></click-event-manager>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import ColoruiIconSelector from "../colorui-icon-selector/colorui-icon-selector";
    import ThemeColorsSelector from "../theme-selector/theme-colors-selector";
    import ClickEventManager from "../click-event-manager/click-event-manager";

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
            onLeftColorChange(theme) {
                this.property.left.color = theme.name ? theme.name : theme.color;
            },
            onRightColorChange(theme) {
                this.property.right.color = theme.name ? theme.name : theme.color;
            },
            onLeftIconSelected(icon) {
                this.property.left.icon = icon.name
            },
            onRightIconSelected(icon) {
                this.property.right.icon = icon.name
            }
        }
    }
</script>

<style scoped lang="scss">
    .common-top-tool-bar-property {
        text-align: initial;
    }
</style>
