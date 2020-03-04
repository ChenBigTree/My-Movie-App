import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import 'lib-flexible/flexible'

import {
  NavBar,
  Field,
  Toast,
  CellGroup,
  Button,
  Icon,
  Notify,
  Tabbar,
  TabbarItem,
  Divider,
  Grid,
  GridItem,
  Row,
  Col,
  Swipe,
  SwipeItem,
  Tabs,
  Tab,
  DropdownMenu,
  DropdownItem,
  Search,
  Rate,
  Dialog,
  PullRefresh ,
} from 'vant';

Vue
  .use(NavBar)
  .use(Field)
  .use(CellGroup)
  .use(Button)
  .use(Icon)
  .use(Notify)
  .use(Toast)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Divider)
  .use(Grid)
  .use(GridItem)
  .use(Col)
  .use(Row)
  .use(Swipe)
  .use(SwipeItem)
  .use(Tab)
  .use(Tabs)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(VueAxios, axios)
  .use(Search)
  .use(Rate)
  .use(Dialog)
  .use(PullRefresh )

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
