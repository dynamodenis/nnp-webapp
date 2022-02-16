import { combineReducers } from 'redux'

import auth from './auth'
import errors from './errors'
import messages from './messages'
import users from './users'
import vendors from './vendors'

const rootReducer = combineReducers({
    auth:auth,
    errors:errors,
    messages:messages,
    users:users,
    vendors:vendors
})

export default rootReducer