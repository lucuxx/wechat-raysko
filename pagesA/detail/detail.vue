<template>
	<view>
		<u-navbar leftText="返回" title="产品详情" :safeAreaInsetTop="true" :placeholder="true"  fixed>
			<view class="u-nav-slot" slot="left">
				<u-icon name="arrow-left" size="19" @tap="handleBack"></u-icon>
				<u-line direction="column" :hairline="false" length="16" margin="0 8px"></u-line>
				<u-icon name="home" size="20" @tap="handleHome"></u-icon>
			</view>
		</u-navbar>
		<view class="content">
			<!-- <u-gap height="20" bgColor="#fff"></u-gap> -->
			<u--text type="primary" text="超高频RFID手持终端设备"></u--text>
			<u-gap height="10" bgColor="#fff"></u-gap>
			<u-swiper :list="list1" height="200" indicator indicatorMode="dot" :autoplay="false" radius="0"></u-swiper>
			<u-gap height="10" bgColor="#fff"></u-gap>
			<u--text text="特点:"></u--text>
			<u-read-more ref="uReadMore" :toggle="true" :shadowStyle="shadowStyle" :showHeight="150" closeText="展开" openText="收起">
				<u-parse :content="content" @load="load"></u-parse>
			</u-read-more>
			<u-gap height="20" bgColor="#fff"></u-gap>
			<u--text text="性能参数:"></u--text>
			<u-gap height="10" bgColor="#fff"></u-gap>
			<view class="table">
			    
			    <view class="tr">
			        <view class="td">整机尺寸</view>
			        <view class="td1">188mm×83mm×22mm</view>
			    </view>
			    <view class="tr">
			        <view class="td">重量</view>
			        <view class="td1">350g</view>
			    </view>
			    <view class="tr">
			        <view class="td">显示屏</view>
			        <view class="td1">6.0寸IPS高清屏，HD分别率(720*1440)</view>
			    </view>
				<view class="tr">
				    <view class="td">整机尺寸</view>
				    <view class="td1">188mm×83mm×22mm</view>
				</view>
				<view class="tr">
				    <view class="td">重量</view>
				    <view class="td1">350g</view>
				</view>
				<view class="tr">
				    <view class="td">显示屏</view>
				    <view class="td1">6.0寸IPS高清屏，HD分别率(720*1440)</view>
				</view>
				<view class="tr">
				    <view class="td">整机尺寸</view>
				    <view class="td1">188mm×83mm×22mm</view>
				</view>
				<view class="tr">
				    <view class="td">重量</view>
				    <view class="td1">350g</view>
				</view>
				<view class="tr">
				    <view class="td">显示屏</view>
				    <view class="td1">6.0寸IPS高清屏，HD分别率(720*1440)</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	// import topImg3 from "@/static/uview/img/3.png"
	import topImg3 from "@/static/uview/img/banner3.jpeg"
	export default {
		data() {
			return {
				list1: [
					// 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					// 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					// 'https://cdn.uviewui.com/uview/swiper/swiper3.png'
					topImg3,

				],
				content:`
				RSK530手持终端是一款多功能手持终端，提供SDK，支持二次开发及技术支持。
				6.0寸高清显示屏 画质清晰；高通八核高性能处理器 保证应用运行流畅、无卡顿；
				1300万后置高清摄像头 提供高清照片及视频功能；

				RSK530手持终端选配功能
				数据采集功能 读取条码/二维码信息，对接后台，实现高效率盘点；
				居民身份证阅读功能 读取身份证芯片内身份证号、照片等全信息，支持人证对比；
				指纹采集功能 读取指纹信息，进行指纹比对
				NFC 支持非接触类智能卡应用的读写，可应用行业广泛；
				PSAM卡槽 一个psam卡槽，方便加密应用
				空间大 客供2.4G模块，ETC模块
				性能参数`,
				shadowStyle: {
					// #ifndef APP-NVUE
					backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
					// #endif
					// #ifdef APP-NVUE
					// nvue上不支持设置复杂的backgroundImage属性
					backgroundImage: "linear-gradient(to top, #fff, rgba(255, 255, 255, 0.5))",
					// #endif
					paddingTop: "100px",
					marginTop: "-100px"
				
				}

			}
		},
		methods: {
			handleBack() {
				console.log(123)
				uni.navigateBack({
					delta: 1
				});

			},
			handleHome() {
				uni.switchTab({
					url: "/pages/home/home"
				})
			},
			load(){
				 this.$refs.uReadMore.init();
			}

		}
	}
</script>

<style lang="scss" scoped>
	.u-nav-slot {
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: center;
		border: 1px solid #d6d7d9;
		border-radius: 20px;
		padding: 4px 10px;
	}

	.content {
		// margin-top: 60px;
		padding: 10px 20px;
	}
	.table {
		display: table;
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 10px;
		
	}
	
	.t-title {
		display: table-caption;
		vertical-align: middle;
		text-align: center;
	}
	
	.th {
		display: table-cell;
		font-weight: bold;
		height: 100%;
		text-align: center;
		vertical-align: middle;
		background-color:#d6d7d9;
		border:1px solid #d6d7d9;
	}
	.tr {
		display: table-row;
		text-align: left;
		border:1px solid #d6d7d9;
	}
	.td {
		display: table-cell;
		height: 100%;
		width:30%;
		text-align: left;
		vertical-align: middle;
		border:1px solid #d6d7d9;
		color:#606266;
		font-size: 14px;
		text-indent: 6px;
	}
	.td1 {
		display: table-cell;
		height: 100%;
		width:70%;
		text-align: left;
		vertical-align: middle;
		border:1px solid #d6d7d9;
		color:#606266;
		font-size: 14px;
		text-indent: 6px;
	}
	
</style>
