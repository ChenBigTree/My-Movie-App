export const mutations = {
    // 存储数据
    onNowDataFun(state, data) {
        state.onNowData = data[0].subjects
        state.isOnNow = data[0].bol
    },
    onNextDataFun(state, data) {
        state.onNextData = data[0].subjects
        state.isOnNext = data[0].bol
    },

}