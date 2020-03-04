<template>
  <div class="home">
    <header>
      <van-row>
        <van-col span="5">
          <div class="header-icon-box fl">
            <van-icon class="header-icon" name="location-o" />
          </div>
          <div class="header-city">广州</div>
        </van-col>
        <van-col span="16" class="clearfix">
          <div class="header-center-box">
            <div class="header-center clearfix">
              <div class="search-icon"></div>
              <input type="text" class="search" />
            </div>
          </div>
        </van-col>
        <van-col span="3">
          <div class="header-icon-box fr">
            <div class="header-ewm"></div>
          </div>
        </van-col>
      </van-row>
    </header>
    <center>
      <div class="lb">
        <van-swipe :width="250">
          <van-swipe-item>
            <div class="lb-img">
              <img
                src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg"
                class="auto-img"
                alt
              />
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="lb-img">
              <img
                src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p510861873.jpg"
                class="auto-img"
                alt
              />
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="lb-img">
              <img
                src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2559011361.jpg"
                class="auto-img"
                alt
              />
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="lb-img">
              <img
                src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg"
                class="auto-img"
                alt
              />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="classify-box">
        <div class="classify">
          <span class="icon1"></span>
          <p>分类</p>
        </div>
        <div class="film">
          <span class="icon2"></span>
          <p>每日影片</p>
        </div>
        <div class="imaginedFigure">
          <span class="icon3"></span>
          <p>影人</p>
        </div>
      </div>
      <!-- 热映影片 -->
      <div class="onNowfilm">
        <div class="onNowfilm-top clearfix">
          <span class="fl">热映影片</span>
          <span class="fr gd">更多></span>
        </div>
        <div class="onNowfilm-bottom clearfix">
          <div class="onNowfilm-bottom-box">
            <div
              class="onNowfilm-box"
              v-for="(item,index) in useNowFile"
              :key="index"
              :data-id="item.id"
            >
              <div class="onNowfilm-img-box" @click="detailPagesFun({name:'detailPages',params:{id:item.id}})">
                <div class="onNowfilm-num">{{item.collectCount}}</div>
                <img :src="'https://images.weserv.nl/?url='+item.images.medium" class="auto-img" />
              </div>
              <div class="onNowfilm-name oneTextOverflow">{{item.title}}</div>
              <div class="onNowfilm-buy" @click="goTicket({name:'ticket',params:{id:item.id}})">购买</div>
            </div>
            <div class="onNowfilm-box ckxd" @click="ckqbFun">
              <p>查看全部</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 即将上映 -->
      <div class="onNowfilm">
        <div class="onNowfilm-top clearfix">
          <span class="fl">即将上映</span>
          <span class="fr gd">更多></span>
        </div>
        <div class="onNowfilm-bottom clearfix">
          <div
            class="onNowfilm-bottom-box"
            v-for="(item,index) in useNextFile"
            :key="index"
            :data-id="item.id"
            @click="detailPagesFun({name:'detailPages',params:{id:item.id}})"
          >
            <div class="onNowfilm-box">
              <div class="onNowfilm-img-box">
                <div class="onNowfilm-num">{{item.collectCount}}想看</div>
                <img :src="'https://images.weserv.nl/?url='+item.images.medium" class="auto-img" />
              </div>
              <div class="onNowfilm-name oneTextOverflow">{{item.title}}</div>
              <div class="onNowfilm">{{item.pubdates[0]}}上映</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 本周排行榜 -->
      <div class="onNowfilm">
        <div class="viewFileFun">
          <div class="onNowfilm-top clearfix">
            <span class="fl">本周排行榜</span>
          </div>
          <div class="view-box clearfix">
            <div
              class="view"
              v-for="(item,index) in viewFileData"
              :key="index"
              :id="item.subject.id"
              @click="detailPagesFun({name:'detailPages',params:{id:item.subject.id}})"
            >
              <div class="img-box">
                <img
                  :src="'https://images.weserv.nl/?url='+item.subject.images.medium"
                  class="auto-img"
                />
              </div>
              <div class="pf">TP{{item.rank}}</div>
              <div class="view-center">
                <div class="filmname oneTextOverflow">{{item.subject.title}}</div>
                <div class="name" style="height:20px;">
                  <div class="detail-nr-pfs">
                    <div class="xx-box">
                      <div
                        class="xx-noact"
                        :style="{ width: item.subject.rating.average * 10 + 'px'}"
                      >
                        <span>
                          <van-icon name="star" />
                        </span>
                        <span>
                          <van-icon name="star" />
                        </span>
                        <span>
                          <van-icon name="star" />
                        </span>
                        <span>
                          <van-icon name="star" />
                        </span>
                        <span>
                          <van-icon name="star" />
                        </span>
                      </div>
                      <div class="xx-act fl">
                        <span>
                          <van-icon name="star-o" />
                        </span>
                        <span>
                          <van-icon name="star-o" />
                        </span>
                        <span>
                          <van-icon name="star-o" />
                        </span>
                        <span>
                          <van-icon name="star-o" />
                        </span>
                        <span>
                          <van-icon name="star-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="name1 oneTextOverflow">导演：{{item.subject.directorsCount}}</div>
                <div class="name1 oneTextOverflow">{{item.subject.castsData}}</div>
              </div>
            </div>
            <div class="xian"></div>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("homeModule");

