<template>
    <a href="javascript:;" class="theme-color-picker">
        <el-popover
                placement="left"
                title=""
                width="360"
                trigger="click"
                v-model="show">
            <theme-colors-selector v-model="activeColor" @change="colorChange"></theme-colors-selector>
            <div slot="reference" class="theme-color-picker-button">
                <span class="color-picker__color">
                    <span class="color-picker__color-inner" :style="{'background':activeColor}"></span>
                </span>
                <span class="color-picker__icon el-icon-arrow-down"></span>
            </div>
        </el-popover>
    </a>
</template>

<script>
    import themeColors from '../../models/theme-color.model'

    export default {
        name: "theme-color-picker",
        model: {
            prop: 'color',
            event: 'change',
        },
        props: {
            color: {
                type: String
            }
        },
        watch: {
            color() {
                this.setColor()
            }
        },
        created() {
            this.setColor()
        },
        data() {
            return {
                show: false,
                activeColor: ''
            }
        },
        methods: {
            setColor() {
                const theme = themeColors.colors.find(p => p.name === this.color || p.color == this.color)
                if (theme) {
                    this.activeColor = theme.color;
                } else {
                    this.activeColor = this.color;
                }
            },
            colorChange() {
                this.show = false;
                this.$emit('change', this.activeColor)
            }
        }
    }
</script>

<style scoped lang="scss">
    .theme-color-picker {
        display: inline-block;
        position: relative;
        line-height: normal;
        height: 40px;
    }

    .theme-color-picker-button {
        display: inline-block;
        box-sizing: border-box;
        height: 40px;
        width: 40px;
        padding: 4px;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        font-size: 0;
        position: relative;
        cursor: pointer;

        .color-picker__color {
            position: relative;
            display: block;
            box-sizing: border-box;
            border: 1px solid #999;
            border-radius: 2px;
            width: 100%;
            height: 100%;
            text-align: center;

            .color-picker__color-inner {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
            }
        }

        .color-picker__icon {
            display: inline-block;
            width: 100%;
            color: #fff;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            font-size: 12px;
        }
    }
</style>
