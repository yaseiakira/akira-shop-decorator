<template>
    <div class="akira-mobile-displayer" v-loading="loading">
        <iframe :src="url" ref="iframe"></iframe>
    </div>
</template>

<script>
    export default {
        name: "akira-sd-displayer",
        props: {
            basePath: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                url: '',
                loading: true
            }
        },
        watch: {
            basePath() {
                if (this.basePath) {
                    this.url = this.basePath
                } else {
                    this.url = process.env.VUE_APP_DISPLAYER_URL
                }
            }
        },
        mounted() {
            if (this.basePath) {
                this.url = this.basePath
            } else {
                this.url = process.env.VUE_APP_DISPLAYER_URL
            }
            this.$nextTick(() => {

                if (this.$refs.iframe.attachEvent) {
                    this.$refs.iframe.attachEvent("onload", () => {
                        this.loading = false
                        window.addEventListener('message', this.receiveMessage, false)
                        this.$emit('ready')
                    });
                } else {
                    this.$refs.iframe.onload = () => {
                        this.loading = false
                        window.addEventListener('message', this.receiveMessage, false)
                        this.$emit('ready')
                    };
                }
            })
        },
        destroyed() {
            window.removeEventListener('message', this.receiveMessage)
        },
        methods: {
            render(data) {
                if (!this.loading) {
                    this.$refs.iframe.contentWindow.postMessage({
                        method: 'renderAll',
                        messageContent: data
                    }, '*');
                } else {
                    const intervalId = setInterval(() => {
                        if (!this.loading) {
                            clearInterval(intervalId)
                            this.$refs.iframe.contentWindow.postMessage({
                                method: 'renderAll',
                                messageContent: data
                            }, '*');
                        }
                    }, 1000)
                }
            },
            getAllComponents() {
                this.$refs.iframe.contentWindow.postMessage({
                    method: 'getAllComponents',
                    messageContent: ''
                }, '*');
            },
            receiveMessage(e) {
                if (e.data && e.data.method) {
                    switch (e.data.method) {
                        case 'componentChange':
                            this.componentChange(e.data.messageContent);
                            break;
                        case 'componentRemove':
                            this.componentRemove();
                            break;
                        case 'componentsSave':
                            this.$emit('componentsSave', e.data.messageContent)
                            break;
                        default:
                            break
                    }
                }
            },
            componentRemove() {
                this.$emit('componentRemove');
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
