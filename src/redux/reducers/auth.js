import { actions_types } from '../action-types/types'
const initalState = {
    token:localStorage.getItem('Token'),
    isAuthenticated:localStorage.getItem('isAuthenticated') || false,
    isLoading:false,
    user:localStorage.getItem('user'),
    loggedIn:{},
    registration:{}
}
const auth  = (state=initalState, action)=>{
    switch(action.type){
        case actions_types.USER_LOADING:  
            return{
                ...state,
                isLoading:true
            }
        case actions_types.USER_LOADED:
            // console.log("usrlist",action.payload.data.userList)
            return{
                ...state,
                isLoading:false,
                loggedIn:action.payload.data.userList,
                
            }
        case actions_types.LOGIN_SUCCESS:
        case actions_types.USER_VERIFICATION:
            localStorage.setItem('Token',action.payload?.token)
            localStorage.setItem('isAuthenticated', true)
            localStorage.setItem('user', JSON.stringify(action.payload))
            return{
                ...state,
                user: localStorage.getItem('user'),
                isLoading:false,
                isAuthenticated:localStorage.getItem('isAuthenticated'),
                token:localStorage.getItem('Token'),
            }
        case actions_types.LOGOUT_SUCCESS:
        case actions_types.AUTH_ERROR:
        case actions_types.LOGIN_FAIL:
        case actions_types.REGISTRATION_FAIL:
            localStorage.removeItem('Token')
            localStorage.removeItem('isAuthenticated')
            localStorage.removeItem('user')
            return{
                ...state,
                token:null,
                user:null,
                isAuthenticated:false,
                isLoading:false,
                loggedIn:{},
                registration:{}
            }
        case actions_types.REGISTRATION_SUCCESS:
            return {
                ...state,
                isLoading:false,
                registration:action?.payload
            }
        default:
            return state
    }
}

export default auth