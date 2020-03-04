<template>
  <div class="ticket clearfix">
    <header class="fl">
      <div class="left fl" @click="goback">
        <van-icon name="arrow-left" />
      </div>
      <div class="right fl">万达电影院</div>
    </header>
    <center>
      <div class="movie-top">
        <div class="top1 clearfix">
          <div class="top1-fl fl">
            <div class="name oneTextOverflow">{{this.film.name}}</div>
            <div class="time oneTextOverflow">今天（周二） 17：35</div>
          </div>
        </div>
      </div>
      <div class="movie-bottom">
        <div class="bottom-head">1号MAX厅</div>
        <!-- 座位 -->
        <div class="seat-box">
          <div class="seatColumn">
            <span v-for="(item ,indexssss) in nums" :key="indexssss">{{item.key}}</span>
          </div>
          <div class="seat-chairbox clearfix">
            <div class="row clearfix" v-for="(row,index) in seatBox" :key="index">
              <div
                :class="seat.className"
                v-for="(seat,index2) in row"
                :key="index2"
                @click="desetope(seat,index,index2)"
              ></div>
            </div>
          </div>
          <div class="seat-instructions clearfix">
            <div class="instructions-box">
              <span class="chair"></span>
              <div>不可选</div>
            </div>
            <div class="instructions-box">
              <span class="nochoose-chair"></span>
              <div>已选</div>
            </div>
            <div class="instructions-box">
              <span class="choose-chair"></span>
              <div>可选</div>
            </div>
          </div>
        </div>
      </div>
      <div class="movie-footer clearfix">
        <!-- 已选座位 -->
        <div class="top2 fl">
          <p>已选座位：</p>
          <div class="num-box clearfix">
            <div
              class="num fl"
              v-for="(item,index) in this.seatSubscriptBox.seatSubscript"
              :key="index"
            >
              <span
                class="title"
              >{{item.row+1>=10?item.row+1:'0' + (item.row+1)}}排{{item.col+1>=10?item.col+1:"0" + (item.col+1)}}座</span>
            </div>
          </div>
        </div>
        <div class="btn fl" @click="submitOrder">提交订单</div>
      </div>
    </center>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("ticketModule");
export default {
  name: "ticket",
  computed: {
    ...mapState(["nums", "seatBox", "seatSubscriptBox", "film"])
  },
  methods: {
    ...mapMutations(["changSeat", "delData", "loadingFun"]),

    //返回上一层
    goback() {
      this.$router.go(-1);
    },

    //页面加载时
    loadingFun() {
      this.$toast.loading({
        duration: 0,
        message: "提交订单中..."
      });
    },

    //点击添加座位
    desetope(seat, index, index2) {
      //不可选
      if (seat.className == "seat chair") {
        return this.$toast("座位已被选，请换个");
      }
      //激活已选椅子的颜色
      if (seat.className == "seat") {
        //判断已选位置的数据是否超过四位
        if (this.seatSubscriptBox.seatSubscript.length > 3) {
          return this.$toast("最多四个");
        }

        // console.log("已选：", this.seatSubscriptBox.length + 1);

        //激活已选的椅子
        this.seatBox[index][index2].className = "seat nochoose-chair";

        //存好已选的坐标
        let seatData = {
          row: index,
          col: index2
        };

        this.seatSubscriptBox.seatSubscript.push(seatData);

        // console.log("添加位置");
      } else if (seat.className == "seat nochoose-chair") {
        //取消已选的座位
        // console.log("取消位置");

        this.seatSubscriptBox.seatSubscript.forEach((i, k) => {
          //判断所选的下标是否存在已选座位的数据里
          if (i.row == index && i.col == index2) {
            //存在则取消座位激活状态和删除已选座位数据
            this.seatBox[index][index2].className = "seat";
            this.seatSubscriptBox.seatSubscript.splice(k, 1);
          }
        });
      }
    },

    //点击提交订单
    submitOrder() {
      this.loadingFun();

      let time = Math.ceil(Math.random() * 5000);
      if (this.seatSubscriptBox.seatSubscript.length != 0) {
        for (let a = 0; a < this.seatSubscriptBox.seatSubscript.length; a++) {
          for (let b = 0; b < this.seatBox.length; b++) {
            for (let c = 0; c < this.seatBox[b].length; c++) {
              if (
                this.seatSubscriptBox.seatSubscript[a].row == b &&
                this.seatSubscriptBox.seatSubscript[a].col == c
              ) {
                this.seatBox[b][c].className = "seat chair";
              }
            }
          }
        }
        setTimeout(() => {
          this.$toast.clear();
          //跳转到购买成功页面
          this.$router.push({ name: "buyResults" });
          // this.$store.commit("ticketModule/delData", []);
        }, time);
      } else {
        this.$toast.clear();
        this.$toast("座位为空，请选座位在提交");
      }
    }
  },
  created() {
    console.log("电影id", this.film.id);
    //获取路由id
    let hash = location.hash.split("/")[2];

    if (hash != this.seatSubscriptBox.id) {
      for (let b = 0; b < this.seatBox.length; b++) {
        for (let c = 0; c < this.seatBox[b].length; c++) {
          this.seatBox[b][c].className = "seat";
        }
      }
    }
    //获取数据
    this.axios({
      method: "GET",
      url: "https://douban.uieee.com/v2/movie/subject/" + hash,
      async: false
    }).then(data => {
      console.log("电影详情", data);
      let filmName = data.data.title;
      let filmImg = data.data.images.large;

      this.$store.commit("ticketModule/changeFilmData", {
        id: this.film.id,
        name: filmName,
        img: filmImg
      });
    });
  }
};
</script>

