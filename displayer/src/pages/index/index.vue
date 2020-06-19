<template>
	<view class="content custom-body" :style="{'background':main.page.background}">
		<view class="top-tool-bar" v-if="main.topToolBar">
			<component-container :component="main.topToolBar" @click.native="acviteTopBarComponent" :theme="main.theme"></component-container>
		</view>
		<view class="scroll-content" :class="{'hasTopBar':main.hasTopBar,'hasBottomBar': main.hasBottomBar}">
			<draggable v-model="main.components">
				<component-container v-for="(item,index) in main.components" :key="index" :component="item" :theme="main.theme"
				 @click.native="acviteComponent(index)"></component-container>
			</draggable>
		</view>
		<view class="bottom-tool-bar" v-if="main.bottomToolBar">
			<component-container :component="main.bottomToolBar" :theme="main.theme" @click.native="acviteBottomBarComponent"></component-container>
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
			acviteTopBarComponent() {
				if (this.main.bottomToolBar) {
					this.$set(this.main.bottomToolBar, 'active', false)
				}
				this.$set(this.main.topToolBar, 'active', true)
				this.unActiveComponents();
				this.postMessageToParent('componentChange', this.main.topToolBar);
			},
			acviteBottomBarComponent() {
				if (this.main.topToolBar) {
					this.$set(this.main.topToolBar, 'active', false)
				}
				this.$set(this.main.bottomToolBar, 'active', true)
				this.unActiveComponents();
				this.postMessageToParent('componentChange', this.main.bottomToolBar);
			},
			acviteComponent(index) {
				for (let i = 0; i < this.main.components.length; i++) {
					this.$set(this.main.components[i], 'active', i === index)
				}
				this.unActiveAllTopAndBottom();
				this.postMessageToParent('componentChange', this.main.components[index]);
			},
			unActiveAllTopAndBottom() {
				if (this.main.topToolBar) {
					this.$set(this.main.topToolBar, 'active', false)
				}
				if (this.main.bottomToolBar) {
					this.$set(this.main.bottomToolBar, 'active', false)
				}
			},
			unActiveComponents() {
				for (let i = 0; i < this.main.components.length; i++) {
					this.main.components[i].active = false;
					// this.$set(this.main.components, i, this.main.components[i])
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
				this.main.theme = theme
			},
			propertyChange(property) {
				switch (property.name) {
					case 'page-property':
						this.pagePropertyChange(property.data);
						break;
					case 'common-top-tool-bar-property':
						this.commonTopToolBarPropertyChange(property.data);
						break;
					case 'common-tabs-bar-property':
						this.commonBottomTabBarPropertyChange(property.data);
						break;
					default:
						break
				}
			},
			commonBottomTabBarPropertyChange(property) {
				this.$set(this.main.bottomToolBar, 'property', property)
			},
			commonTopToolBarPropertyChange(property) {
				this.$set(this.main.topToolBar, 'property', property)
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
					this.unActiveComponents();
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
					this.unActiveComponents();
					return;
				}
				// 已激活的设置未激活
				for (let i = 0; i < this.main.components.length; i++) {
					this.$set(this.main.components[i], 'active', false)
				}
				// 新增组件,选中该组件
				this.main.components.push(component)
				this.unActiveAllTopAndBottom();
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
