import {returnErrors, createMessage} from './messages'
import { configHeader } from './auth'
import nprogress from 'nprogress'
import { actions_types } from '../action-types/types';
import apiClient from '../../config/apiConfig';

// Load user roles
export const loadUserRoles = () => (dispatch,getState) =>{
    return apiClient.get('/api/v1/user/user-roles',configHeader(getState))
        .then(res=>{
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

// Add a user
export const addUser = (role) => (dispatch,getState) =>{
    dispatch({type: actions_types.ADDING_USER});
    nprogress.start()
    return apiClient.post('/api/v1/user',role, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'User successfully created'}))
            dispatch({
                type:actions_types.ADD_USER,
                payload:res?.data
            })
            nprogress.done();
            return "success";
        })
        .catch(err => {
            dispatch(returnErrors(err.response?.data, err.response?.status))
            dispatch({
                type:actions_types.ACTION_FAIL,
            })
            nprogress.done()
        })
}