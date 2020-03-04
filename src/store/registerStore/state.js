export const state = {
    ts: '',
    yzm:'',
    useName: {
        result: '',
        isError: false,
        hint: '请输入用户名',
        nameNull: '用户名不能为空...',
        error: '用户名必须是字母开头且4-8个字符',
        reg: /^[A-Za-z][A-Za-z0-9_]{3,7}$/
    },
    phone: {
        result: '15089600646',
        isError: false,
        hint: '请输入手机号',
        nameNull: '手机号不能为空...',
        error: '手机号格式不正确',
        reg: /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
        isDis:false,
        num:'发送验证码'
    },

    pass1: {
        result: 'a123123',
        isError: false,
        hint: '请输入密码',
        nameNull: '密码不能为空...',
        reg: /^[a-zA-Z]\w{5,17}$/,
        error: '密码长度为5~17位，必须由字母开头',

        typt: 'password',
        isEye: false,
        eyeIcon: 'closed-eye',
    },

    pass2: {
        result: 'a123123',
        isError: false,
        hint: '请输入确认密码',
        nameNull: '确认密码不能为空...',
        error: '两次密码不一致',

        typt: 'password',
        isEye: false,
        eyeIcon: 'closed-eye',
    },

    //信息无误时启用注册按钮按钮
    iszcBtn:true,

    registrationDatas:[],

    //加载中
    isLoading:false
}
