import { state } from './state'
import { mutations } from './mutations'

export const loginModule  =  {
    namespaced: true,
    mutations,
    state,
}

