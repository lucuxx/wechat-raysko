<template>
	<view class="container">
		<u-sticky bgColor="#fff">
			<u-tabs :list="list" @change="handleChange" :activeStyle="{
				color:'#6083f7',
				fontWeight: 'bold',
				transform: 'scale(1.05)'}"></u-tabs>
			<u-gap height="10" bgColor="#fff"></u-gap>
		</u-sticky>
		<view class="content">


			<view class="img-wrap" @tap="clickItem">
				<u--image :src="topImg2" bgColor height="200px" :lazy-load="true"></u--image>
				<u-row justify="center">
					<u-col span="12" style="text-align: center;">
						<u--text block align="center" text="RSK530"></u--text>
					</u-col>
				</u-row>
				<u--text block lines="2" color=":#606266"
					text="RSK530手持终端是一款多功能手持终端，提供SDK，支持二次开发及技术支持。6.0寸高清显示屏;画质清晰;"></u--text>
			</view>

			<u-gap height="10" bgColor="#eceef3"></u-gap>
			<!-- <u-line></u-line> -->

			<view class="img-wrap" @tap="clickItem">
				<u--image :src="topImg2" bgColor height="200px" :lazy-load="true"></u--image>
				<u-row justify="center">
					<u-col span="12" style="text-align: center;">
						<u--text block align="center" text="RSK530"></u--text>
					</u-col>
				</u-row>
				<u--text block lines="2" color=":#606266"
					text="RSK530手持终端是一款多功能手持终端，提供SDK，支持二次开发及技术支持。6.0寸高清显示屏;画质清晰;"></u--text>
			</view>

			<u-gap height="10" bgColor="#eceef3"></u-gap>
			<!-- <u-line></u-line> -->

			<view class="img-wrap" @tap="clickItem">
				<u--image :src="topImg2" bgColor height="200px" :lazy-load="true"></u--image>
				<u-row justify="center">
					<u-col span="12" style="text-align: center;">
						<u--text block align="center" text="RSK530"></u--text>
					</u-col>
				</u-row>
				<u--text block lines="2" color=":#606266"
					text="RSK530手持终端是一款多功能手持终端，提供SDK，支持二次开发及技术支持。6.0寸高清显示屏;画质清晰;"></u--text>
			</view>

			<u-gap height="10" bgColor="#eceef3"></u-gap>
			<!-- <u-line></u-line> -->
		</view>
	</view>
</template>

<script>
	import topImg2 from "@/static/uview/img/3.png"
	export default {
		data() {
			return {
				topImg2,
				list: [{
						name: "警务通终端"
					},
					{
						name: "仓储物流终端"
					},
					{
						name: "智能三防终端"
					},
					{
						name: "人脸识别访客机"
					},
					{
						name: "PCBA板解决方案"
					},
					{
						name: "刷脸支付设备"
					},
				]
				// list: [{
				//     thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"
				// }, {
				//     thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
				// }, {
				//     thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"
				// }, {
				//     thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"
				// }, {
				//     thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"
				// }]
			}
		},
		methods: {
			handleChange(item) {
				console.log(item)
			},
			clickItem(row) {
				uni.navigateTo({
					url: `/pages/detail/detail`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background: #eceef3;
	}

	.content {
		margin: 10px 20px;
		// background: #fff;
		// border-radius: 10px;
	}

	.img-wrap {
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		background: #fefefe;
		min-height: 200px;
		border-radius: 10px;
	}

	::v-deep .u-tabs__wrapper__nav__line {
		background: #6083f7 !important;
	}
</style>