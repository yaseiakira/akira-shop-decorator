<template>
    <div class="property-box shadow">
        <el-collapse :value="activePanel" accordion>
            <el-collapse-item :name="panel.name" v-for="panel in activePanels" :key="panel.name">
                <template slot="title">
                    <div class="panel-title">{{panel.title}}</div>
                </template>
                <div class="panel-body">
                    <component :is="panel.name" @propertyChange="onPropertyChange"
                               :property="panel.property"></component>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'akira-sd-prop-box',
        props: {
            activeComponent: {
                type: Object
            }
        },
        data() {
            return {
                activePanel: 'page-panel',
                panels: [{
                    title: '页面设置',
                    name: 'page-panel'
                }],
                activePanels: []
            }
        },
        created() {
            this.activePanels.push(this.panels[0])
        },
        watch: {
            activeComponent(newValue) {
                if (newValue) {
                    if (this.activePanels.length >= 1) {
                        this.activePanels.splice(1, 1);
                    }
                    const name = newValue.componentName;
                    this.activePanels.push({
                        title: newValue.name,
                        name: newValue.componentName,
                        property: newValue.property
                    })
                    this.activePanel = name
                }
            }
        },
        methods: {
            resetComponentProp(){
                this.activePanels.splice(1, this.activePanels.length);
                this.activePanel = 'page-panel'
            },
            onPropertyChange(e) {
                this.$emit('propertyChange', e);
            }
        }
    }
</script>

<style scoped lang="scss">

    .property-box {
        /deep/ .el-collapse-item__header {
            background-color: #304156;
            text-align: initial;
        }

        /deep/ .el-collapse-item__arrow {
            color: white;
        }

        /deep/ .el-collapse-item__content {
            padding-bottom: 4px;
            max-height: 560px;
            overflow: hidden;
            overflow-y: auto;
        }

        .panel-title {
            margin: 0 8px;
            width: 100%;
            color: white;

            .svg-icon {
                font-size: 18px;
                color: white
            }

        }

        .panel-body {
            padding: 6px
        }
    }

</style>

