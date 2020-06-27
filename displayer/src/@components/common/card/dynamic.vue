<template>
	<view class="cu-card dynamic" :class="[propertyData.padding ? '' : 'no-card',propertyData.padding ? '' : 'bg-'+propertyData.bgColor]"
	 :style="{'background-color': propertyData.padding ? '' : propertyData.bgColor.indexOf('#')==-1 ? '' : propertyData.bgColor}"
	 @tap="clickEvent(propertyData.clickConfig)">
		<view class="cu-item shadow">
			<view :class="[propertyData.padding ? 'bg-'+propertyData.bgColor : '']" :style="{'background-color': propertyData.padding ? (propertyData.bgColor.indexOf('#')==-1 ? '' : propertyData.bgColor) : ''}">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar lg" :class="propertyData.smallCoverRound ? 'round' : 'radius'" v-if="propertyData.smallCover"
						 :style="'background-image:url('+propertyData.smallCover+')'"></view>
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
				<view class="text-content padding-sm" :class="'text-'+propertyData.contentTextColor" :style="{color:propertyData.contentTextColor.indexOf('#')==-1 ? '' : propertyData.contentTextColor}">
					{{propertyData.contentText}}
				</view>
				<view class="grid flex-sub padding-lr" :class="propertyData.images.length == 1 ?'col-1':'col-3 grid-square'">
					<view class="bg-img" :class="propertyData.images.length > 1 ? '' :'only-img'" :style="'background-image:url('+img+');'"
					 v-for="(img,index) in propertyData.images" :key="index">
					</view>
				</view>
				<view class="text-gray text-sm text-right padding">
					<block v-for="(item,index) in propertyData.bottoms" :key="index">
						<text class="margin-lr-xs" :class="['cuIcon-'+item.icon,'text-'+item.leftTextColor]" :style="{color:item.leftTextColor.indexOf('#')==-1 ? '' : item.leftTextColor}">{{item.icon ? '' : item.leftText}}</text>
						<text :class="'text-'+item.rightTextColor" :style="{color:item.rightTextColor.indexOf('#')==-1 ? '' : item.rightTextColor}">{{item.rightText}}</text>
					</block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'dynamic-card-common-panel',
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
