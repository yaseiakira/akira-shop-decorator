<template>
    <div class="akira-mobile-displayer">
        <iframe :src="url" ref="iframe"></iframe>
    </div>
</template>

<script>
    export default {
        name: "akira-sd-displayer",
        data() {
            return {
                url: process.env.VUE_APP_DISPLAYER_URL
            }
        },
        mounted() {
            this.$nextTick(() => {
                window.addEventListener('message', this.receiveMessage, false)
            })
        },
        destroyed() {
            window.removeEventListener('message', this.receiveMessage)
        },
        methods: {
            receiveMessage(e) {
                if (e.data && e.data.method) {
                    switch (e.data.method) {
                        case 'componentChange':
                            this.componentChange(e.data.messageContent);
                            break;
                        default:
                            break
                    }
                }
            },
            componentChange(component) {
                this.$emit('componentChange', component);
            },
            changeTheme(color) {
                this.$refs.iframe.contentWindow.postMessage({
                    method: 'changeTheme',
                    messageContent: color
                }, '*');
            },
            addComponent(template) {
                this.$refs.iframe.contentWindow.postMessage({
                    method: 'addComponent',
                    messageContent: template
                }, '*');
            },
            propertyChange(property) {
                this.$refs.iframe.contentWindow.postMessage({
                    method: 'propertyChange',
                    messageContent: property
                }, '*');
            }
        }
    }
</script>

<style scoped lang="scss">
    .akira-mobile-displayer {
        iframe {
            min-height: 667px;
            width: 100%;
            border: none;
        }
    }
</style>
