<template>
    <a href="javascript:;" class="theme-color-picker">
        <el-popover
                placement="left"
                title=""
                width="360"
                trigger="click"
                v-model="show">
            <theme-colors-selector @themeChange="colorChange"></theme-colors-selector>
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

    export default {
        name: "theme-color-picker",
        props: {
            color: {
                type: String
            }
        },
        created() {
            this.activeColor = this.color;
        },
        data() {
            return {
                show: false,
                activeColor: ''
            }
        },
        methods: {
            colorChange(color) {
                this.show = false;
                this.activeColor = color.color
                this.$emit('colorChange', color)
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
