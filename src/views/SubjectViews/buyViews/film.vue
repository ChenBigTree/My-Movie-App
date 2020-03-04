<template>
  <div>
    <div class="film">
      <!-- 轮播图 -->
      <div class="lb">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <div class="lb-box">
              <img
                src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg"
                class="auto-img"
                alt
              />
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="lb-box">
              <img
                src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p510861873.jpg"
                class="auto-img"
                alt
              />
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="lb-box">
              <img
                src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2559011361.jpg"
                class="auto-img"
                alt
              />
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="lb-box">
              <img
                src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg"
                class="auto-img"
                alt
              />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>

      <!-- 电影上映 -->
      <div class="film-nr">
        <van-tabs
          v-model="activeName"
          background="#1d202f"
          title-active-color="#ff6700"
          title-inactive-color="#fff"
        >
          <!-- 正在上映 -->
          <van-tab title="正在上映" name="a">
            <div class="bigbox">
              <div class="box" v-for="(item ,index) in onNowData" :key="index">
                <div
                  class="box-nr"
                  @click="detailPagesFun({name:'detailPages',params:{id:item.id}})"
                >
                  <div class="img-box">
                    <img
                      :src="'https://images.weserv.nl/?url='+item.images.medium"
                      class="auto-img"
                      alt
                    />
                    <div class="img-icon-box">
                      <van-icon class="img-icon" name="play-circle-o" />
                    </div>
                  </div>
                  <div class="nr-box">
                    <div class="nr-title oneTextOverflow">{{item.title}}</div>
                    <div class="nr-lx oneTextOverflow">{{item.genresData}}</div>
                    <div class="nr-name oneTextOverflow">{{item.castsData}}</div>
                    <div class="nr-pf">
                      豆瓣评分：
                      <span>{{item.rating.average}}</span>
                    </div>
                  </div>
                </div>
                <div class="btn" @click="goTicket({name:'ticket',params:{id:item.id}},$event)">购票</div>
              </div>
            </div>
          </van-tab>
          <!-- 即将上映 -->
          <van-tab title="即将上映" name="b">
            <div class="bigbox">
              <div class="box" v-for="(item ,index) in onNextData" :key="index">
                <div
                  class="box-nr"
                  @click="detailPagesFun({name:'detailPages',params:{id:item.id}})"
                >
                  <div class="img-box">
                    <img
                      :src="'https://images.weserv.nl/?url='+item.images.medium"
                      class="auto-img"
                      alt
                    />
                    <div class="img-icon-box">
                      <van-icon class="img-icon" name="play-circle-o" />
                    </div>
                  </div>
                  <div class="nr-box">
                    <div class="nr-title oneTextOverflow">{{item.title}}</div>
                    <div class="nr-lx oneTextOverflow">{{item.genresData}}</div>
                    <div class="nr-name oneTextOverflow">{{item.castsData}}</div>
                    <div class="nr-pf oneTextOverflow">{{item.pubdates[0]}}</div>
                  </div>
                </div>
                <div class="btn">预购</div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("filmModule");
import $ from "jquery";
export default {
  name: "film",
  data() {
    return {
      activeName: "a"
    };
  },
  computed: {
    ...mapState(["onNowData", "onNextData"])
  },
  methods: {
    ...mapMutations(["onNowDataFun"]),

    getHomeDate() {
      //获取正在上映电影数据
      let onNowFile = this.$store.state.homeModule.onNowFileData;
      // console.log("截取前", onNowFile);

      //设置懒加载初始值
      // let end = 5;
      // let state = 0;

      // let film = $(".film");
      // $(".film").scroll(function() {
      //   console.log(film);
      //   console.log("滚动中");
      //   let sonNowFile = onNowFile.slice(0, 5);
      //   console.log("截取后", sonNowFile);
      // });

      this.$store.commit("filmModule/onNowDataFun", [
        { subjects: onNowFile, bol: true }
      ]);

      let onNextFile = this.$store.state.homeModule.onNextFileData;
      // console.log("2", onNextFile);
      this.$store.commit("filmModule/onNextDataFun", [
        { subjects: onNextFile, bol: true }
      ]);
    },

    //跳转电影详情
    detailPagesFun(id) {
      this.$store.commit("detailPagesModule/filmIdFun", id.params.id);
      this.$router.push(id);
    },

    //跳转到购票页面
    goTicket(id, $event) {
      // console.log("id", id);
      //阻止冒泡事件
      if ($event) {
        $event.preventDefault();
      }
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
    this.getHomeDate();
  }
};
</script>

<style lang="less" scoped>
.film {
  width: 100%;
  background: #1d233d;
  .lb {
    width: 100%;
    height: 200px;
    .lb-box {
      width: 100%;
      height: 200px;
      overflow: hidden;
    }
  }
  .film-nr {
    height: calc(~"100% - 200px");
    .bigbox {
      overflow-y: auto;
      .box {
        .box-nr {
          background: #292d46;
          width: 95%;
          height: 130px;
          margin-top: 25px;
          border-radius: 15px;
          position: relative;
          .img-box {
            width: 100px;
            height: 130px;
            position: absolute;
            top: -10px;
            left: 10px;
            border-radius: 10px;
            overflow: hidden;
            .img-icon-box {
              font-size: 24px;
              color: #fff;
              position: absolute;
              top: 50%;
              left: 50%;
              bottom: 0;
              margin: -12px;
            }
          }
          .nr-box {
            width: calc(~"100% - 130px");
            position: absolute;
            left: 110px;
            text-align: left;
            padding: 10px;
            .nr-title {
              font-size: 18px;
              color: #fff;
            }
            .nr-name {
              padding: 0 0 10px 0;
              color: #f2f2f2;
            }
            .nr-lx {
              padding: 10px 0;
              color: #f2f2f2;
            }

            .nr-pf {
              width: 170px;
              color: #f2f2f2;
              span {
                color: #e75051;
              }
            }
          }
        }
        .btn {
          width: 50px;
          height: 25px;
          text-align: center;
          line-height: 25px;
          border-radius: 10px;
          background: #ff6700;
          position: absolute;
          right: 20px;
          color: #fff;
          margin-top: -40px;
        }
      }
    }
  }
}
</style>