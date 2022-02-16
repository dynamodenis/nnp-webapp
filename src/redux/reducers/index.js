import { combineReducers } from 'redux'

import auth from './auth'
import errors from './errors'
import messages from './messages'
import users from './users'

const rootReducer = combineReducers({
    auth:auth,
    errors:errors,
    messages:messages,
    users:users
})

export default rootReducer