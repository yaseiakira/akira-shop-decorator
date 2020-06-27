<template>
    <div class="theme-colors-selector">
        <el-form>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item :label="text" style="margin:0">
                        <el-color-picker v-model="selectedTheme.color" @change="customColorChange"></el-color-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="12" style="text-align: right">
                    <el-form-item>
                        <el-button type="text" @click="setDefault">
                            设为默认
                        </el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div class="themes">
            <el-radio-group v-model="selectedTheme.name" :fill="selectedTheme.color" @change="onThemeChange">
                <el-radio-button :label="color.name"
                                 v-for="color in themes" :key="color.title">
                    <span :style="{color:selectedTheme.name === color.name? 'white' : color.color}">{{color.title}}</span>
                </el-radio-button>
            </el-radio-group>
        </div>
    </div>
</template>

<script>
    import themeColors from '../../models/theme-color.model'

    export default {
        name: 'theme-colors-selector',
        model: {
            prop: 'color',
            event: 'change'
        },
        props: {
            color: {
                type: String,
                default() {
                    return 'white'
                }
            },
            text: {
                type: String,
                default: '自定义'
            }
        },
        data() {
            return {
                themes: [],
                selectedTheme: {
                    name: '',
                    color: ''
                }
            }
        },
        watch: {
            color() {
                this.setColor()
            }
        },
        created() {
            this.themes = JSON.parse(JSON.stringify(themeColors.colors));
            this.setColor()
        },
        methods: {
            setColor() {
                if (this.color) {
                    const theme = themeColors.colors.find(p => p.name === this.color || p.color == this.color)
                    if (theme) {
                        this.selectedTheme.name = theme.name;
                        this.selectedTheme.color = theme.color;
                    } else {
                        this.selectedTheme.name = '';
                        this.selectedTheme.color = this.defaultColor;
                    }
                } else {
                    this.selectedTheme.name = this.defaultColor
                    this.selectedTheme.color = '#f0f0f0'
                }
            },
            setDefault() {
                this.selectedTheme.name = 'gray'
                this.selectedTheme.color = '#f0f0f0'
                this.$emit('change', this.selectedTheme.name)
            },
            customColorChange() {
                this.selectedTheme.name = ''
                this.$emit('change', this.selectedTheme.color)
            },
            onThemeChange() {
                const color = this.themes.find(p => p.name === this.selectedTheme.name);
                this.selectedTheme.color = color.color
                this.$emit('change', this.selectedTheme.name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .theme-colors-selector {
        /deep/ .el-radio-button__inner {
            border: none;
            border-radius: 0;
            background: none
        }

        .themes {
            background-color: #f2f2f2;
            border-radius: 4px;
            padding: 4px
        }
    }

</style>
