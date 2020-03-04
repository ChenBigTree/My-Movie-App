export const mutations = {
    onNowFileDataFun(state, data) {
        state.onNowFileData = data
        // console.log('存储正在热映的数据',state.onNowFileData)
    },

    useNowFileDataFun(state, data) {
        state.useNowFile = data
    },

    onNextFileDataFun(state, data) {
        state.onNextFileData = data
        // console.log('存储即将上映数据',state.onNextFileData)
    },
    
    useNextFileDataFun(state, data) {
        state.useNextFile = data
    },

    viewFileDataFun(state, data) {
        state.viewFileData = data
        // console.log('存储本周排行榜的数据',state.viewFileData )
    },
    
}