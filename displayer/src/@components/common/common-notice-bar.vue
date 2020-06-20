<template>
	<view class="cu-bar common-notice-bar" :class="'bg-'+propertyData.bgColor" :style="{color:propertyData.bgColor.indexOf('#')==-1 ? '' : propertyData.bgColor}" @tap="clickEvent(propertyData.clickConfig)">
		<view class="action">
			<text :class="['cuIcon-'+propertyData.icon,'text-'+propertyData.iconColor]" :style="{color:propertyData.iconColor.indexOf('#')==-1 ? '' : propertyData.iconColor}"></text>
		</view>
		<view class="content">
			<swiper class="swiper" :autoplay="propertyData.autoplay" :interval="propertyData.interval" circular vertical>
				<swiper-item v-for="(item,index) in propertyData.items" :key="index">
					<view class="swiper-item" :class="'text-'+propertyData.textColor" :style="{color:propertyData.textColor.indexOf('#')==-1 ? '' : propertyData.textColor}">{{item.title}}</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'common-notice-bar',
		props: {
			propertyData: {
				type: Object
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
	.common-notice-bar {
		min-height: 64upx;

		.content {
			text-align: left;
			width: calc(100% - 90upx);
			left: 28upx;

			.swiper-item {
				font-size: 28upx;
			}
		}
	}
</style>
