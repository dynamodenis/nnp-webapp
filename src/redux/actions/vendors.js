import {returnErrors, createMessage} from './messages'
import { configHeader } from './auth'
import nprogress from 'nprogress'
import { actions_types } from '../action-types/types';
import apiClient from '../../config/apiConfig';

// Add a vendor
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

// update vendor
export const updateVendor = (id,vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.UPDATING_VENDOR});
    nprogress.start()
    return apiClient.put(`/api/v1/vendors/edit-vendor/${id}`,vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Vendor successfully updated'}))
            dispatch({
                type:actions_types.UPDATE_VENDOR,
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

// Delete user
export const deleteVendor = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.DELETING_VENDOR});
    nprogress.start()
    return apiClient.delete(`/api/v1/vendors/delete/${id}`, configHeader(getState))
        .then(()=>{
            dispatch(createMessage({itemAdded:'Vendor successfully deleted'}))
            dispatch({
                type:actions_types.DELETE_VENDOR,
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