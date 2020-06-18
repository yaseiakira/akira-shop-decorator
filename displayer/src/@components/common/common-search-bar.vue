<template>
	<view class="common-search-bar">
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input :adjust-position="false" type="text" placeholder="搜索图片、文章、视频"
				 confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'common-search-bar'
	}
</script>

<style scoped lang="scss">
</style>
