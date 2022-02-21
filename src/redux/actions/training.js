import {returnErrors, createMessage} from './messages'
import { configHeader } from './auth'
import nprogress from 'nprogress'
import { actions_types } from '../action-types/types';
import apiClient from '../../config/apiConfig';

// Get trining category
export const loadTrainingCategory = () => (dispatch,getState) =>{
    // dispatch({type: actions_types.GETTING_TRAINING_CATEGORY});
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
export const loadTrainingTrainers = () => (dispatch,getState) =>{
    // dispatch({type: actions_types.GETTING_TRAINING_CATEGORY});
    return apiClient.get('/api/v1/user/nnp-users',configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.GET_TRAINERS,
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
export const addTraining = (vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.ADDING_TRAINING});
    nprogress.start()
    return apiClient.post('/api/v1/training',vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Training successfully created'}))
            dispatch({
                type:actions_types.ADD_TRAINING,
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

// get training action
export const loadTrainings = () => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_TRAINING});
    return apiClient.get('/api/v1/training',configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.GET_TRAINING,
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

// get single trainig action
export const loadTraining = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_TRAINING});
    return apiClient.get(`/api/v1/training/${id}`,configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.GET_SINGLE_TRAINING,
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

// update training
export const updateTraining = (id,vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.UPDATING_TRAINING});
    nprogress.start()
    return apiClient.put(`/api/v1/training/edit-training/${id}`,vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Training successfully updated'}))
            dispatch({
                type:actions_types.UPDATE_TRAINING,
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
export const deleteTraining = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.DELETING_TRAINING});
    nprogress.start()
    return apiClient.delete(`/api/v1/training/delete/${id}`, configHeader(getState))
        .then(()=>{
            dispatch(createMessage({itemAdded:'Training successfully deleted'}))
            dispatch({
                type:actions_types.DELETE_TRAINING,
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