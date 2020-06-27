<template>
	<view class="common-nav-list" :class="[propertyData.type===0 && propertyData.cardType ? 'padding-tb' : '']" :style="menuItemBgColor">
		<view class="cu-list" :class="[propertyData.type===0 ? 'menu' : 'grid',propertyData.type===1 ? 'col-' + propertyData.columns : '',propertyData.type===0 && propertyData.cardType ? 'card-menu' : '',propertyData.type===1 && propertyData.border ? '' : 'no-border' ]">
			<view class="cu-item" :class="[propertyData.type===0 && propertyData.showArrow ? 'arrow' : '']" v-for="(item,index) in propertyData.menus"
			 :key="index" @tap="clickEvent(item.clickConfig)">
				<view class="content" :class="['text-' + item.color]" :style="{color:item.color.indexOf('#')==-1 ? '' : item.color}">
					<text :class="['cuIcon-' + item.icon,'text-' + item.color]" v-if="!item.customImage && item.icon" :style="{color:item.color.indexOf('#')==-1 ? '' : item.color}"></text>
					<image :src="item.image" class="png" mode="aspectFit" v-if="item.customImage && item.image"></image>
					<text :class="['text-' + item.color]" :style="{color:item.color.indexOf('#')==-1 ? '' : item.color}">{{item.text}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import util from '../../@utils/common.js'
	export default {
		name: 'nav-list-common-panel',
		props: {
			propertyData: {
				type: Object
			}
		},
		computed: {
			menuItemBgColor() {
				if (this.propertyData.bgColor.indexOf('#') !== -1) {
					return `background-color:${this.propertyData.bgColor}`
				}
				const color = util.themeColorConvert(this.propertyData.bgColor);
				return `background-color:${color}`
			}
		},
		methods: {
			clickEvent(config) {
				this.$emit('clickEvent', config)
			}
		}
	}
</script>

<style scoped lang="scss">
	.cu-list.menu>.cu-item {
		background-color: inherit;
	}

	.cu-list.grid {
		background-color: inherit;
	}

	.cu-list.grid>.cu-item {
		uni-text {
			color: inherit;
		}

		uni-text[class*=cuIcon] {
			font-size: 68upx;
			display: inline-block;
			margin-top: 28upx;
			position: relative;
		}

		image {
			height: 100upx;
			width: 100upx;
			margin-bottom: -24upx;
		}
	}
</style>
