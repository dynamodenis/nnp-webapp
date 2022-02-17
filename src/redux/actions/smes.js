import {returnErrors, createMessage} from './messages'
import { configHeader } from './auth'
import nprogress from 'nprogress'
import { actions_types } from '../action-types/types';
import apiClient from '../../config/apiConfig';

// Add a sme
export const addSmes = (vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.ADDING_SME});
    nprogress.start()
    return apiClient.post('/api/v1/smes',vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Sme successfully created'}))
            dispatch({
                type:actions_types.ADD_SME,
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

// get smes action
export const loadSmes = () => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_SME});
    return apiClient.get('/api/v1/smes',configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.GET_SME,
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

// update sme
export const updateSme = (id,sme) => (dispatch,getState) =>{
    dispatch({type: actions_types.UPDATING_SME});
    nprogress.start()
    return apiClient.put(`/api/v1/smes/edit-sme/${id}`,sme, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Sme successfully updated'}))
            dispatch({
                type:actions_types.UPDATE_SME,
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
export const deleteSme = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.DELETING_SME});
    nprogress.start()
    return apiClient.delete(`/api/v1/smes/delete/${id}`, configHeader(getState))
        .then(()=>{
            dispatch(createMessage({itemAdded:'Sme successfully deleted'}))
            dispatch({
                type:actions_types.DELETE_SME,
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