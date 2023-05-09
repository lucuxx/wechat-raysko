<template>
	<view class="uni-goods-nav">
		<!-- 底部占位 -->
		<view class="uni-tab__seat" />
		<view class="uni-tab__cart-box flex">
			<view class="flex uni-tab__cart-sub-left">
				<button open-type="share">
					<view class="flex uni-tab__cart-button-left uni-tab__shop-cart">
						<view class="uni-tab__icon">
							<u-icon name="share" size="24"></u-icon>
						</view>
						<text class="uni-tab__text">分享</text>
					</view>
				</button>
				<button @click="onClick">

					<view class="flex uni-tab__cart-button-left uni-tab__shop-cart" >
						<view class="uni-tab__icon">
							<u-icon name="home" size="24"></u-icon>
						</view>
						<text class="uni-tab__text">首页</text>
					</view>
				</button>
			</view>
			<view :class="{'uni-tab__right':fill}" class="flex uni-tab__cart-sub-right ">
				<view v-for="(item,index) in buttonGroup" :key="index"
					:style="{background:item.backgroundColor,color:item.color}" class="flex uni-tab__cart-button-right"
					@click="buttonClick(index,item)"><text :style="{color:item.color}"
						class="uni-tab__cart-button-right-text">{{ item.text }}</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * GoodsNav 商品导航
	 * @description 商品加入购物车、立即购买等
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=865
	 * @property {Array} options 组件参数
	 * @property {Array} buttonGroup 组件按钮组参数
	 * @property {Boolean} fill = [true | false] 组件按钮组参数
	 * @property {Boolean} stat 是否开启统计功能
	 * @event {Function} click 左侧点击事件
	 * @event {Function} buttonClick 右侧按钮组点击事件
	 * @example <uni-goods-nav :fill="true"  options="" buttonGroup="buttonGroup"  @click="" @buttonClick="" />
	 */
	export default {
		name: 'FooterBar',
		emits: ['click', 'buttonClick'],
		props: {

			fill: {
				type: Boolean,
				default: false
			},
			stat: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				// options: [{
				// 	icon: 'share',
				// 	text: '分享',
				// 	// infoBackgroundColor: '#007aff',

				// }, {
				// 	icon: 'home',
				// 	text: '我的公司',
				// }],
				buttonGroup: [{
					text: '保存到通讯录',
					backgroundColor: '#6083f7',
					color: '#fff'
				}],
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			},
			buttonClick(index, item) {
				if (uni.report && this.stat) {
					uni.report(item.text, item.text)
				}
				this.$emit('buttonClick', {
					index,
					content: item
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.flex {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	.uni-goods-nav {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
	}

	.uni-tab__cart-box {
		flex: 1;
		height: 50px;
		background-color: #fff;
		z-index: 900;
	}

	.uni-tab__cart-sub-left {
		padding: 0 5px;
	}

	.uni-tab__cart-sub-right {
		flex: 1;
	}

	.uni-tab__right {
		margin: 5px 0;
		margin-right: 10px;
		border-radius: 100px;
		overflow: hidden;
	}

	.uni-tab__cart-button-left {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		// flex: 1;
		position: relative;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 0 10px;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.uni-tab__icon {
		width: 18px;
		height: 18px;
	}

	.image {
		width: 18px;
		height: 18px;
	}

	.uni-tab__text {
		margin-top: 3px;
		font-size: 12px;
		color: #646566;
		padding-left:4px;
	}

	.uni-tab__cart-button-right {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		flex: 1;
		justify-content: center;
		align-items: center;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.uni-tab__cart-button-right-text {
		font-size: 14px;
		color: #fff;
	}

	.uni-tab__cart-button-right:active {
		opacity: 0.7;
	}

	.uni-tab__dot-box {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		position: absolute;
		right: -2px;
		top: 2px;
		justify-content: center;
		align-items: center;
		// width: 0;
		// height: 0;
	}

	.uni-tab__dot {
		// width: 30rpx;
		// height: 30rpx;
		padding: 0 4px;
		line-height: 15px;
		color: #ffffff;
		text-align: center;
		font-size: 12px;
		background-color: #ff0000;
		border-radius: 15px;
	}

	.uni-tab__dots {
		padding: 0 4px;
		// width: auto;
		border-radius: 15px;
	}

	button::after {
		border: none;
	}

	button {
		// line-height:30px;
		background-color: #fff;
		padding-left: 0;
		padding-right: 0;
		width: 70px;
	}
</style>