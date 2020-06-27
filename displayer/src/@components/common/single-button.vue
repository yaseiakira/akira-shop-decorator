<template>
	<view class="common-single-button" :style="marginStyle" :class="[propertyData.block ? 'flex flex-direction' : '','text-'+propertyData.align]">
		<button class="cu-btn" :class="[propertyData.isLine ? 'line-' + propertyData.bgColor : 'bg-'+propertyData.bgColor,propertyData.round ? 'round' : '', propertyData.shadow ? 'shadow' : '',propertyData.size,propertyData.circle ? 'cuIcon' :'']"
		 @tap="clickEvent(propertyData.clickConfig)">
			<text v-if="propertyData.icon" :class="['cuIcon-'+propertyData.icon, propertyData.circle ? '' :'margin-right-xs']"></text>{{propertyData.text}}
		</button>
	</view>
</template>

<script>
	export default {
		name: 'single-button-common-panel',
		props: {
			propertyData: {
				type: Object
			}
		},
		computed: {
			marginStyle() {
				const pt = `${uni.upx2px(this.propertyData.paddingTop)}px`;
				const pr = `${uni.upx2px(this.propertyData.paddingRight)}px`;
				const pb = `${uni.upx2px(this.propertyData.paddingBottom)}px`;
				const pl = `${uni.upx2px(this.propertyData.paddingLeft)}px`;

				return `padding:${pt} ${pr} ${pb} ${pl}`;
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
