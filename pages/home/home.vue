<template>
	<view class="container">
		<u-swiper :list="list1" height="200" @change="change" @click="click" indicator indicatorMode="line" circular
			radius="0"></u-swiper>
		<u-gap height="10" bgColor="#eceef3"></u-gap>
		<!-- <u-gap height="20" bgColor="#fff"></u-gap> -->
		<u-row justify="center">
			<u-col span="12">
				<u--text block align="center" text="- 热销产品 -"></u--text>
			</u-col>
		</u-row>
		<view class="content"> 
		<u-row justify="space-around">
			<u-col span="5">
				<view class="img-wrap" @click="clickItem({id:1})">
					<u--image :src="topImg2" bgColor width="100px" height="150px" :lazy-load="true"></u--image>
					<view>
						<u--text block align="center" text="RSK530"></u--text>
					</view>
				</view>
			</u-col>
			<u-col span="5">
				<view class="img-wrap" @click="clickItem({id:1})">
					<u--image :src="topImg2" bgColor width="100px" height="150px" :lazy-load="true"></u--image>
					<view>
						<u--text block align="center" text="RSK530"></u--text>
					</view>
				</view>
			</u-col>
		</u-row>
		<u-gap height="10" bgColor="#fff"></u-gap>
		<u-row justify="space-around">
			<u-col span="5">
				<view class="img-wrap" @click="clickItem({id:1})">
					<u--image :src="topImg2" bgColor width="100px" height="150px" :lazy-load="true"></u--image>
					<view>
						<u--text block align="center" text="RSK530"></u--text>
					</view>
				</view>
			</u-col>
			<u-col span="5">
				<view class="img-wrap" @click="clickItem({id:1})">
					<u--image :src="topImg2" bgColor width="100px" height="150px" :lazy-load="true"></u--image>
					<view>
						<u--text block align="center" text="RSK530"></u--text>
					</view>
				</view>
			</u-col>
		</u-row>
		<!-- <u-line></u-line> -->
		
		</view>
		<!-- <u-gap height="20" bgColor="#fff"></u-gap> -->
		<view>
			<u--text text="查看更多" size="12" type="info" iconStyle="color:#909399;font-size:12px;" align="center"
				suffixIcon="arrow-right" @click="clickMore"></u--text>
				<u-gap height="10" bgColor="#eceef3"></u-gap>
		</view>
	</view>
</template>

<script>
	import topImg2 from "@/static/uview/img/3.png"
	import topImg3 from "@/static/uview/img/banner3.jpeg"
	export default {
		data() {
			return {
				topImg2,
				list1: [
					// 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					// 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					// 'https://cdn.uviewui.com/uview/swiper/swiper3.png'
					topImg3,
				],


			}
		},
		computed: {
			// getIcon() {
			// 	return path => {
			// 		return 'https://cdn.uviewui.com/uview/example/' + path + '.png';
			// 	}
			// }
		},
		methods: {
			change() {

			},
			click() {

			},
			clickMore() {
				uni.switchTab({
					url: "/pages/products/products"
				})
			},
			clickItem(row) {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${row.id}`
				})
			}
		},
	}
</script>

<style>
	/* page {
		background-color: rgb(240, 242, 244);
	} */
</style>

<style lang="scss" scoped>
	.container{
		background:#eceef3;
	}
	.content{
	  margin: 10px 20px;
	  background:#fff;
	  border-radius: 10px;
	}

	.img-wrap {
		padding-top: 10px;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		// background: #fafcfd;
		height: 200px;
	}
</style>
