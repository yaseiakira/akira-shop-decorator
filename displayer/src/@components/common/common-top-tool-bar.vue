<template>
	<view class="common-top-tool-bar">
		<view class="cu-bar search" :class="'bg-'+theme.name">
			<view class="action" v-if="propertyData.left.visible">
				<text :class="propertyData.left.icon" v-if="propertyData.left.icon"></text>
				<text v-if="propertyData.left.text">{{propertyData.left.text}}</text>
			</view>
			<view class="content">
				<text :style="{'color':propertyData.center.color}">{{propertyData.center.text}}</text>
			</view>
			<view class="action" v-if="propertyData.right.visible">
				<text :class="propertyData.right.icon" v-if="propertyData.right.icon"></text>
				<text v-if="propertyData.right.text">{{propertyData.right.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'common-top-tool-bar',
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

			}
		},
		created() {
			console.log(this.propertyData)
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
</style>
