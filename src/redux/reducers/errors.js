import { actions_types } from '../action-types/types'
const initialState = {
    msg:{},
    status:null
}

const errors = (state = initialState, action) =>{
    switch(action.type){
        case actions_types.GET_ERRORS:
            return{
                msg:action.payload.msg,
                status: action.payload.status
            }
        case actions_types.LOGIN_SUCCESS:
        case actions_types.LOGOUT_SUCCESS:
            return {
                msg:{},
                status:null
            }

        default:
            return state
    }
}

export default errors