import { combineReducers } from 'redux'

import auth from './auth'
import errors from './errors'
import messages from './messages'
import users from './users'
import vendors from './vendors'
import smes from './smes'

const rootReducer = combineReducers({
    auth:auth,
    errors:errors,
    messages:messages,
    users:users,
    vendors:vendors,
    smes:smes
})

export default rootReducer