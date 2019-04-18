<template>
	<view class="content">
		<view>
			<text class="title">{{ name }}</text>
			<navigator url="pay" hover-class="navigator-hover">
				<view class="main-left">
				<image src="../../static/wechat-pay.png"></image>
				</view>
				<button type="primary">支付</button>
			</navigator>
			<navigator url="collection" hover-class="navigator-hover">
				<image src="../../static/wechat-collection.png"></image>
				<button type="primary">收藏</button>
			</navigator>
			<navigator url="camera" hover-class="navigator-hover">
				<image src="../../static/wechat-gallery.png"></image>
				<button type="primary">相册</button>
			</navigator>
			<navigator url="cardpackage" hover-class="navigator-hover">
				<image src="../../static/wechat-cardpackage.png"></image>
				<button type="primary">卡包</button>
			</navigator>
			<navigator url="expression" hover-class="navigator-hover">
				<image src="../../static/wechat-expression.png"></image>
				<button type="primary">表情</button>
			</navigator>
			<navigator url="setting" hover-class="navigator-hover">
				<image src="../../static/wechat-setting.png"></image>
				<button type="primary">设置</button>
			</navigator>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '汤先送'
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
}
.title {
	font-size: 36upx;
	color: #8f8f94;
}
</style>
