<template>
  <div class="login">
    <header class="clearfix">
      <div class="login-header"></div>
      <div class="login-bar" @click="goBack">
        <van-nav-bar title left-text="返回" left-arrow />
      </div>
    </header>
    <center>
      <div class="logo-box"></div>
      <div class="massage-box">
        <van-cell-group>
          <van-field
            label="用户名"
            left-icon="manager"
            @input="loginInputFun"
            v-model="login.useName"
            placeholder="请输入用户名"
          />

          <van-field
            :type="pass.type"
            label="密码"
            left-icon="lock"
            v-model="login.password"
            placeholder="请输入密码"
            :right-icon="pass.eye"
            @click-right-icon="eyeFun"
            @input="loginInputFun"
          />
        </van-cell-group>
        <div class="zc-box">
          <div class="zc-btn">
            <van-button
              class="zc"
              color="#ff6700"
              :loading="isLoading"
              :disabled="iszcBtn"
              loading-text="登录中..."
              @click="loginClickFun"
              block
              type="info"
            >登录</van-button>
          </div>
        </div>

        <p class="dl">
          <router-link to="/register" class="dl-link">还没账号？点击注册</router-link>
        </p>
      </div>
      <div>
        <van-divider dashed>其他登录方式</van-divider>
        <div class="ll">
          <div class="qita-box clearfix">
            <div class="qita">
              <img src="../assets/QQ.png" alt />
              <p>QQ登录</p>
            </div>
            <div class="qita">
              <img src="../assets/weixin.png" alt />
              <p>微信登录</p>
            </div>
            <div class="qita">
              <img src="../assets/weibo.png" alt />
              <p>微博登录</p>
            </div>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("loginModule/");

export default {
  name: "login",
  computed: {
    ...mapState(["isLoading", "iszcBtn", "login", "pass"])
  },
  methods: {
    ...mapMutations(["loginInputFun", "eyeFun"]),
    //验证登录页面是否通过
    loginClickFun() {
      let selt = this;

      let get = JSON.parse(localStorage.getItem("registrationDatas"));

      this.$store.commit("loginModule/dlu", true);

      let time = Math.random() * 5 * 1000;

      setTimeout(function() {
        if (get.length == undefined) {
          selt.$toast({
            duration: 2000,
            message: "用户名不存在！请注册！！！"
          });
          return;
        }

        for (let i = 0; i < get.length; i++) {
          //判断用户名和密码是否正确
          if (
            selt.login.useName == get[i].name &&
            selt.login.password === get[i].pass
          ) {
            // 输入用户名密码匹配成功时提示
            selt.$toast({
              duration: 2000,
              message: "登录成功"
            });
            //跳转到首页
            selt.$router.push({ name: "home" });

            // 激活登录按钮
            selt.$store.commit("loginModule/dlu", false);

            selt.$store.commit("mineModule/changeName", selt.login.useName);
            return;
          }
        }
        //输入用户名密码匹配不成功时提示
        selt.$toast({
          duration: 2000,
          message: "用户名或密码有误，请重试..."
        });

        // 激活登录按钮
        selt.$store.commit("loginModule/dlu", false);
      }, time);
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../assets/bg4.jpg") no-repeat center center;
  background-size: cover;
  header {
    width: 100%;
    .van-nav-bar {
      box-shadow: 0px 0px 10px 2px RGBA(242, 242, 242);
      background: RGBA(242, 242, 242, 0.7);
    }
    .login-header {
      height: 24px;
      width: 100%;
    }
  }
  center {
    width: 100%;
    height: calc(~"100% - 70px");
    .logo-box {
      width: 100%;
      height: 200px;
    }
    .phone-btn {
      width: 2rem;
    }
    .van-cell-group {
      width: calc(~"90% - 15px");
      border-radius: 15px;
      padding: 10px;
      box-shadow: 0px 0px 10px 2px RGBA(242, 242, 242);
      background: RGBA(242, 242, 242, 0.7);
      .van-cell {
        background: none;
        color: #000;
      }
    }
    .van-field__control {
      color: #000;
    }

    .zc-box {
      margin: 20px 0 0 0;
      padding: 0 10px;
      position: relative;
      .ts {
        padding: 0px 0 15px;
        color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .zc-btn {
        width: 80%;
        margin-top: 31px;
        float: left;
        margin-left: calc(~"(100% - 80%) / 2");
      }
      .zc {
        border-radius: 15px;
      }
    }
    .dl {
      margin-top: 120px;
      .dl-link {
        color: #fff;
      }
    }
    .ll {
      width: calc(~"(100% )");
      height: 50px;
      .qita-box {
        padding-left: calc(~"(100% - 170px) / 2");
        .qita {
          width: 50px;
          height: 50px;
          float: left;
          margin-left: 10px;
          img {
            width: 32px;
            height: 32px;
          }
          p {
            color: #fff;
          }
        }
        .qita:nth-child(1) {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
