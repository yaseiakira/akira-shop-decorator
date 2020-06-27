<template>
	<view class="cu-card article" :class="[propertyData.padding ? '' : 'no-card',propertyData.padding ? '' : 'bg-'+propertyData.bgColor]"
	 :style="{'background-color': propertyData.padding ? '' : propertyData.bgColor.indexOf('#')==-1 ? '' : propertyData.bgColor}"
	 @tap="clickEvent(propertyData.clickConfig)">
		<view class="cu-item shadow">
			<view class="title" :class="[propertyData.padding ? 'bg-'+propertyData.bgColor : '']" :style="{'background-color': propertyData.padding ? (propertyData.bgColor.indexOf('#')==-1 ? '' : propertyData.bgColor) : ''}">
				<view class="text-cut" :class="'text-'+propertyData.titleColor" :style="{color:propertyData.titleColor.indexOf('#')==-1 ? '' : propertyData.titleColor}">{{propertyData.title}}</view>
			</view>
			<view class="content" :class="[propertyData.padding ? 'bg-'+propertyData.bgColor : '']" :style="{'background-color': propertyData.padding ? (propertyData.bgColor.indexOf('#')==-1 ? '' : propertyData.bgColor) : ''}">
				<image :src="propertyData.cover" mode="aspectFill" v-if="propertyData.cover"></image>
				<view class="desc" :class="'text-'+propertyData.contentTextColor" :style="{color:propertyData.contentTextColor.indexOf('#')==-1 ? '' : propertyData.contentTextColor}">
					<view class="text-content padding-sm">
						{{propertyData.contentText}}
					</view>
					<view>
						<view class="cu-tag light" :class="[tag.isLine ? 'line-' + tag.color : 'bg-' + tag.color,tag.size,tag.shape]"
						 v-for="(tag,index) in propertyData.tags">{{tag.text}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'article-card-common-panel',
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

<style lang="scss" scoped>
	.cu-card.article>.cu-item .content .text-content {
		color: inherit;
	}

	.cu-card.article>.cu-item .content {
		padding-bottom: 30upx;
	}

	.cu-card.article>.cu-item {
		padding-bottom: 0;
	}

	.cu-card>.cu-item {
		background-color: inherit;
	}
</style>
