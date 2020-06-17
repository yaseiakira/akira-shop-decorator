<template>
	<view class="common-tabs-bar">
		<view class="cu-bar tabbar bg-white">
			<view class="action">
				<view class="cuIcon-cu-image">
					<image src="/static/tabbar/basics_cur.png"></image>
				</view>
				<view class="text-green">元素</view>
			</view>
			<view class="action">
				<view class="cuIcon-cu-image">
					<image src="/static/tabbar/component.png"></image>
				</view>
				<view class="text-gray">组件</view>
			</view>
			<view class="action">
				<view class="cuIcon-cu-image">
					<image src="/static/tabbar/plugin.png"></image>
					<view class="cu-tag badge">99</view>
				</view>
				<view class="text-gray">扩展</view>
			</view>
			<view class="action">
				<view class="cuIcon-cu-image">
					<image src="/static/tabbar/about.png"></image>
					<view class="cu-tag badge"></view>
				</view>
				<view class="text-gray">关于</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'common-tabs-bar'
	}
</script>

<style scoped lang="scss">
</style>
