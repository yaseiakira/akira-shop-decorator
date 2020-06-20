<template>
	<view class="common-tabs-bar">
		<view class="cu-bar tabbar" :class="'bg-'+ theme.name" :style="{'background-color': theme.name.indexOf('#')==-1 ? '' : theme.name}">
			<view class="action" v-for="(tab,index) in propertyData.tabs" :key="index" v-show="(index+1) <= propertyData.count"
			 @tap="clickEvent(index,tab.clickConfig)">
				<view class="cuIcon-cu-image" v-if="tab.customImage">
					<image :src="activeIndex == index ? tab.activeImage : tab.image"></image>
					<view class="cu-tag badge" v-if="tab.enableBadge">{{tab.badgeValue | badgeRender(tab.badgeMax)}}</view>
				</view>
				<view :class="['cuIcon-'+tab.icon , activeIndex == index ? 'text-'+ propertyData.activeColor : 'text-' + propertyData.color]"
				 :style="{color:activeIndex == index ? (propertyData.activeColor.indexOf('#')==-1 ? '' : propertyData.activeColor) : (propertyData.color.indexOf('#')==-1 ? '' : propertyData.color)}"
				 v-if="!tab.customImage">
					<view class="cu-tag badge" v-if="tab.enableBadge">{{tab.badgeValue | badgeRender(tab.badgeMax)}}</view>
				</view>
				<view :class="activeIndex == index ? 'text-'+ propertyData.activeColor : 'text-' + propertyData.color " :style="{color:activeIndex == index ? (propertyData.activeColor.indexOf('#')==-1 ? '' : propertyData.activeColor) : (propertyData.color.indexOf('#')==-1 ? '' : propertyData.color)}">{{tab.text}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'common-tabs-bar',
		filters: {
			badgeRender(value, max) {
				return value < max ? value : max + '+';
			}
		},
		props: {
			propertyData: {
				type: Object
			},
			theme: {
				type: Object
			}
		},
		data() {
			return {
				activeIndex: 0
			}
		},
		created() {

		},
		methods: {
			clickEvent(index, config) {
				this.activeIndex = index
				this.$emit('clickEvent', config)
			}
		}
	}
</script>

<style scoped lang="scss">
</style>
