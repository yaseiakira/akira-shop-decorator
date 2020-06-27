<template>
	<view class="cu-card case" :class="[propertyData.padding ? '' : 'no-card',propertyData.padding ? '' : 'bg-'+propertyData.bgColor]"
	 :style="{'background-color': propertyData.padding ? '' : propertyData.bgColor.indexOf('#')==-1 ? '' : propertyData.bgColor}" @tap="clickEvent(propertyData.clickConfig)">
		<view class="cu-item shadow">
			<view class="image">
				<image :src="propertyData.cover" mode="widthFix"></image>
				<view class="cu-tag" v-if="propertyData.tagText" :class="'bg-'+propertyData.tagBgColor" :style="{color:propertyData.tagBgColor.indexOf('#')==-1 ? '' : propertyData.tagBgColor}">{{propertyData.tagText}}</view>
				<view class="cu-bar bg-shadeBottom" v-if="propertyData.coverDesc"><text class="text-cut">{{propertyData.coverDesc}}</text></view>
			</view>
			<view class="cu-list menu-avatar" :class="[propertyData.padding ? 'bg-'+propertyData.bgColor : '']"
	 :style="{'background-color': propertyData.padding ? (propertyData.bgColor.indexOf('#')==-1 ? '' : propertyData.bgColor) : ''}">
				<view class="cu-item">
					<view class="cu-avatar lg" :class="propertyData.smallCoverRound ? 'round' : 'radius'" v-if="propertyData.smallCover" :style="'background-image:url('+propertyData.smallCover+')'"></view>
					<view class="content flex-sub" :class="propertyData.smallCover ? '' : 'no-small-cover' ">
						<view :class="'text-'+propertyData.titleColor" :style="{color:propertyData.titleColor.indexOf('#')==-1 ? '' : propertyData.titleColor}">{{propertyData.title}}</view>
						<view class="text-gray text-sm flex justify-between">
							<text :class="'text-'+propertyData.leftTextColor" :style="{color:propertyData.leftTextColor.indexOf('#')==-1 ? '' : propertyData.leftTextColor}">{{propertyData.leftText}}</text>
							<view class="text-sm text-right" :class="'text-'+propertyData.rightTextColor" :style="{color:propertyData.rightTextColor.indexOf('#')==-1 ? '' : propertyData.rightTextColor}">
								{{propertyData.rightText}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'case-card-common-panel',
		props: {
			propertyData: {
				type: Object
			}
		},
		methods:{
			clickEvent(config) {
				this.$emit('clickEvent', config)
			}
		}
	}
</script>

<style scoped lang="scss">
	.cu-list.menu-avatar {
		.cu-item .content.no-small-cover {
			left: 24upx;
			width: 94%;
		}
	}

	.cu-card>.cu-item {
		background-color: inherit;
	}

	.cu-list.menu-avatar>.cu-item {
		background-color: inherit;
	}
</style>
