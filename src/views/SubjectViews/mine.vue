<template>
  <div class="mine">
    <div
      class="m-bg"
      :style="{ backgroundImage: 'linear-gradient(to bottom, rgba(242,242,242, 0), rgba(242,242,242, .55) 40%, rgba(29,32,47, 1) 50%),url(http://img4.imgtn.bdimg.com/it/u=2853553659,1775735885&fm=26&gp=0.jpg)'}"
    >
      <div class="mine-title">
        <van-icon name="chat-o" dot class="fl" />
        <van-icon name="setting-o" class="fr" />
      </div>
      <div class="mine-body">
        <div class="mine-center">
          <div class="center-top clearfix">
            <p class="name" @click="Login">{{name}}</p>
            <div class="center-top-message clearfix">
              <div class="message-box">
                <div class="message-center-box">
                  <div class="message-smilbox">
                    <div class="smilbox left">
                      <van-icon class="smilbox-icon" name="coupon-o" />
                      <div class="name">电影票</div>
                    </div>
                  </div>
                  <div class="message-smilbox">
                    <div class="smilbox">
                      <van-icon class="smilbox-icon" name="shopping-cart-o" />
                      <div class="name">待付款</div>
                    </div>
                  </div>
                  <div class="message-smilbox">
                    <div class="smilbox top left">
                      <van-icon class="smilbox-icon" name="balance-pay" />
                      <div class="name">优惠卷</div>
                    </div>
                  </div>
                  <div class="message-smilbox">
                    <div class="smilbox top">
                      <van-icon class="smilbox-icon" name="tosend" />
                      <div class="name">上映提醒</div>
                    </div>
                  </div>
                </div>
                <div class="mess-img">
                  <div class="img-box">
                    <img
                      src="http://img0.imgtn.bdimg.com/it/u=1568980003,1397517797&fm=26&gp=0.jpg"
                      alt
                      class="auto-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mine-footer">
          <div class="mine-footers clearfix">
            <div class="icon-fl fl">
              <van-icon name="balance-o" />
            </div>
            <div class="title fl">我的钱包</div>
            <div class="icon-fr fr">
              <van-icon name="arrow" />
            </div>
          </div>
          <div class="mine-footers clearfix">
            <div class="icon-fl fl">
              <van-icon name="like-o" />
            </div>
            <div class="title fl">我的收藏</div>
            <div class="icon-fr fr">
              <van-icon name="arrow" />
            </div>
          </div>
          <div class="mine-footers clearfix">
            <div class="icon-fl fl">
              <van-icon name="vip-card-o" />
            </div>
            <div class="title fl">我的会员</div>
            <div class="icon-fr fr">
              <van-icon name="arrow" />
            </div>
          </div>
          <div class="mine-footers clearfix">
            <div class="icon-fl fl">
              <van-icon name="service-o" />
            </div>
            <div class="title fl">我的客服</div>
            <div class="icon-fr fr">
              <van-icon name="arrow" />
            </div>
          </div>
          <div class="mine-footers clearfix">
            <div class="icon-fl fl">
              <van-icon name="hotel-o" />
            </div>
            <div class="title fl">其他</div>
            <div class="icon-fr fr">
              <van-icon name="arrow" />
            </div>
          </div>
          <div class="mine-footers tcbox clearfix" @click="logout">
            <div class="tc fl">退出登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.mine {
  width: 100%;
  height: calc(~" 100% - 24px");
}

.mine-body {
  width: 100%;

  height: calc(~" 100% - 98px");
  overflow-y: auto;
  .mine-center {
    .center-top {
      padding: 15px;
      .name {
        font-size: 18px;
        color: #f4b603;
        margin-top: 13px;
        text-align: center;
      }
      .center-top-message {
        width: 100%;
        margin-top: 30px;

        .message-box {
          width: 100%;
          height: 300px;
          background: rgba(41, 45, 70, 0.7);
          box-shadow: 0 0 10px 5px RGB(29, 32, 47);
          border-radius: 15px;
          position: relative;
          .mess-img {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 90px;
            margin: -42px 0 0 -42px;
            .img-box {
              width: 80px;
              height: 80px;
              overflow: hidden;
              border-radius: 50%;
              border: 2px solid #fff;
            }
          }
          .message-center-box {
            position: absolute;
            width: calc(~"100% - 80px ");
            height: calc(~"100% - 80px ");
            top: 40px;
            left: 40px;
            .message-smilbox {
              width: calc(~"50% - 2px");
              height: calc(~"50% - 2px");
              float: left;
              border: 1px solid #f2f2f2;
              .smilbox {
                .smilbox-icon {
                  width: 100%;
                  font-size: 40px;
                  color: #f4b603;
                  text-align: center;
                }
              }
              &:nth-child(1),
              &:nth-child(4) {
                border: none;
              }
              &:nth-child(2) {
                border-right: none;
                border-top: none;
              }
              &:nth-child(3) {
                border-left: none;
                border-bottom: none;
              }
              .top {
                margin-top: 20px;
              }
              .left {
                margin-left: -15px;
              }
            }
          }
        }
      }
    }
  }
  .mine-footer {
    height: 200px;
    padding: 0 20px;
    .mine-footers {
      background: rgba(41, 45, 70, 0.7);
      margin-bottom: 10px;
      border-radius: 10px;
      padding: 20px 10px;
      font-size: 18px;
      color: #f4b603;
    }
    .title {
      font-size: 16px;
      color: RGB(244, 182, 3);
    }
    .icon-fl {
      margin-right: 10px;
    }
    .tcbox {
      padding: 10px 0;
    }
    .tc {
      width: 100%;
      text-align: center;
    }
  }
}
.mine-title {
  height: 24px;
  margin-top: 24px;
  padding: 0 15px;
  font-size: 24px;
  color: #f4b603;
}

.m-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
}

.van-dialog {
  border-radius: 15px;
}
</style>
<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("mineModule");

export default {
  name: "mine",
  computed: {
    ...mapState(["name"])
  },
  created() {},
  methods: {
    //退出登录
    logout() {
      function beforeClose(action, done) {
        if (action === "confirm") {
          setTimeout(done, 1000);
        } else {
          done();
        }
      }

      this.$dialog.confirm({
        title: "确定退出？",
        beforeClose
      });

      this.$store.commit("mineModule/changeName", "立即登录");
    },
    Login() {
      if (this.name == "立即登录") {
        this.$router.push('Login');
      } else {
        return false
      }
    }
  }
};
</script>
