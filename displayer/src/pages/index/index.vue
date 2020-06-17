<template>
	<view class="content custom-body" :style="{'background':main.page.background}">
		<view class="top-tool-bar" v-if="main.topToolBar">
			<component-container :component="main.topToolBar" @click="acviteComponent(main.topToolBar)" :theme="main.theme"></component-container>
		</view>
		<view class="scroll-content" :class="{'hasTopBar':main.hasTopBar,'hasBottomBar': main.hasBottomBar}">
			<draggable v-model="main.components">
				<component-container v-for="item in main.components" :key="item.id" :component="item.componentData" :theme="main.theme"
				 @click="acviteComponent(item)"></component-container>
			</draggable>
		</view>
		<view class="bottom-tool-bar" v-if="main.bottomToolBar">
			<component-container :component="main.bottomToolBar" :theme="main.theme" @click="acviteComponent(main.bottomToolBar)"></component-container>
		</view>
	</view>
</template>

<script>
	import draggable from 'vuedraggable'
	export default {
		components: {
			draggable
		},
		data() {
			return {
				main: {
					page: {
						background: '#f0f0f0',
					},
					theme: {
						color: '#fff',
						name: 'white'
					},
					hasTopBar: false,
					hasBottomBar: false,
					topToolBar: null,
					bottomToolBar: null,
					components: []
				}
			}
		},
		onLoad() {
			window.addEventListener('message', this.receiveMessage, false)
		},
		onUnload() {
			window.removeEventListener('message', this.receiveMessage);
		},
		methods: {
			acviteComponent(component) {
				if (component.id) {
					this.main.components.forEach(c => {
						if (c.id && c.id == component.id) {
							c.acvite = true;
							this.postMessageToParent('componentChange', c.componentData);
							return;
						}
					})
				} else {
					component.acvite = true;
					if (component.componentName === 'common-top-tool-bar') {
						if (this.main.bottomToolBar) {
							this.main.bottomToolBar.active = false;
						}
					}
					// 如果是底部工具栏
					if (component.componentName === 'common-tabs-bar') {
						if (this.main.topToolBar) {
							this.main.topToolBar.active = false;
						}
					}
					this.postMessageToParent('componentChange', component);
				}
			},
			confirm() {

			},
			receiveMessage(e) {
				if (e.data && e.data.method) {
					switch (e.data.method) {
						case 'changeTheme':
							this.changeTheme(e.data.messageContent);
							break;
						case 'addComponent':
							this.addComponent(e.data.messageContent);
							break;
						case 'propertyChange':
							this.propertyChange(e.data.messageContent);
							break;
						default:
							break;
					}

				}
			},
			changeTheme(theme) {
				console.log(theme)
				this.main.theme = theme
			},
			propertyChange(property) {
				switch (property.name) {
					case 'page-property':
						this.pagePropertyChange(property.data);
						break;
					default:
						break
				}
			},
			pagePropertyChange(property) {
				if (property.isImage) {
					this.main.page.background = 'url(' + property.bgImage + ') no-repeat top center / cover';
				} else {
					if (property.bgColor) {
						this.main.page.background = property.bgColor;
					}
				}
			},
			addComponent(component) {
				component.active = true;
				// 如果是顶部工具条
				if (component.componentName === 'common-top-tool-bar') {
					if (this.main.topToolBar) {
						uni.showModal({
							tilte: '提示',
							content: '已存在顶部工具栏'
						})
					} else {
						if (this.main.bottomToolBar) {
							this.main.bottomToolBar.active = false;
						}
						this.main.topToolBar = component;
						this.main.hasTopBar = true;
						this.postMessageToParent('componentChange', component);
					}
					return;
				}
				// 如果是底部工具栏
				if (component.componentName === 'common-tabs-bar') {
					if (this.main.bottomToolBar) {
						uni.showModal({
							tilte: '提示',
							content: '已存在底部工具栏'
						})
					} else {
						if (this.main.topToolBar) {
							this.main.topToolBar.active = false;
						}
						this.main.bottomToolBar = component;
						this.main.hasBottomBar = true;
						this.postMessageToParent('componentChange', component);
					}
					return;
				}
				// 新增组件,选中该组件
				this.main.components.push({
					id: new Date().getTime(),
					componentData: component
				})
				this.postMessageToParent('componentChange', component)
			},
			postMessageToParent(method, content) {
				window.parent.postMessage({
					method: method,
					messageContent: content
				}, '*');
			}
		}
	}
</script>

<style scoped lang="scss">
	page,
	.custom-body {
		height: 100%;
	}

	.top-tool-bar {
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 10;
	}

	.scroll-content {
		&.hasTopBar {
			padding-top: 100upx;
		}

		&.hasBottomBar {
			padding-bottom: 100upx;
		}
	}

	.bottom-tool-bar {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 10;
	}
</style>
