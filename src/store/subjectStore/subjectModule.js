import { state } from './state'
import { mutations } from './mutations'
export const subjectModule = {
    namespaced: true,

    state,
    mutations,
}