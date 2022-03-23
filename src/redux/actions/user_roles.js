import {returnErrors} from './messages'
import { configHeader } from './auth'
import { actions_types } from '../action-types/types';
import apiClient from '../../config/apiConfig';

// Load user roles
export const loadUserRoles = () => (dispatch,getState) =>{
    console.log(getState)
    return apiClient.get('/api/v1/user/user-roles',configHeader(getState))
        .then(res=>{
            console.log("response", res)
            dispatch({
                type:actions_types.USER_ROLES,
                payload:res?.data || []
            })
            return "success";
        })
        .catch(err => {
            dispatch(returnErrors(err.response?.data, err.response?.status))
            dispatch({
                type:actions_types.ACTION_FAIL,
            })
        })
}
