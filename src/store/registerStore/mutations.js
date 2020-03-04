export const mutations = {

    //返回上一级
    onClickLeft(state) {
        // console.log(state.enterPassword.pass)
    },

    //切换显示/隐藏密码
    eyeFun(state, key) {
        state[key].isEye = !state[key].isEye
        state[key].eyeIcon = state[key].isEye ? 'eye' : 'closed-eye'
        state[key].typt = state[key].isEye ? 'text' : 'password'
    },

    //输入框修改时验证
    registerInput(state, key) {
        // 正确时提示框为空，取消红色字体提示
        state.ts = '';
        state[key].isError = false;
        // console.log('state.phone.result != ', state.phone.result == '')
        //如果输入框不为空，则激活注册按钮

        //判断输入框是否为空，红色字体提示
        if (state[key].result == null || state[key].result == '') {
            state[key].isError = true;
            state.iszcBtn = true
            return
        }

        //判断确认密码框，
        if (key == 'pass2') {
            //判断两次密码是否一致，是则红色字体提示
            if (state.pass1.result !== state.pass2.result) {
                state[key].isError = true;
                state.ts = state[key].error;
                state.iszcBtn = true
            }
        } else {
            // 验证是否格式符合，不是则红色字体提示
            if (!state[key].reg.test(state[key].result)) {
                state[key].isError = true;
                state.ts = state[key].error;
                // console.log('2')
            } else {
                state[key].isError = false;
            }
            // console.log('state.phone.isError == false ', state[key].isError)
        }

        state.iszcBtn = !((state.useName.result != '' && state.useName.isError == false) && (state.phone.result != '' && state.phone.isError == false) && (state.pass1.result != '' && state.pass1.isError == false) && (state.pass2.result != '' && state.pass2.isError == false))
        // console.log('state.iszcBtn ', state.iszcBtn)
    },

    //获取无误的用户注册信息
    registrationFun(state, selt) {

        state.isLoading = true
        state.iszcBtn = true
        //注册成功的数据
        let registrationData = {
            name: state.useName.result,
            pass: state.pass1.result,
            phone: state.phone.result,
        };

        //保存用户信息到本地服务器上
        let registrationDatas = state.registrationDatas

        let randomTime = Math.random() * 5 * 1000;
        setTimeout(function () {

            //获取用户信息
            let get = localStorage.getItem('registrationDatas')

            get = get ? JSON.parse(get) : []

            // //判断无误的用户信息是否重复
            for (let i = 0; i < get.length; i++) {
                if (get[i].name == registrationData.name) {
                    selt.$toast({
                        duration: 2000,
                        message: '该用户已存在，请重试！！！'
                    })
                    state.iszcBtn = false
                    state.isLoading = false
                    return
                }
            }
            registrationDatas.push(registrationData)
            selt.$toast({
                duration: 2000,
                message: '注册成功，前往登录'
            })

            setTimeout(() => {
                selt.$router.push({ name: 'login' })
            },2000)

            localStorage.setItem('registrationDatas', JSON.stringify(registrationDatas))
            state.iszcBtn = false
            state.isLoading = false
        }, randomTime)
    },
    
    //获取验证码
    yzmfun(state,yzm){
        state.yzm = yzm;
    }


    //点击获取验证码
    // verificationFun(state, selt) {

    //     if (state.phone.reg.test(state.phone.result)) {
    //         state.phone.isDis = true;
    //         //倒计时
    //         let num = 5
    //         let set = setInterval(function () {
    //             num--
    //             state.phone.num = num
    //             if (num === 0) {
    //                 state.phone.num = '发送验证码';
    //                 state.phone.isDis = false;
    //                 clearInterval(set)
    //                 selt.$notify({ message: '通知内容', duration: 20000 })
    //                 return false
    //             }
    //             console.log('num', num)
    //         }, 1000)

    //     }
    // }
}