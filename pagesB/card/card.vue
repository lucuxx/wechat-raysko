<template>
  <view class="container">
    <u-navbar
      leftText=""
      :safeAreaInsetTop="true"
      :placeholder="true"
      bgColor="#6083f7"
      fixed
    >
      <view class="u-nav-slot" slot="left">
        <u-icon name="home" size="20" @tap="handleHome"></u-icon>
      </view>

      <view slot="center" style="color: #fff"></view>
    </u-navbar>
    <view class="header"> </view>

    <view class="sction">
      <u--text
        text="联系我"
        lineHeight="40px"
        margin="6px 0 10px 14px"
      ></u--text>
      <u-cell-group :border="false">
        <u-cell
          :title="userInfo.mobile"
          :isLink="true"
          :border="false"
          @click="handleOpenPhone"
        >
          <u-icon slot="icon" name="phone" size="20"></u-icon>
        </u-cell>
        <u-cell
          :title="userInfo.email"
          :isLink="true"
          :border="false"
          @click="handleCopyEmail"
        >
          <u-icon slot="icon" name="email" size="20"></u-icon>
        </u-cell>
        <u-cell :isLink="true" :border="false" @click="getSetting">
          <div slot="title">
            {{ userInfo.workhome }}
          </div>
          <u-icon slot="icon" name="map" size="20"></u-icon>
        </u-cell>
      </u-cell-group>
    </view>
    <view class="content u-border">
      <view class="content-top">
        <view>
          <u--text text="深圳睿思科信息技术有限公司" type="info"></u--text>
          <u-gap height="10" bgColor="rgba(0,0,0,0)"></u-gap>

          <u--text
            :text="userInfo.nickName"
            size="20"
            bold
            margin="10px 0 0 0"
          ></u--text>
          <u--text :text="userInfo.zhiwei" type="info"></u--text>
        </view>
        <view>
          <u--image
            :src="userInfo.avatar"
            width="80px"
            height="80px"
            shape="square"
            radius="10"
            :lazy-load="true"
          ></u--image>
        </view>
      </view>
      <!-- <u-line></u-line> -->
      <u-cell-group>
        <u-cell
          title="我的名片"
          :arrow="false"
          :border="false"
          @click="show = true"
        >
          <u--image
            slot="right-icon"
            :src="userInfo.imgCode"
            height="30px"
            width="30px"
            shape="circle"
          ></u--image>
        </u-cell>
      </u-cell-group>
    </view>
    <view class="footer">
      <ClFootBar @click="handleLeftBtn" @buttonClick="handleAdd"></ClFootBar>
    </view>

    <u-overlay :show="show" :opacity="0.8" @click="show = false">
      <view class="overlay-warp">
        <view>
          <u--text text="深圳睿思科信息技术有限公司" type="info"></u--text>

          <u--text
            :text="userInfo.nickName"
            size="20"
            bold
            margin="10px 0 0 0"
          ></u--text>
          <u--text :text="userInfo.zhiwei" type="info"></u--text>
        </view>
        <!-- <u-gap height="10" bgColor="rgba(0,0,0,0)"></u-gap> -->

        <u--image
          :src="userInfo.imgCode"
          width="200px"
          height="200px"
          shape="square"
          radius="10"
          :lazy-load="true"
        ></u--image>
      </view>

      <u-gap height="15" bgColor="rgba(0,0,0,0)"></u-gap>
      <div style="padding: 0 20px">
        <u-row gutter="20" justify="space-between">
          <u-col span="6">
            <u-button @click="saveImg" type="primary">保存到相册</u-button>
          </u-col>
          <u-col span="6">
            <u-button @click="show = false" :plain="true">取消</u-button>
          </u-col>
        </u-row>
      </div>
    </u-overlay>
  </view>
</template>

