<template>
  <div class="buyResults">
    <div
      class="background"
      :style="{backgroundImage: 'linear-gradient(to bottom, rgba(242,242,242, 0), rgba(242,242,242, .55) 40%, rgba(29,32,47, 1) 50%),url(https://images.weserv.nl/?url=' + this.filmData.img +')'}"
    ></div>
    <header class="fl">
      <div class="left fl" @click="goback">
        <van-icon name="arrow-left" />
      </div>
      <div class="right fl">万达电影院</div>
    </header>
    <center>
      <div class="buyResults-result">
        <div class="c1 fl">
          <div class="c1-fl fl">
            <div class="file-name oneTextOverflow">{{this.filmData.name}}</div>
            <div class="time">今天04-28 18:00~20:57</div>
            <div class="location oneTextOverflow">广州白云区万达电影院 6号厅</div>
            <div class="seact-box clearfix" >
              <div
                class="seact fl"
                v-for="(item,index) in seateData" :key="index"
              >{{item.row+1>=10?item.row+1:'0' + (item.row+1)}}排{{item.col+1>=10?item.col+1:"0" + (item.col+1)}}座</div>
            </div>
          </div>
          <div class="c1-fr fr">
            <img :src=" 'https://images.weserv.nl/?url='+this.filmData.img " class="auto-img" />
          </div>
        </div>
        <div class="c2 fl"></div>
        <div class="c3 fl">
          <p>取电影票</p>
          <p>在取票机输入取票码取电影票</p>
          <div class="QR-code"></div>
          <p class="num">2张电影票</p>
          <div class="cdkey">取件码：9009 0000</div>
        </div>
      </div>
      <div class="btn">保存</div>
    </center>
  </div>
</template>


<style lang="less" scoped>
.buyResults {
  width: 100%;
  height: 100%;
  position: relative;
}
.background {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;
  z-index: -1;
  filter: blur(8px);
}
header {
  width: calc(~"100% - 40px");
  height: 24px;
  margin-top: 24px;
  padding: 0 20px;
  .left {
    width: 24px;
    height: 24px;
    font-size: 24px;
    color: aliceblue;
  }
  .right {
    width: calc(~"100% - 48px");
    color: #fefefe;
    font-size: 18px;
    text-align: center;
  }
}
center {
  width: 100%;
  height: calc(~"100% - 48px");
  float: left;
  position: relative;
  .buyResults-result {
    width: 85%;
    height: 499px;
    position: absolute;
    left: 7.5%;
    margin-top: 20px;
    background: radial-gradient(
      transparent 0px,
      transparent 10px,
      white 10px,
      white
    );
    background-size: 21px 21px;
    background-position: -10px -15px;
  }
  .c1 {
    width: calc(~"100% - 30px");
    height: 147px;
    background: #fff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding: 25px 15px;
    .c1-fr {
      width: 120px;
      height: 150px;
      background: #ddd;
      border-radius: 10px;
    }
    .c1-fl {
      width: calc(~"100% - 130px");
      height: 100%;
      text-align: left;
      .file-name {
        font-size: 18px;
        font-weight: bold;
        margin: 15px 0 10px 0;
      }
      .location {
        margin-top: 8px;
      }
      .time {
        color: red;
      }
      .seact {
        padding: 8px 10px 0;
      }
    }
  }
  .c2 {
    width: 294px;
    height: 22px;
    background: #fff;
    margin: -1px 0 0 11px;
  }
  .c3 {
    width: calc(~"100% - 40px");
    height: 263px;
    margin-top: -2px;
    background: #fff;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    padding: 10px 20px 0;
    p:nth-child(1) {
      font-size: 18px;
      font-weight: bold;
      text-align: left;
    }
    p:nth-child(2) {
      font-size: 12px;
      text-align: left;
      color: #999;
      padding: 10px 0;
    }
    .num {
      font-size: 12px;
      color: #333;
      padding: 7px 0;
    }
    .QR-code {
      width: 130px;
      height: 130px;
      background: url(../assets/微信截图_20200301155909.png)no-repeat center center;
      background-size: 130px 130px;
      text-align: center;
    }
    .cdkey {
      border-radius: 10px;
      padding: 3px 40px;
      border: 1px solid #333;
      display: inline-block;
    }
  }
  .btn {
    width: 90%;
    padding: 10px 0;
    font-size: 16px;
    border-radius: 20px;
    background: #ff6700;
    color: #fefefe;
    position: fixed;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>
<script>
export default {
  name: "buyResults",
  data() {
    return {
      filmData: "",
      seateData: ""
    };
  },
  created() {
    // 获取电影信息
    let film = this.$store.state.ticketModule.film;
    this.filmData = film;

    //获取所选位置
    let seate = this.$store.state.ticketModule.seatSubscriptBox;
    this.seateData = seate.seatSubscript;
  },
  methods: {
    //返回上一层
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
