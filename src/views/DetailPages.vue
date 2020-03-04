<template>
  <div class="detailPages">
    <div
      class="m-bg"
      :style="{ backgroundImage: 'linear-gradient(to bottom, rgba(242,242,242, 0), rgba(242,242,242, .55) 40%, rgba(29,32,47, 1) 50%),url(https://images.weserv.nl/?url=' + detailPagesData.imageschat +')'}"
    >
      <div class="detail-title clearfix">
        <div class="detail-left fl" @click="goBack"></div>
        <div class="detail-right fr"></div>
      </div>
      <div class="detail-center fl">
        <div class="detail-top-box">
          <div class="detail-nr">
            <div class="detail-nr-img fl">
              <img
                :src="'https://images.weserv.nl/?url='+detailPagesData.imageschat"
                class="auto-img"
                alt
              />
            </div>
            <div class="detail-nr-top fl">
              <div class="detail-nr-name oneTextOverflow">{{detailPagesData.title}}</div>
              <div
                class="detail-nr-movietype oneTextOverflow"
              >{{detailPagesData.genresData}} &nbsp; {{detailPagesData.time}}</div>
              <div class="detail-nr-look oneTextOverflow">{{detailPagesData.collectCount}}人看过</div>
              <div class="detail-nr-sytime oneTextOverflow">上映时间：{{detailPagesData.pubdate}}</div>
              <div class="detail-nr-pf">
                <div class="xx-box">
                  <div class="xx-noact" :style="{ width: (detailPagesData.rat * 125) / 10 + 'px'}">
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
                <div class="detail-nr-pf-num fr">{{detailPagesData.rat}}</div>
              </div>
              <div class="like" @click="isLikeFun">
                <span>
                  <van-icon :name="name" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="detail-bottom-box">
          <!-- 剧情简介 -->
          <div class="detail-bottom-jqjj">
            <div class="detail-bottom-top">
              <span class="jqjj-name">剧情简介:</span>
              <span class="jqjj-zk fr" @click="isdisplayFun">展开</span>
            </div>
            <p class="towTextOverflows jqjj" :style="{display}">{{detailPagesData.summary}}</p>
          </div>

          <!-- 演员信息 -->
          <div class="detail-actorBox">
            <div class="detail-bottom-title clearfix">
              <span class="detail-bottom-actorNames fl">演职人员</span>
            </div>
            <div class="detail-actor-box">
              <div class="detail-actor-bigbox">
                <div class="detail-actor">
                  <div class="actor-img">
                    <img
                      :src="'https://images.weserv.nl/?url='+detailPagesData.directorImg"
                      class="auto-img"
                    />
                  </div>
                  <div class="actor-name">{{detailPagesData.directorName}}</div>
                  <div class="actor-act">导演</div>
                </div>
                <div
                  class="detail-actor"
                  v-for="(item,index) in detailPagesData.casts"
                  :key="index"
                >
                  <div class="actor-img">
                    <img
                      :src="'https://images.weserv.nl/?url='+item.avatars.medium"
                      class="auto-img"
                    />
                  </div>
                  <div class="actor-name">{{item.name}}</div>
                  <div class="actor-act">演员</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 精彩花絮视频 -->
          <div class="detail-prevueBox">
            <div class="detail-bottom-title clearfix">
              <span class="detail-bottom-actorNames fl">精彩花絮</span>
            </div>
            <div class="detail-prevue-box clearfix">
              <div class="detail-prevue-bigbox clearfix">
                <div
                  class="detail-prevue"
                  v-for="(item,index) in detailPagesData.photosData"
                  :key="index"
                >
                  <div class="photos">
                    <img :src="'https://images.weserv.nl/?url='+item" class="auto-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 用户评价 -->
          <div class="detail-evaluate">
            <div class="detail-bottom-title clearfix">
              <span class="detail-bottom-actorNames fl">用户评价</span>
              <span class="detail-bottom-title fr">查看全部</span>
            </div>
            <div class="evaluate-box">
              <div
                class="evaluate clearfix"
                v-for="(item,index) in detailPagesData.popular_comments"
                :key="index"
              >
                <div class="evaluate-fl">
                  <div class="img-box">
                    <img
                      :src="'https://images.weserv.nl/?url='+item.author.avatar"
                      alt
                      class="auto-img"
                    />
                  </div>
                </div>
                <div class="evaluate-fr">
                  <div class="detail-nr-pfs">
                    <div class="xx-box">
                      <div class="xx-noact" :style="{ width: item.rating.value * 20 + 'px'}">
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
                  <div class="evaluate-name">{{item.author.name}}</div>
                  <div class="evaluate-title towTextOverflow">{{item.content}}</div>
                  <div class="evaluate-time">{{item.created_at}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-buy" @click="goTicket({name:'ticket',params:{id:filmId}})">购票</div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("detailPagesModule");
export default {
  name: "detailPages",
  computed: {
    ...mapState(["detailPagesData", "filmId", "display", "isLike", "name"])
  },
  methods: {
    ...mapMutations(["detailPagesDataFun", "isdisplayFun", "isLikeFun"]),

    //获取电影数据
    getDataFun() {
      //获取详情
      this.$store.commit("detailPagesModule/detailPagesDataFun", []);
      this.$toast.loading({
        duration: 0,
        message: "加载中..."
      });

      //获取路由id
      let hash = location.hash.split("/")[2];

      this.axios({
        method: "GET",
        url: "https://douban.uieee.com/v2/movie/subject/" + hash,
        async: false
      }).then(item => {
        // console.log("item", item);

        //合并电影类型
        item.data.genresData = item.data.genres.join(" / ");
        // 处理封页
        item.data.imageschat = item.data.images.large;
        // 处理导演信息
        item.data.directorName = item.data.directors[0].name;
        item.data.directorImg = item.data.directors[0].avatars.medium;

        //处理上映时间
        item.data.time = item.data.durations[0];

        //处理评分
        item.data.rat =
          String(item.data.rating.average).indexOf(".") > -1
            ? item.data.rating.average
            : item.data.rating.average + ".0";

        //处理图片
        item.data.photosData = [];
        item.data.photos.forEach(v => {
          item.data.photosData.push(v.image);
        });

        //处理播放量
        item.data.collectCount =
          Math.floor(item.data.collect_count / 1000) / 10 < 1
            ? item.data.collect_count
            : Math.floor(item.data.collect_count / 1000) / 10 + "万";

        // 存储电影详情
        this.$store.commit("detailPagesModule/detailPagesDataFun", item.data);

        this.$toast.clear();
      });
    },

    goBack() {
      this.$router.go(-1);
    },

    goTicket() {
      this.$toast.loading({
        duration: 0,
        message: "加载中..."
      });
      let time = Math.ceil(Math.random() * 3);
      setTimeout(() => {
        this.$toast.clear();
        this.$router.push({ name: "ticket" });

        this.$store.commit("ticketModule/getfilmFun", this.detailPagesData.id);
      }, time);

      this.$toast.clear();
    }
  },
  created() {
    console.log("22");
    this.getDataFun();
  }
};
</script>

<style lang="less" scoped>
.detailPages {
  width: 100%;
  height: 100%;
  background: #1d202f;
}
.detail-title {
  width: 100%;
  height: 24px;
  position: fixed;
  top: 24px;
  z-index: 3;
  .detail-left {
    width: 24px;
    height: 24px;
    background: url("../assets/left.png") no-repeat center center;
    background-size: cover;
    margin: 0px 0 0 15px;
  }
  .detail-right {
    width: 24px;
    height: 24px;
    background: url("../assets/fx.png") no-repeat center center;
    background-size: cover;
    margin: 0px 15px 0 0;
  }
}

.detail-center {
  height: calc(~"100% - 48px");
  width: 100%;
  z-index: 5;
  overflow-y: auto;
  color: #f2f2f2;
  margin-top: 48px;
  .detail-top-box {
    width: 100%;
    height: 350px;
    position: relative;
    .detail-nr {
      width: 90%;
      height: 180px;
      border-radius: 15px;

      background: rgba(41, 45, 70, 0.7);
      box-shadow: 0 0 10px 5px RGB(29, 32, 47);
      margin-left: 5%;
      position: absolute;
      bottom: 0;
      box-shadow: 0 0 10px 5px #333;
    }
    .detail-nr-img {
      width: 120px;
      height: 180px;
      background: #fff;
      border-radius: 15px;
      margin: -20px 0 0 20px;
      overflow: hidden;
    }
    .detail-nr-top {
      width: calc(~"100% - 160px");
      height: calc(~"100% - 20px");
      padding: 10px;
      .detail-nr-name {
        font-size: 20px;
        width: calc(~"100% - 50px");
      }
      .detail-nr-movietype {
        margin: 13px 0;
        font-size: 14px;
      }
      .detail-nr-look {
        margin: 13px 0;
        font-size: 14px;
      }
      .like {
        color: #ff6700;
        position: absolute;
        right: 15px;
        top: 15px;
        font-size: 25px;
      }
    }
    .detail-nr-sytime {
      font-size: 14px;
    }
  }
  .detail-bottom-box {
    padding: 15px;
    .detail-bottom-jqjj {
      background: rgba(41, 45, 70, 0.7);
      box-shadow: 0 0 10px 5px RGB(29, 32, 47);
      padding: 15px;
      border-radius: 15px;
      box-shadow: 0 0 10px 5px #333;
      .detail-bottom-top {
        margin-bottom: 10px;
      }
      .jqjj-name {
        font-size: 18px;
      }
      .jqjj {
        font-size: 14px;
      }
    }
    .detail-bottom-title {
      margin-bottom: 15px;
      .detail-bottom-actorNames {
        font-size: 16px;
      }
      .detail-bottom-title {
        margin: 0;
        color: #999;
      }
    }
    .detail-actorBox {
      width: calc(~"100% - 30px");
      // height: 120px;
      border-radius: 15px;
      margin: 10px 0 0 0;

      background: rgba(41, 45, 70, 0.7);
      box-shadow: 0 0 10px 5px RGB(29, 32, 47);
      padding: 15px;
      box-shadow: 0 0 10px 5px #333;
      .detail-actor-box {
        overflow-x: auto;
        .detail-actor-bigbox {
          width: 550px;
          .detail-actor {
            width: 100px;
            float: left;
            margin-right: 10px;
            border-radius: 10px;
            overflow: hidden;
            .actor-img {
              width: 100%;
              height: 120px;
              border-radius: 15px;
              overflow: hidden;
            }
            .actor-name {
              font-size: 14px;
              text-align: center;
              padding: 5px;
            }
            .actor-act {
              font-size: 12px;
              width: 100%;
              padding-bottom: 5px;
              text-align: center;
            }
          }
        }
      }
    }
    .detail-prevueBox {
      width: calc(~"100% - 30px");
      // height: 120px;
      border-radius: 15px;

      background: rgba(41, 45, 70, 0.7);
      box-shadow: 0 0 10px 5px RGB(29, 32, 47);
      padding: 15px;
      margin: 10px 0 0px 0;
      box-shadow: 0 0 10px 5px #333;
      .detail-prevue-box {
        overflow-x: auto;
        .detail-prevue-bigbox {
          width: 1850px;
          .detail-prevue {
            width: 180px;
            border-radius: 15px;
            overflow: hidden;
            float: left;
            margin-right: 5px;
            position: relative;
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
          .photos {
            width: 180px;
            height: 110px;
            img {
              height: 100%;
            }
          }
        }
      }
    }
    .detail-evaluate {
      width: calc(~"100% - 30px");
      padding: 15px;
      margin: 10px 0 60px 0;
      border-radius: 15px;

      background: rgba(41, 45, 70, 0.7);
      box-shadow: 0 0 10px 5px RGB(29, 32, 47);
      .evaluate {
        width: 100%;
        background: #1d202f;
        height: 130px;
        margin-bottom: 10px;
        border-radius: 15px;
        box-shadow: 0px 0 10px 5px #595959;
        .evaluate-fl {
          width: 60px;
          height: 100%;
          float: left;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin: 5px 0 0 5px;
          }
        }
        .evaluate-fr {
          width: calc(~"100% - 70px");
          height: calc(~"100% - 10px");
          float: left;
          border-top-right-radius: 15px;
          border-bottom-right-radius: 15px;
          padding: 5px;
          position: relative;
          .evaluate-name {
            font-size: 16px;
            margin: 5px 0;
            color: #f1f1f1;
          }
          .evaluate-title {
            font-size: 14px;
            color: #74747a;
          }
          .evaluate-time {
            font-size: 13px;
            color: #999;
            margin-top: 5px;
            position: absolute;
            bottom: 8px;
          }
          .detail-nr-pfs {
            float: right;
            position: relative;
            .xx-box {
              width: 100px;
              height: 20px;
              position: relative;
              .xx-noact {
                width: 0;
                height: 20px;
                position: absolute;
                color: #ff6700;
                font-size: 20px;
                z-index: 3;
                overflow: hidden;
              }
              .xx-act {
                width: 100%;
                height: 20px;
                position: absolute;
                font-size: 20px;
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
      }
    }
  }
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

.towTextOverflows {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;

  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.detail-nr-pf {
  position: relative;
  .xx-box {
    width: 125px;
    height: 25px;
    margin: 10px 0;
    position: relative;
    .xx-noact {
      width: 0;
      height: 25px;
      position: absolute;
      color: #ff6700;
      font-size: 20px;
      z-index: 3;
      overflow: hidden;
    }
    .xx-act {
      width: 100%;
      height: 25px;
      position: absolute;
      font-size: 20px;
    }
    span {
      position: absolute;
      &:nth-child(1) {
        left: 0px;
      }
      &:nth-child(2) {
        left: 25px;
      }
      &:nth-child(3) {
        left: 50px;
      }
      &:nth-child(4) {
        left: 75px;
      }
      &:nth-child(5) {
        left: 100px;
      }
    }
  }
  .detail-nr-pf-num {
    position: absolute;
    right: 10px;
    top: -2px;
    font-size: 20px;
    font-weight: bold;
    color: #ff6700;
  }
}

//购票按钮
.detail-buy {
  width: 80%;
  height: 40px;
  position: fixed;
  bottom: 20px;
  left: 10%;
  background: #ff6700;
  border-radius: 15px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #f2f2f2;
  box-shadow: 0 0 10px 2px #666;
}
</style>