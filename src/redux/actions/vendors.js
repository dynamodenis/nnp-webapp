import {returnErrors, createMessage} from './messages'
import { configHeader } from './auth'
import nprogress from 'nprogress'
import { actions_types } from '../action-types/types';
import apiClient from '../../config/apiConfig';

// Add a user
export const addVendor = (vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.ADDING_VENDOR});
    nprogress.start()
    return apiClient.post('/api/v1/vendors',vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Vendor successfully created'}))
            dispatch({
                type:actions_types.ADD_VENDOR,
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

// get vendors action
export const loadVendors = () => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_VENDOR});
    return apiClient.get('/api/v1/vendors',configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.GET_VENDOR,
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

// Delete user
export const deleteUser = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.DELETING_USER});
    nprogress.start()
    return apiClient.delete(`/api/v1/user/delete/${id}`, configHeader(getState))
        .then(()=>{
            dispatch(createMessage({itemAdded:'User successfully deleted'}))
            dispatch({
                type:actions_types.DELETE_USER,
                payload:id
            })
            nprogress.done()
            return "success";
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type:actions_types.ACTION_FAIL,
            })
            nprogress.done()
        })
}