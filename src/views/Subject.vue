<template>
  <div class="subject">
    <div class="subject-top">
      <div class="subject-header"></div>
    </div>
    <!-- 二级路由 -->
    <router-view></router-view>
    <van-tabbar v-model="tabbarActive" active-color="#f4b603" inactive-color="#fff">
      <van-tabbar-item
        v-for="(item, index) in tabbarData"
        :key="index"
        :name="item.name"
        :icon="item.icon"
        @click="tabbarFun(item.name)"
      >{{item.title}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("subjectModule");

export default {
  name: "subject",
  data() {
    return {
      tabbarActive: "home"
    };
  },
  created() {
    let hash = location.hash;
    let hashs = hash.substring(hash.indexOf("/") + 1);
    this.tabbarActive = hashs;
  },
  computed: {
    ...mapState(["tabbarData"])
  },
  methods: {
    tabbarFun(Active) {
      let t = "#/";
      let hash = location.hash;

      for (let i = 0; i < this.tabbarData.length; i++) {
        if (hash == t + Active) {
          return false;
        }
      }
      this.$router.push({ name: Active });
    }
  }
};
</script>

<style lang="less" scoped>
.subject {
  height: calc(~"100% - 50px");
}
.subject-header {
  height: 24px;
  width: 100%;
  background: RGB(25,27,40);
}
.van-tabbar {
  background-color: #191b28;
}
</style>