<style lang="less" scoped>
.ticket {
  width: 100%;
  height: 100%;
  background: RGB(25, 27, 40);
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
    width: calc(~"100% - 48px ");
    color: #fefefe;
    font-size: 18px;
    text-align: center;
  }
}
center {
  width: 100%;
  height: calc(~"100% - 48px");
  float: left;
  background: #191b28;
  color: #fefefe;
  .movie-top {
    padding: 10px 5px 0 5px;
    width: calc(~"100% - 10px");
    border-bottom: 1px solid #999;
    .top1 {
      width: 100%;
      height: 60px;
      .top1-fl {
        width: calc(~"100% - 160px");
        height: 100%;
        padding: 0 10px;
        text-align: left;
      }
      .name {
        font-weight: bold;
        font-size: 18px;
        padding: 5px 0;
      }
      .time {
        font-size: 12px;
        color: #999;
      }
    }
  }

  .act {
    background: #ff6700;
  }
  .movie-bottom {
    width: 100%;
    height: 415px;
    .bottom-head {
      width: 150px;
      height: 25px;
      background: #bfbfbf;
      border-radius: 0 0 50% 50%;
      font-size: 14px;
      color: #fff;
    }

    .seat-box {
      width: 310px;
      margin: 35px -10px 0 15px;
      .seatColumn {
        width: 25px;
        background: #bfbfbf;
        position: fixed;
        margin-top: -10px;
        left: 10px;
        border-radius: 10px;
        span {
          width: 26px;
          text-align: center;
          height: 26px;
          display: block;
          font-size: 14px;
          margin-bottom: 5px;
          color: #fefefe;
        }
        span:first-child {
          margin-top: 15px;
        }
        span:last-child {
          margin-bottom: 15px;
        }
      }
      .row {
        margin-left: 5px;
        .seat {
          width: 25px;
          height: 27px;
          background: url("../assets/choose-chair.png") no-repeat center center;
          background-size: cover;
          float: left;
          margin: 0 5px 5px 0;
        }
        .nochoose-chair {
          background: url("../assets/nochoose-chair.png") no-repeat center
            center;
          background-size: cover;
        }
        .chair {
          background: url("../assets/chair.png") no-repeat center center;
          background-size: cover;
        }
        .seat:last-child {
          margin-right: 0;
        }
      }
      .row:first-child {
        margin-left: 35px;
      }
      .row:nth-child(2) {
        margin-left: 35px;
      }
      .row:nth-child(3) {
        margin-top: 32px;
      }
      .seat-instructions {
        width: 100%;
        height: 25px;
        margin-top: 7px;
        .instructions-box {
          width: 80px;
          float: left;
          span {
            width: 25px;
            height: 25px;
            display: block;
            float: left;
            margin-right: 5px;
          }

          div {
            line-height: 25px;
            text-align: left;
          }
        }
        .seat:last-child {
          margin-right: 0;
        }
        .instructions-box:first-child {
          margin-left: calc(~"(100% - 240px) / 2");
        }
      }

      .nochoose-chair {
        background: url("../assets/nochoose-chair.png") no-repeat center center;
        background-size: cover;
      }
      .chair {
        background: url("../assets/chair.png") no-repeat center center;
        background-size: cover;
      }
      .choose-chair {
        background: url("../assets/choose-chair.png") no-repeat center center;
        background-size: cover;
      }
    }
  }
  .movie-footer {
    width: 100%;
    height: calc(~"100% - 511px + 25px");
    background: #1f2438;
    position: relative;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    .btn {
      width: 85%;
      height: 40px;
      line-height: 40px;
      background: #ff6700;
      font-size: 16px;
      color: #fff;
      border-radius: 20px;
      margin-left: 7.5%;
      position: absolute;
      bottom: 10px;
    }
    .top2 {
      width: calc(~"100% - 10px");
      height: 20px;
      padding: 5px;
      margin-top: 5px;
      p {
        // width: 100%;
        font-size: 16px;
        padding: 0 0 10px 10px;
        text-align: left;
      }
      .num-box {
        width: 100%;
      }
      .num {
        width: calc(~"(100% - 15px) / 4");
        height: 31px;
        line-height: 30px;
        font-size: 14px;
        color: #fff;
        background: #aaaeeb;
        margin-right: 5px;
        span {
          text-align: left;
        }
        i {
          width: 20px;
          height: 20px;
          background: url("../assets/wrong.png") no-repeat center center;
          background-size: 20px 20px;
          float: right;
          margin-top: 5px;
        }
      }
      .num:nth-child(4) {
        margin-right: 0;
      }
    }
  }
}
</style>