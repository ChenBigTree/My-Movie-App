import { routesComponent } from './routesComponent'

export const routes = [
    {
        path: '/subject',
        name: 'subject',
        component: routesComponent.subjectComponent,
        children:[
            {
                path:'/home',
                name:'home',
                component: routesComponent.homeComponent,
            },
            {
                path:'/buy',
                name:'buy',
                component: routesComponent.buyComponent,
                children:[
                    {
                        path:'/film',
                        name:'film',
                        component: routesComponent.filmComponent,
                    },
                    {
                        path:'/cinema',
                        name:'cinema',
                        component: routesComponent.cinemaComponent,
                    }
                ]
            },
            {
                path:'/share',
                name:'share',
                component: routesComponent.shareComponent,
            },
            {
                path:'/video',
                name:'video',
                component: routesComponent.videoComponent,
            },
            {
                path:'/mine',
                name:'mine',
                component: routesComponent.mineComponent,
            },
        ]
    },
    {
        path: '/register',
        name: 'register',
        component: routesComponent.registerComponent
    },
    {
        path: '/login',
        name: 'login',
        component: routesComponent.loginComponent
    },
    {
        path: '/detailPages/:id',
        name: 'detailPages',
        component: routesComponent.detailPagesComponent
    },
    {
        path: '/ticket/:id',
        name: 'ticket',
        component: routesComponent.ticketComponent
    },
    {
        path: '/buyResults/:id',
        name: 'buyResults',
        component: routesComponent.buyResultsComponent
    },

    {
        path: '*',
        redirect: { name: 'home' }
    }
]