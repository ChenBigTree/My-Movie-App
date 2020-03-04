export const state = {
    tabbarData: [
        {
            name: 'home',
            icon: 'home-o',
            title: '首页',
            chind: []
        },
        {
            name: 'film',
            icon: 'coupon-o',
            title: '购票',
            chind: [{ name: 'film', name: 'cinema' }]
        },
        {
            name: 'share',
            icon: 'share',
            title: '发现',
            chind: []
        },
        {
            name: 'video',
            icon: 'video-o',
            title: '视频',
            chind: []
        },
        {
            name: 'mine',
            icon: 'manager-o',
            title: '我的',
            chind: []
        }
    ],
}