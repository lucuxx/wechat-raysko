<template>
	<view >
		<u-row justify="center">
			<view class="top-wrap">
				<u--image src="https://www.raysko.com/_nuxt/img/img-c.bbae1a6.jpeg" mode="heightFix" :height="200" lazy-load></u--image>
			</view>
		</u-row>
		<view class="container">
			
		<u-divider text="关于我们" textPosition="left"></u-divider>
		<u-read-more :toggle="true" :shadowStyle="shadowStyle" :showHeight="150" closeText="展开" openText="收起">
			<rich-text :nodes="content"></rich-text>
		</u-read-more>

		<u-divider text="联系我们" textPosition="left"></u-divider>
		<!-- <u-collapse :border="false">
			<u-collapse-item title="地址" icon="map-fill">
				<text class="u-collapse-content">深圳市宝安区兴业路2005号广兴源互联网创意园C栋509</text>
			</u-collapse-item>
			<u-collapse-item title="联系方式" icon="phone-fill">
				<text class="u-collapse-content">13798209586 熊先生</text>
			</u-collapse-item>
			<u-collapse-item title="邮箱"  icon="email-fill">
				<text class="u-collapse-content">xiongpeng0809@raysko.cn</text>
			</u-collapse-item>
		</u-collapse> -->
		<u-cell-group :border="false">
			<u-cell icon="map" title="深圳市宝安区兴业路2005号广兴源互联网创意园C栋509" :arrow="false" :border="false">
				<!-- <u-icon slot="right-icon" name="map" size="20"></u-icon> -->
			</u-cell>
			<u-cell icon="phone" title="13798209586" :arrow="false" :border="false" >
				<!-- <u-icon slot="right-icon" name="phone" size="20"></u-icon> -->
			</u-cell>
			<u-cell icon="email" title="xiongp@raysko.com" :arrow="false" :border="false">
				<!-- <u-icon slot="right-icon" name="email" size="20"></u-icon> -->
			</u-cell>
		</u-cell-group>
		<u-gap height="30" bgColor="#fff"></u-gap>
		</view>
	</view>
</template>

<script>
	// import topImg from "@/static/uview/img/inside-banner1.jpeg"
	export default {
		data() {
			return {
				// topImg,
				content: "深圳睿思科信息技术有限公司为国家级高新技术企业和双软企业，手持机厂家，专注于移动手持终端、手持工业终端、身份证核验终端、RFID超高频终端、手持数据采集器、刷脸支付设备、物流扫描巴枪、移动警务通、访客机等行业移动应用设备及整体解决方案的研发、生产、销售和服务，是中国移动行业应用开发先驱和市场领跑者。我们有着十五年的行为背景和开发经验。业务覆盖北京、上海、广州、深圳、东莞、中山、珠海、江苏等地。研究成果已成功应用于国家电网，支付宝移动支付和交警检查等大型项目。同时，它为物流和快递，零售连锁，医疗卫生，金融POS，电力，政府和公用事业等行业提供合适的移动应用软件和硬件集成解决方案。",
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
		methods:{
			handleToCard(){
				uni.navigateTo({
					url: `/pages/card/card`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 10px 20px;
	}

	.u-page__item {
		color: $u-primary;
		font-size: 14px;

	}

	.top-wrap {
		overflow: hidden;
		width:100vw;
	}
</style>
