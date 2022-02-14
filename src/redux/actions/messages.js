
import { actions_types } from "../action-types/types"
// create message
export const createMessage = msg =>{
    return{
        type: actions_types.CREATE_MESSAGE,
        payload:msg
    }
}

// return errors
export const returnErrors = (msg,status) =>{
    return{
        type:actions_types.GET_ERRORS,
        payload:{ msg, status}
    }
}