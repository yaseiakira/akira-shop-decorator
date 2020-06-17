<template>
	<view class="component-container">
		<view class="tool-bar" v-show="component.active">
			<button class="tool-btn cu-btn sm bg-red">
				<text class="cuIcon-close"></text>
			</button>
		</view>
		<keep-alive>
			<component :is="component.componentName" :propertyData="component.property" :theme="theme"></component>
		</keep-alive>
	</view>
</template>

<script>
	export default {
		name: 'component-container',
		props: {
			component: {
				type: Object,
				default () {
					return {
						active: false,
						componentName: '',
						property: null
					}
				}
			},
			theme: {
				type: Object
			}
		},
		data() {
			return {

			}
		},
		created() {
			console.log(this.component)
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.component-container {
		position: relative;

		.tool-bar {
			position: absolute;
			height: 100%;
			width: 100%;
			border: 2px dashed red;
			z-index: 1;


			.tool-btn {
				position: absolute;
				top: 0;
				right: 0;
				opacity: .5;
				padding: 0 0upx;
				border-radius: 0;
				height: 30upx;
			}
		}
	}
</style>
