export const mutations = {
    //获取电影ID
    getfilmFun(state, id) {
        state.film.id = id
    },

    //清除已提交的座位数据
    delData(state, data) {
        state.seatSubscriptBox.seatSubscript = data
    },

    //修改电影数据
    changeFilmData(state, data) {
        state.film.name = data.name;
        state.film.img = data.img
        state.seatSubscriptBox.id = data.id
    },
}