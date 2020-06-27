<template>
	<view class="common-search-bar">
		<view class="cu-bar search" :class="'bg-'+propertyData.bar.bgColor" :style="{color:propertyData.bar.bgColor.indexOf('#')==-1 ? '' : propertyData.bar.bgColor}">
			<view class="search-form" :class="[propertyData.bar.round ? 'round' : '']">
				<text :class="'cuIcon-'+propertyData.bar.icon"></text>
				<input :adjust-position="false" type="text" :placeholder="propertyData.bar.placeholder" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn" :class="[propertyData.button.isLine ? 'line-' + propertyData.button.bgColor : 'bg-'+propertyData.button.bgColor,propertyData.button.round ? 'round' : '', propertyData.button.shadow ? 'shadow' : '',propertyData.button.size,propertyData.button.circle ? 'cuIcon' :'']"
				 @tap="clickEvent(propertyData.button.clickConfig)">
					<text v-if="propertyData.button.icon" :class="['cuIcon-'+propertyData.button.icon, propertyData.button.circle ? '' :'margin-right-xs']"></text>{{propertyData.button.text}}
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'search-bar-common-panel',
		props: {
			propertyData: {
				type: Object
			},
			theme: {
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
</style>
