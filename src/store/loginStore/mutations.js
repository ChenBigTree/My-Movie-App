export const mutations = {
    //禁用或启动登录按钮
    dlu(state, isLoading) {
        state.isLoading = isLoading
        state.iszcBtn = isLoading ? true : false
    },

    loginInputFun(state) {
        if (state.login.useName != '' && state.login.password != '') {
            state.iszcBtn = false
        } else {
            state.iszcBtn = true
        }
    },
    //查看密码
    eyeFun(state) {
        state.pass.type = state.ispassTrue ? 'text' : 'password'
        state.pass.eye = state.ispassTrue ? 'eye' : 'closed-eye'
        state.ispassTrue = !state.ispassTrue
    },
    
}