export default {
  name: "home",
  computed: {
    ...mapState([
      "onNowFileData",
      "useNowFile",
      "useNextFile",
      "onNextFileData",
      "viewFileData"
    ])
  },
  methods: {
    ...mapMutations([
      "onNowFileDataFun",
      "useNowFileDataFun",
      "onNextFileDataFun",
      "useNextFileDataFun",
      "viewFileDataFun"
    ]),

    //获取正在上映电影数据
    onNowFileFun() {
      let self = this;
      let useNowFile = null;

      this.$toast.loading({
        duration: 0,
        message: "加载中..."
      });

      if (this.onNowFileData.length == 0) {
        //获取正在上映电影
        // console.log("未有数据，请求数据");
        this.axios({
          method: "GET",
          url: "https://douban.uieee.com/v2/movie/in_theaters",
          params: {
            start: 0,
            count: 20,
            city: "广州"
          }
        })
          .then(data => {
            data.data.subjects.forEach(v => {
              //合并作者
              v.castsData = "";
              v.casts.forEach(item => {
                v.castsData += item.name + " / ";
              });
              v.castsData = v.castsData.slice(0, -3);

              //合并电影类型
              v.genresData = v.genres.join(" / ");

              //处理播放量
              v.collectCount = Math.floor(v.collect_count / 1000) / 10 + "W";
            });

            this.$store.commit(
              "homeModule/onNowFileDataFun",
              data.data.subjects
            );

            useNowFile = this.onNowFileData.slice(0, 10);
            this.$store.commit("homeModule/useNowFileDataFun", useNowFile);

            this.$toast.clear();
          })
          .catch(() => {
            this.$toast.clear();
            // console.error("error", error);
          });
      } else {
        this.$toast.clear();
        // console.log("已有数据");
        return;
      }
    },
    //获取即将上映电影数据
    onNextDataFnu() {
      let useNextFile = null;
      let url = "https://douban.uieee.com/v2/movie/";

      if (this.onNextFileData.length == 0) {
        //获取即将上映电影
        this.axios({
          method: "GET",
          url: url + "coming_soon",
          params: {
            start: 0,
            count: 20,
            city: "广州"
          }
        })
          .then(data => {
            data.data.subjects.forEach(v => {
              //合并作者
              v.castsData = "";
              v.casts.forEach(item => {
                v.castsData += item.name + " / ";
              });
              v.castsData = v.castsData.slice(0, -3);

              //合并电影类型
              v.genresData = v.genres.join(" / ");

              //处理播放量
              v.collectCount = v.collect_count + "W";
            });

            //清除加载框
            this.$toast.clear();
            //存储即将上映数据
            this.$store.commit(
              "homeModule/onNextFileDataFun",
              data.data.subjects
            );

            useNextFile = this.onNextFileData.slice(0, 10);
            //存储home页面使用的即将上映数据
            this.$store.commit("homeModule/useNextFileDataFun", useNextFile);
          })
          .catch(() => {
            this.$toast.clear();
            // console.error("error", error);
          });
      } else {
        this.$toast.clear();
        // console.log("已有数据");
        return;
      }
    },
    //获取本周口碑榜数据

    //跳转电影详情
    detailPagesFun(id) {
      this.$store.commit("detailPagesModule/filmIdFun", id.params.id);
      this.$router.push(id);
    },

    //跳转购票页面
    ckqbFun() {
      let time = Math.random() * 5 * 1000;
      this.$toast.loading({
        duration: 0,
        message: "加载中..."
      });
      setTimeout(() => {
        this.$router.push({ name: "film" });
        this.$toast.clear();
      }, time);
    },
    //本周排行榜
    viewFileFun() {
      this.$toast.loading({
        duration: 0,
        message: "加载中..."
      });
      if (this.viewFileData.length == 0) {
        this.axios({
          method: "GET",
          url:
            "https://douban.uieee.com/v2/movie/weekly?apikey=0df993c66c0c636e29ecbb5344252a4a"
        })
          .then(data => {
            data.data.subjects.forEach(v => {
              //处理演员
              v.subject.castsData = "";
              if (v.subject.casts.length == 0) {
                v.subject.castsData = v.subject.directors[0].name;
              } else {
                v.subject.casts.forEach(item => {
                  v.subject.castsData += item.name + " / ";
                });
                v.subject.castsData = v.subject.castsData.slice(0, -3);
              }
              // 合并电影类型
              v.subject.genresData = v.subject.genres.join(" / ");
              //处理导演
              v.subject.directorsCount = v.subject.directors.length ==0? '无导演': v.subject.directors[0].name;
              // 处理播放量
              v.subject.collectCount =
                v.subject.collect_count < 10000
                  ? v.subject.collect_count
                  : Math.floor(v.subject.collect_count / 1000) / 10 + "W";
              //处理评分
              v.subject.ratingNum = v.subject.rating.average;
            });

            this.$store.commit("homeModule/viewFileDataFun",data.data.subjects);

            this.$toast.clear();
          })
          .catch(() => {
            this.$toast.clear();
            // console.error("error", error);
          });
      } else {
        this.$toast.clear();
        // console.log("有数据了，别再获取了");
      }
    },
    //跳转到购票页面
    goTicket(id) {
      this.$toast.loading({
        duration: 0,
        message: "加载中..."
      });
      let time = Math.ceil(Math.random() * 3);
      setTimeout(() => {
        this.$toast.clear();
        this.$router.push(id);
        this.$store.commit("ticketModule/getfilmFun", id.params.id);
      }, time);
    }
  },

  created() {
    this.onNowFileFun();
    this.onNextDataFnu();
    this.viewFileFun();
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: calc(~"100% - 24px");
  background: #191b28;
}
header {
  height: 45px;
  background: #1d202f;
  padding: 0 10px;
  position: fixed;
  top: 24px;
  left: 0;
  right: 0;
  z-index: 100;
  .header-icon-box {
    width: 24px;
    height: 24px;
    color: #e6e6e6;
    .header-icon {
      width: 20px;
      height: 20px;
      font-size: 20px;
      margin: 10.5px 0px;
    }
    .header-ewm {
      width: 28px;
      height: 28px;
      background: url("../../assets/ewm.png") no-repeat center center;
      background-size: 28px 28px;
      margin-top: 9px;
    }
  }
  .header-city {
    float: left;
    font-size: 14px;
    line-height: 45px;
    color: #e6e6e6;
  }
  .header-center-box {
    height: 45px;
    position: relative;
    .header-center {
      height: 28px;
      position: absolute;
      background: #34394f;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto 0;
      border-radius: 15px;
      overflow: hidden;
      .search-icon {
        width: 30px;
        height: 30px;
        background: url("../../assets/search.png") no-repeat center center;
        background-size: 18px 18px;
        position: absolute;
      }
      .search {
        width: calc(~"100% - 50px");
        height: 28px;
        padding: 0px 20px 0 30px;
        background: none;
        font-size: 14px;
        color: #f2f2f2;
      }
    }
  }
}
center {
  width: 100%;
  float: left;
  height: calc(~"100% - 55px");
  margin-top: 55px;
  overflow-y: auto;
  .lb {
    width: 90%;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    .lb-img {
      width: 100%;
      height: 200px;
      background: #34394f;
    }
  }
  .classify-box {
    width: 95%;
    height: 120px;
    div {
      width: 80px;
      height: 80px;
      float: left;
      margin: 15px 19px 1px;
    }
    span {
      width: 40px;
      height: 40px;
      display: block;
      margin: 10px 0;
      border: 1px solid #e6e6e6;
      border-radius: 50%;
    }
    .icon1 {
      background: url("../../assets/classfit.png") no-repeat center center;
      background-size: 24px 24px;
    }
    .icon2 {
      background: url("../../assets/film.png") no-repeat center center;
      background-size: 24px 24px;
    }
    .icon3 {
      background: url("../../assets/person.png") no-repeat center center;
      background-size: 28px 28px;
    }
    p {
      color: #e6e6e6;
    }
  }
  .onNowfilm {
    width: 90%;
    color: #e6e6e6;
    margin-bottom: 20px;
    .onNowfilm-top {
      font-size: 18px;
      .gd {
        font-size: 12px;
        color: #808080;
      }
    }
    .onNowfilm-bottom {
      margin-top: 10px;
      overflow-x: auto;
      .onNowfilm-bottom-box {
        width: 1450px;
        .onNowfilm-box {
          width: 115px;
          float: left;
          margin-right: 7px;
          text-align: left;
          .onNowfilm-name {
            margin: 0 5px;
            padding: 10px 0;
            font-size: 16px;
          }
          .onNowfilm-buy {
            width: 60px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            border-radius: 15px;
            background: #e95551;
            margin-left: 5px;
          }
        }
      }
    }
    .onNowfilm-img-box {
      width: 100%;
      height: 140px;
      border-radius: 15px;
      position: relative;
      overflow: hidden;
      .onNowfilm-num {
        width: 100%;
        height: 24px;
        line-height: 24px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        font-size: 14px;
        text-align: center;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        bottom: 0;
      }
    }
    .ckxd {
      width: 115px;
      height: 140px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 15px;
      font-size: 14px;
      line-height: 140px;
      p {
        height: 14px;
        text-align: center;
      }
    }
  }
  .view-box {
    width: 100%;
    margin-top: 25px;
    position: relative;
    .view {
      width: 100%;
      height: 130px;
      margin-bottom: 25px;
      background: RGB(41, 45, 70);
      float: left;
      border-radius: 10px;
      position: relative;
      .pf {
        width: 50px;
        height: 50px;
        background: RGB(237, 211, 237);
        border-radius: 50%;
        line-height: 50px;
        float: right;
        position: absolute;
        right: 25px;
        top: 40px;
        color: red;
        font-weight: bold;
        z-index: 5;
        font-size: 17px;
        box-shadow: 0 0 10px 1px RGB(218, 170, 219);
      }
    }
    .view:last-child {
      margin-bottom: 0;
    }
    .img-box {
      width: 100px;
      height: 100%;
      float: left;
      border-radius: 10px;
      margin: -15px 15px;
      overflow: hidden;
    }
    .xian {
      width: 50px;
      height: calc(~"100% - 25px");
      border-right: #e95551 1px solid;
      position: absolute;
      right: 50px;
      z-index: 4;
    }

    .view-center {
      width: calc(~"100% - 160px");
    }
    .name,
    .filmname {
      color: #f2f2f2;
      font-size: 14px;
      top: 15px;
      text-align: left;
      margin: 10px;
    }
    .name1 {
      width: 120px;
      font-size: 13px;
      color: #999;
      top: 15px;
      text-align: left;
      margin: 10px 0;
    }
  }

  .detail-nr-pfs {
    float: left;
    position: relative;
    .xx-box {
      width: 100px;
      height: 20px;
      position: relative;
      font-size: 15px;
      .xx-noact {
        width: 0;
        height: 20px;
        position: absolute;
        color: #ff6700;
        z-index: 3;
        overflow: hidden;
      }
      .xx-act {
        width: 100%;
        height: 20px;
        position: absolute;
      }
      span {
        position: absolute;
        &:nth-child(1) {
          left: 0px;
        }
        &:nth-child(2) {
          left: 20px;
        }
        &:nth-child(3) {
          left: 40px;
        }
        &:nth-child(4) {
          left: 60px;
        }
        &:nth-child(5) {
          left: 80px;
        }
      }
    }
  }
}
</style>