<script>
import { fetchCardInfo } from "@/apis/modules/card.js";
import ClFootBar from "@/components/cl-footbar/cl-footbar.vue";
export default {
  components: {
    ClFootBar,
  },
  data() {
    return {
      userInfo: {
        nickName: "", //昵称
        lastName: "", //姓氏
        firstName: "", //名字
        mobile: "", //手机号
        weixinname: "", //微信号
        company: "深圳睿思科信息技术有限公司", //公司
        zhiwei: "", //职位
        workhome: "", //工作地址街道
        email: "", //电子邮件
        imgCode: "",
        avatar: "",
      },
      share: {
        title: "名片",
        path: "", // 全局分享的路径，比如 首页
        imageUrl: "", // 全局分享的图片(可本地可网络)
      },
      show: false,
      id: "",
    };
  },
  onLoad(options) {
    wx.showShareMenu({
      withShareTicket: true,
      //设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
      menus: ["shareAppMessage", "shareTimeline"],
    });

    if (options.q) {
      let url = decodeURIComponent(options.q);
      let id = this.getParam(url, "id");
      this.id = id;
      // 后续处理scene
      this.getCardInfo(id);
    }

    if (options.id) {
      console.log("options.id：", options);
      this.getCardInfo(options.id);
    }
  },

  onShareAppMessage(res) {
    return {
      title: this.share.title,
      path: this.share.path,
      // imageUrl: this.share.imageUrl,
      // path: '/page/user?id=123' // 路径，传递参数到指定页面。
    };
  },
  //2.分享到朋友圈
  onShareTimeline(res) {
    return {
      title: this.share.title,
      path: this.share.path,
      imageUrl: this.share.imageUrl,
    };
  },
  // created(){
  // 	this.getCardInfo(5)
  // },

  methods: {
    async getCardInfo(id) {
      const data = await fetchCardInfo({ id });
      this.userInfo.nickName = data.name;
      this.userInfo.mobile = data.telephone;
      this.userInfo.weixinname = data.wechatAccount;
      this.userInfo.zhiwei = data.position;
      this.userInfo.workhome = data.companyAddr;
      this.userInfo.email = data.mail;
      this.userInfo.imgCode = data.qrCode;
      this.userInfo.avatar = data.avatar;

      this.userInfo.lastName = data.name.slice(0, 1);
      this.userInfo.firstName = data.name.slice(1, data.name.length);

      console.log(this.userInfo);

      this.share.imageUrl = data.qrCode;
      this.share.path = `/pages/card/card?id=${data.id}`;
    },
    getParam(path, name) {
      var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
      if (reg.test(path)) return unescape(RegExp.$2.replace(/\+/g, " "));
      return "";
    },
    handleHome() {
      uni.switchTab({
        url: "/pages/home/home",
      });
    },
    handleLeftBtn() {
      uni.switchTab({
        url: "/pages/home/home",
      });
    },
    handleAdd() {
      const {
        nickName,
        lastName,
        firstName,
        mobile,
        weixinname,
        company,
        zhiwei,
        workhome,
        email,
        avatar,
      } = this.userInfo;
      uni.addPhoneContact({
        photoFilePath: "", //头像
        nickName: "" + nickName, //昵称
        lastName: "" + lastName, //
        // middleName: '',
        firstName: "" + firstName, //名字
        // remark: '', //备注
        mobilePhoneNumber: "" + mobile, //手机号
        // weChatNumber: '', //微信号
        organization: "" + company, //公司
        title: "" + zhiwei, //职位
        // workPhoneNumber: '' + mobile, //工作电话
        workAddressStreet: "" + workhome, //工作地址街道
        email: "" + email, //电子邮件
        success: function () {
          //console.log('success');
        },
        fail: function (err) {
          if (err.errMsg === "addPhoneContact:fail auth deny") {
            //没权限
            uni.showModal({
              title: "“APP”想访问您的手机通讯录",
              content:
                "为了快捷的存入手机号到您的通讯录中， 需要开启APP的手机通讯录权限。",
              success: function (res) {
                if (res.confirm) {
                  uni.openSetting({
                    success(res) {
                      console.log(res.authSetting);
                    },
                  });
                } else if (res.cancel) {
                  console.log("用户点击取消");
                }
              },
            });
          }
        },
      });
    },
    //点击保存
    saveImg() {
      let that = this;
      // 向用户发起授权请求
      uni.authorize({
        scope: "scope.writePhotosAlbum",
        success: () => {
          // 已授权
          that.downLoadImg();
        },
        fail: () => {
          // 拒绝授权，获取当前设置
          uni.getSetting({
            success: (result) => {
              if (!result.authSetting["scope.writePhotosAlbum"]) {
                that.isAuth();
              }
            },
          });
        },
      });
    },
    downLoadImg() {
      //下载图片资源至本地，返回文件的本地临时路径
      uni.downloadFile({
        url: this.userInfo.imgCode,
        success: (res) => {
          if (res.statusCode === 200) {
            //保存图片至相册
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function () {
                uni.showToast({
                  title: "保存成功",
                  icon: "none",
                });
              },
              fail: function () {
                uni.showToast({
                  title: "保存失败，请稍后重试",
                  icon: "none",
                });
              },
            });
          }
        },
      });
    },
    //引导用户开启权限
    isAuth() {
      uni.showModal({
        content: "由于您还没有开启权限,无法进行保存,请点击确定允许授权",
        success: (res) => {
          if (res.confirm) {
            uni.openSetting({
              success: (result) => {
                console.log(result.authSetting);
              },
            });
          }
        },
      });
    },

    handleOpenPhone() {
      uni.makePhoneCall({
        phoneNumber: this.userInfo.mobile,
        complete(e) {
          console.log(e);
        },
      });
    },
    handleCopyEmail() {
      uni.setClipboardData(
        {
          data: this.userInfo.email, //要被复制的内容
          success: () => {
            //复制成功的回调函数
            uni.showToast({
              //提示
              title: `复制成功`,
              icon: "success",
            });
          },
        },
        true
      );
    },
    getLocation() {
      // wx.getLocation({
      //  type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      //  success (res) {
      //    const latitude = res.latitude
      //    const longitude = res.longitude
      //    wx.openLocation({
      //      latitude,
      //      longitude,
      //      scale: 18
      //    })
      //  }
      // })
      var that = this;
      var key = "BYYBZ-LRDWT-3VXXD-VJFQX-JSJU3-DXFRO";
      var address = this.userInfo.workhome;
      var company = this.userInfo.company;

      wx.getLocation({
        //定位类型 wgs84, gcj02
        type: "gcj02",
        success: function (res) {
          console.log("定位信息", res);
          //       var url = 'https://apis.map.qq.com/ws/geocoder/v1/?address='+address+`&key=${key}`;
          //       wx.request({
          //         url: url,
          //         success: function (rest) {
          //           var location = rest.data.result.location;
          // }
          // })

          wx.openLocation({
            address: address,
            name: company,
            longitude: 113.868179,
            latitude: 22.559708,
            scale: 18,
          });
        },
      });
    },

    // 校验是否授权定位
    getSetting() {
      wx.getSetting({
        success: (res) => {
          let authSetting = res.authSetting;
          if (
            authSetting["scope.userLocation"] ||
            authSetting["scope.userLocation"] == undefined
          ) {
            // 已授权 || 尚未进行操作
            this.getLocation();
          } else {
            // 曾拒绝授权，需主动前往进行授权
            wx.showModal({
              title: "您未开启地理位置授权",
              content: "是否前往授权？",
              success: (res) => {
                if (res.confirm) {
                  wx.openSetting({
                    success: (result) => {
                      this.getLocation();
                    },
                  });
                }
              },
            });
          }
        },
      });
    },
    //   // 获取位置信息
    //   getLocation() {
    //     wx.getLocation({
    //       altitude: 'altitude',
    //       highAccuracyExpireTime: 0,
    //       isHighAccuracy: true,
    //       type: 'type',
    //       success: (result) => {
    //         const {
    //           latitude,
    //           longitude
    //         } = result

    // 		console.log("result:",result)
    //         // 通过接口置换定位信息进行展示
    //         // app.http.request('/get-location', {
    //         //   latitude,
    //         //   longitude
    //         // }).then(res => {
    //         //   this.setData({
    //         //     address: res.data
    //         //   })
    //         // })
    //       },
    //       fail: (err) => {
    //         wx.showToast({
    //           icon: 'error',
    //           title: '太频繁啦～',
    //         })
    //       },
    //     })
    //   },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 100vh;
  width: 100vw;
}

.u-nav-slot {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border: 1px solid #d6d7d9;
  border-radius: 20px;
  padding: 4px 10px;
  background: #fff;
}

.header {
  width: 100%;
  height: 200px;
  background: $u-primary;
  border-bottom-left-radius: 400rpx 80rpx;
  border-bottom-right-radius: 400rpx 80rpx;
  display: flex;
  justify-content: center;
}

.sction {
  margin-top: 80px;
  margin-left: 20px;
  margin-right: 20px;
  background: #fff;
}

.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  /*兼容 IOS<11.2*/
  padding-bottom: env(safe-area-inset-bottom);
  /*兼容 IOS>11.2*/
}

.content {
  position: absolute;
  top: 140px;
  left: 20px;
  right: 20px;
  height: 180px;
  // padding: 10px 10px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);

  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
  }
}

.overlay-warp {
  margin-top: 200px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
