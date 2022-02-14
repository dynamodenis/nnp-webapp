import { combineReducers } from 'redux'

import auth from './auth'
import errors from './errors'
import messages from './messages'


const rootReducer = combineReducers({
    auth:auth,
    errors:errors,
    messages:messages,
})

export default rootReducer