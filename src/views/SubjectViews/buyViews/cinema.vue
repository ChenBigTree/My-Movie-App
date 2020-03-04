<template>
  <div>
    <div class="box">
      <van-dropdown-menu active-color="#ff6700">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
      <!-- 电影院 -->
      <div class="cinema-box">
        <div class="cinema">
          <div class="cinema-top clearfix">
            <div class="cinema-fl fl">
              <div class="name oneTextOverflow">万达电影院</div>
              <div class="dz oneTextOverflow">天河区东圃2888号</div>
            </div>
            <div class="cinema-fr fr">
              <div class="jg">
                <span>
                  ￥
                  <span>16.9</span>
                </span> 起
              </div>
              <div class="jl">0.2KM</div>
            </div>
          </div>
          <div class="cinema-bottom-box">
            <div class="cinema-bottom clearfix">
              <div class="bottom-box">
                <div class="time">11:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">12:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">13:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
            </div>
          </div>
        </div>
        <div class="cinema">
          <div class="cinema-top clearfix">
            <div class="cinema-fl fl">
              <div class="name oneTextOverflow">万达电影院</div>
              <div class="dz oneTextOverflow">天河区东圃2888号</div>
            </div>
            <div class="cinema-fr fr">
              <div class="jg">
                <span>
                  ￥
                  <span>16.9</span>
                </span> 起
              </div>
              <div class="jl">0.2KM</div>
            </div>
          </div>
          <div class="cinema-bottom-box">
            <div class="cinema-bottom clearfix">
              <div class="bottom-box">
                <div class="time">11:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">12:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">13:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
            </div>
          </div>
        </div>
        <div class="cinema">
          <div class="cinema-top clearfix">
            <div class="cinema-fl fl">
              <div class="name oneTextOverflow">万达电影院</div>
              <div class="dz oneTextOverflow">天河区东圃2888号</div>
            </div>
            <div class="cinema-fr fr">
              <div class="jg">
                <span>
                  ￥
                  <span>16.9</span>
                </span> 起
              </div>
              <div class="jl">0.2KM</div>
            </div>
          </div>
          <div class="cinema-bottom-box">
            <div class="cinema-bottom clearfix">
              <div class="bottom-box">
                <div class="time">11:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">12:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">13:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
            </div>
          </div>
        </div>
        <div class="cinema">
          <div class="cinema-top clearfix">
            <div class="cinema-fl fl">
              <div class="name oneTextOverflow">万达电影院</div>
              <div class="dz oneTextOverflow">天河区东圃2888号</div>
            </div>
            <div class="cinema-fr fr">
              <div class="jg">
                <span>
                  ￥
                  <span>16.9</span>
                </span> 起
              </div>
              <div class="jl">0.2KM</div>
            </div>
          </div>
          <div class="cinema-bottom-box">
            <div class="cinema-bottom clearfix">
              <div class="bottom-box">
                <div class="time">11:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">12:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">13:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
              <div class="bottom-box">
                <div class="time">14:40</div>
                <div class="yy">英语3D</div>
                <div class="jg">￥16.9</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("cinemaModule");

export default {
  name: "film",
  data() {
    return {
      a1: "#fff"
    };
  },
  computed: {
    ...mapState(["value1", "value2", "value3", "option1", "option2", "option3"])
  }
};
</script>

<style lang="less" scoped>
.box {
  height: 100px;
  background: red;
  .van-dropdown-menu {
    background: #f2f2f2;
  }
  .cinema-box {
    .cinema {
      width: 100%;
      padding: 10px 0;
      background: #1d233d;
      .cinema-top {
        padding: 0 10px;
        background: #1d233d;
        text-align: left;
        color: #f2f2f2;
        .cinema-fl {
          width: calc(~"100% - 85px");
          .name {
            font-size: 16px;
          }
          .dz {
            margin: 10px 0;
            color: #bfbfbf;
          }
        }
        .cinema-fr {
          width: 80px;
          .jg {
            font-size: 14px;
            span {
              color: #ff6700;
              span {
                font-size: 20px;
                font-weight: bold;
              }
            }
          }
          .jl {
            font-size: 13px;
            padding: 10px 0;
            color: #bfbfbf;
            text-align: right;
          }
        }
      }
      .cinema-bottom-box {
        overflow-x: auto;
        .cinema-bottom {
          width: 600px;
          padding-left: 10px;
          .bottom-box {
            width: 70px;
            margin-right: 5px;
            background: #4a4f63;
            border-radius: 10px;
            color: #f2f2f2;
            float: left;
            .time {
              font-weight: bold;
              margin-top: 5px;
            }
            .yy {
              margin: 5px 0;
            }
            .jg {
              color: #ff6700;
            }
          }
        }
      }
    }
  }
}
</style>