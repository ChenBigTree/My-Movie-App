<template>
  <div class="buy">
    <header>
      <van-row>
        <van-col span="5">
          <div class="header-icon-box fl">
            <van-icon class="header-icon" name="location-o" />
          </div>
          <div class="header-city">广州</div>
        </van-col>
        <van-col span="14" class="clearfix">
          <div class="header-center-box">
            <div class="header-center clearfix">
              <div class="fl" :class="{active:!isAct}" @click="pageSwitching('film')">电影</div>
              <div class="fr" :class="{active:isAct}" @click="pageSwitching('cinema')">影院</div>
            </div>
          </div>
        </van-col>
        <van-col span="5">
          <div class="header-icon-box fr">
            <van-icon class="header-icon" name="search" />
          </div>
        </van-col>
      </van-row>
    </header>
    <center>
      <div class="cen">
        <router-view></router-view>
      </div>
    </center>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("buyModule");

export default {
  name: "buy",
  created() {
    let hash = location.hash;
    if (hash == "#/cinema") {
      this.$store.isAct = !this.$store.isAct;
    }
  },
  computed: {
    ...mapState(["isAct"])
  },
  methods: {
    pageSwitching(name) {
      let t = "#/";
      let hash = location.hash;
      if (hash == t + name) {
        return;
      }
      this.$store.commit("buyModule/pageSwitching", name);
      this.$router.push({ name: name });
    }
  }
};
</script>

<style lang="less" scoped>
.buy {
  height: calc(~'100% - 24px');
  header {
    height: 45px;
    background: #1d202f;
    padding: 0 5px;
    // margin-top: -25px;
    position: fixed;
    top: 24px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    .header-icon-box {
      width: 24px;
      height: 24px;
      .header-icon {
        width: 24px;
        height: 24px;
        font-size: 24px;
        color: #ffffff;
        margin: 10.5px 0px;
      }
    }
    .header-city {
      float: left;
      font-size: 14px;
      line-height: 45px;
      color: #ffffff;
    }
    .header-center-box {
      height: 45px;
      position: relative;
      .header-center {
        width: 128px;
        height: 28px;
        border: #ff6700 1px solid;
        position: absolute;
        background: #f2f2f2;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: 7.5px auto;
        border-radius: 15px;
        div {
          float: left;
          font-size: 14px;
          position: absolute;
          width: 68px;
          text-align: center;
          border-radius: 15px;
          height: 28px;
          line-height: 28px;
          color: #1d202f;
        }
        > div:nth-child(1) {
          left: 0;
        }
        > div:nth-child(2) {
          right: 0;
        }
        .active {
          background: #ff6700;
          color: #ffffff;
        }
      }
    }
  }
  center {
    width: 100%;
    
    height: calc(~"100% - 46px");
    margin-top: 45px;
    .cen {
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
  }
}
</style>