import { actions_types } from '../action-types/types'

const initialState = {}

const messages = (state = initialState, action) => {
    switch(action.type){
        case actions_types.CREATE_MESSAGE:
            return (state=action.payload)
        default:
            return state
    }
}

export default messages