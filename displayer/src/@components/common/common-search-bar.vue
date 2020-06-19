<template>
	<view class="common-search-bar">
		<view class="cu-bar search bg-white">
			<view class="search-form" :class="[propertyData.bar.round ? 'round' : '']">
				<text :class="'cuIcon-'+propertyData.bar.icon"></text>
				<input :adjust-position="false" type="text" :placeholder="propertyData.bar.placeholder"
				 confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn" :class="['bg-'+propertyData.button.bgColor,propertyData.button.round ? 'round' : '', propertyData.button.shadow ? 'shadow' : '']">{{propertyData.button.text}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'common-search-bar',
		props: {
			propertyData: {
				type: Object
			},
			theme: {
				type: Object
			}
		},
	}
</script>

<style scoped lang="scss">
</style>
