import {returnErrors, createMessage} from './messages'
import { configHeader } from './auth'
import nprogress from 'nprogress'
import { actions_types } from '../action-types/types';
import apiClient from '../../config/apiConfig';

// Get trining category
export const loadTrainingCategory = () => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_TRAINING_CATEGORY});
    return apiClient.get('/api/v1/t-category',configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.GET_TRAINING_CATEGORY,
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
// Add a training
export const addTrainingCategory = (vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.ADDING_TRAINING_CATEGORY});
    nprogress.start()
    return apiClient.post('/api/v1/t-category',vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Training category successfully created'}))
            dispatch({
                type:actions_types.ADD_TRAINING_CATEGORY,
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

// update training
export const updateTrainingCategory = (vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.UPDATING_TRAINING_CATEGORY});
    nprogress.start()
    return apiClient.put(`/api/v1/t-category`,vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Training category successfully updated'}))
            dispatch({
                type:actions_types.UPDATE_TRAINING_CATEGORY,
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

// Delete Training
export const deleteTrainingCategory = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.DELETING_TRAINING_CATEGORY});
    nprogress.start()
    return apiClient.delete(`/api/v1/training/delete/${id}`, configHeader(getState))
        .then(()=>{
            dispatch(createMessage({itemAdded:'Training category successfully deleted'}))
            dispatch({
                type:actions_types.DELETE_TRAINING_CATEGORY,
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