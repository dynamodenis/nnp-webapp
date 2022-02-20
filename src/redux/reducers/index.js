import { combineReducers } from 'redux'

import auth from './auth'
import errors from './errors'
import messages from './messages'
import users from './users'
import vendors from './vendors'
import smes from './smes'
import consultants from './consultants'
import trainings from './trainings';
import training_category from './training_category';

const rootReducer = combineReducers({
    auth:auth,
    errors:errors,
    messages:messages,
    users:users,
    vendors:vendors,
    smes:smes,
    consultants:consultants,
    trainings,
    training_category
})

export default rootReducer