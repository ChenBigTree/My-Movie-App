import Vue from 'vue'
import Vuex from 'vuex'

import { registerModule } from "./registerStore/registerModule";
import { loginModule } from "./loginStore/loginModule";
import { detailPagesModule } from "./DetailPagesStore/detailPagesModule";
import { ticketModule } from "./TicketStore/ticketModule";

import { subjectModule } from "./subjectStore/subjectModule";
import { buyModule } from "./subjectStore/buyStore/buyModule";

import { homeModule } from "./subjectStore/homeStore/homeModule";
import { mineModule } from "./subjectStore/mineStore/mineModule";
import { filmModule } from "./subjectStore/buyStore/filmStore/filmModule";
import { cinemaModule } from "./subjectStore/buyStore/cinemaStore/cinemaModule";
// import { videoModule } from "./subjectStore/videoStore/videoModule";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
  },
  modules:{
    subjectModule,
    loginModule,
    registerModule,
    cinemaModule,
    filmModule,
    buyModule,
    ticketModule,
    homeModule,
    detailPagesModule,
    mineModule,
    // videoModule,
  }
})
