class RoutesComponent{
    
    subjectComponent(){
        return import ('../views/Subject.vue')
    }
    
    homeComponent(){
        return import ('../views/SubjectViews/home.vue')
    }

    buyComponent(){
        return import ('../views/SubjectViews/buy.vue')
    }

    filmComponent(){
        return import ('../views/SubjectViews/buyViews/film.vue')
    }

    cinemaComponent(){
        return import ('../views/SubjectViews/buyViews/cinema.vue')
    }

    shareComponent(){
        return import ('../views/SubjectViews/share.vue')
    }

    videoComponent(){
        return import ('../views/SubjectViews/video.vue')
    }
    
    mineComponent(){
        return import ('../views/SubjectViews/mine.vue')
    }
    
    registerComponent(){
        return import ('../views/Register.vue')
    }
    loginComponent(){
        return import ('../views/Login.vue')
    }
    detailPagesComponent(){
        return import ('../views/DetailPages.vue')
    }
    
    ticketComponent(){
        return import ('../views/Ticket.vue')
    }
    buyResultsComponent(){
        return import ('../views/BuyResults.vue')
    }
}

export const routesComponent = new RoutesComponent()