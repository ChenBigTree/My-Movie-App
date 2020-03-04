<template>
  <div class="register">
    <header class="clearfix">
      <div class="register-header"></div>
      <div class="register-bar"  @click="goBack">
        <van-nav-bar title left-text="返回" left-arrow @click-left="onClickLeft" />
      </div>
    </header>
    <center>
      <div class="logo-box"></div>
      <div class="massage-box">
        <van-cell-group>
          <van-field
            label="用户名"
            left-icon="manager"
            :placeholder="useName.hint"
            v-model="useName.result"
            @input="registerInput('useName')"
            :error="useName.isError"
          />

          <van-field
            :type="pass1.typt"
            v-model="pass1.result"
            label="密码"
            left-icon="lock"
            :placeholder="pass1.hint"
            :right-icon="pass1.eyeIcon"
            @click-right-icon="eyeFun('pass1')"
            @input="registerInput('pass1')"
            :error="pass1.isError"
          />

          <van-field
            :type="pass2.typt"
            v-model="pass2.result"
            label="确认密码"
            :placeholder="pass2.hint"
            :right-icon="pass2.eyeIcon"
            left-icon="lock"
            :error="pass2.isError"
            @click-right-icon="eyeFun('pass2')"
            @input="registerInput('pass2')"
          />

          <van-field
            :type="phone.typt"
            v-model="phone.result"
            label="手机号"
            left-icon="phone"
            :placeholder="phone.hint"
            :error="phone.isError"
            @input="registerInput('phone')"
          />

          <van-field
            center
            clearable
            left-icon="comment"
            label="短信验证码"
            v-model="yzm"
            @input="yzmfun(yzm)"
            placeholder="请输入短信验证码"
          >
            <van-button
              class="phone-btn"
              slot="button"
              size="small"
              type="primary"
              :disabled="phone.isDis "
              @click="verificationFun"
            >{{phone.num}}</van-button>
          </van-field>
        </van-cell-group>
        <div class="zc-box">
          <p class="ts">{{ts}}</p>
          <div class="zc-btn">
            <van-button
              class="zc"
              color="#ff6700"
              @click="registrationFun()"
              :loading="isLoading"
              loading-text="注册中..."
              :disabled="iszcBtn"
              block
              info
            >注册</van-button>
          </div>
        </div>
        <p class="dl">
          <router-link class="dl-link" to="/login">已有账号？点击登录</router-link>
        </p>
      </div>
    </center>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("registerModule/");

export default {
  name: "register",
  data() {
    return {
      yzm: ""
    };
  },
  computed: {
    ...mapState([
      "pass1",
      "pass2",
      "useName",
      "ts",
      "phone",
      "iszcBtn",
      "isLoading"
    ])
  },
  methods: {
    ...mapMutations([
      "onClickLeft",
      "eyeFun",
      "registerFocus",
      "registerInput",
      "registrationFun",
      // 短信验证
      "verificationFun"
      // state.useName.result
    ]),
    yzmfun(a) {
      this.$store.commit("registerModule/yzmfun", a);
    },
    registrationFun() {
      let selt = this;
      this.$store.commit("registerModule/registrationFun", selt);
    },
    
    //短信验证
    verificationFun() {
      let selt = this;

      if (this.phone.reg.test(this.phone.result)) {
          this.phone.isDis = true;
          //倒计时
          let num = 5
          let set = setInterval(function () {
              num--
              selt.phone.num = num
              if (num === 0) {
                  selt.phone.num = '发送验证码';
                  selt.phone.isDis = false;
                  clearInterval(set)
                  selt.$notify({ message: '验证码：6666', duration: 20000 })
                  return false
              }
          }, 1000)
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  }
};
</script>

<style lang="less" scoped>
.register {
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
    .register-header {
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
  }
}
</style>
