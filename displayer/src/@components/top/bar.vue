<template>
	<view class="common-top-tool-bar">
		<view class="cu-bar search" :class="'bg-'+ theme.name" :style="{'background-color': theme.name.indexOf('#')==-1 ? '' : theme.name}">
			<view class="action" v-if="propertyData.left.visible" @tap="clickEvent(propertyData.left.clickConfig)">
				<text :class="'cuIcon-'+propertyData.left.icon" :style="{color:propertyData.left.color.indexOf('#')==-1 ? '' : propertyData.left.color }" v-if="propertyData.left.icon"></text>
				<text v-if="propertyData.left.text" :class="['text-' + propertyData.left.color]" :style="{color:propertyData.left.color.indexOf('#')==-1 ? '' : propertyData.left.color}">{{propertyData.left.text}}</text>
			</view>
			<view class="search-form" :class="{round:propertyData.center.roundSearchBar}" v-if="propertyData.center.useSearchBar"
			 @tap="clickEvent(propertyData.center.clickConfig)">
				<text class="cuIcon-search"></text>
				<input :adjust-position="false" type="text" :placeholder="propertyData.center.searchBarPlaceholder" confirm-type="search"
				 readonly disabled></input>
			</view>
			<view class="content" v-if="!propertyData.center.useSearchBar">
				<text :style="{'color':propertyData.center.color.indexOf('#')==-1 ? '' : propertyData.center.color}" :class="['text-' + propertyData.center.color]">{{propertyData.center.text}}</text>
			</view>
			<view class="action" v-if="propertyData.right.visible" @tap="clickEvent(propertyData.right.clickConfig)">
				<text class="margin-right-xs" :class="'cuIcon-'+propertyData.right.icon" :style="{color:propertyData.right.color.indexOf('#')==-1 ? '' : propertyData.right.color}" v-if="propertyData.right.icon"></text>
				<text v-if="propertyData.right.text" :class="['text-' + propertyData.right.color]" :style="{color:propertyData.right.color.indexOf('#')==-1 ? '' : propertyData.right.color}">{{propertyData.right.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'bar-top-panel',
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
