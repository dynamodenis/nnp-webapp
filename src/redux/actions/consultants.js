import {returnErrors, createMessage} from './messages'
import { configHeader } from './auth'
import nprogress from 'nprogress'
import { actions_types } from '../action-types/types';
import apiClient from '../../config/apiConfig';

// Add a consultant
export const addConsultant = (vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.ADDING_CONSULTANT});
    nprogress.start()
    return apiClient.post('/api/v1/consultants',vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Consultant successfully created'}))
            dispatch({
                type:actions_types.ADD_CONSULTANT,
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

// get consultants action
export const loadConsultants = () => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_CONSULTANT});
    return apiClient.get('/api/v1/consultants',configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.GET_CONSULTANT,
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

// update consultant
export const updateConsultant = (id,vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.UPDATING_CONSULTANT});
    nprogress.start()
    return apiClient.put(`/api/v1/consultants/edit-consultant/${id}`,vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Consultant successfully updated'}))
            dispatch({
                type:actions_types.UPDATE_CONSULTANT,
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

// Delete CONSULTANT
export const deleteConsultant = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.DELETING_CONSULTANT});
    nprogress.start()
    return apiClient.delete(`/api/v1/consultants/delete/${id}`, configHeader(getState))
        .then(()=>{
            dispatch(createMessage({itemAdded:'Consultant successfully deleted'}))
            dispatch({
                type:actions_types.DELETE_CONSULTANT,
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