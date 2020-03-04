export const mutations = {
    detailPagesDataFun(state, data) {
        state.detailPagesData = data
    },
    filmIdFun(state, id) {
        state.filmId = id
    },
    isdisplayFun(state) {
        state.display = state.display == 'block' ? '-webkit-box' : 'block';
    },
    isLikeFun(state) {
        state.name = state.isLike ? 'like-o' : 'like'
        state.isLike = !state.isLike;
    }
}