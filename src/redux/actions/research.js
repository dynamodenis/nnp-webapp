import {returnErrors, createMessage} from './messages'
import { configHeader } from './auth'
import nprogress from 'nprogress'
import { actions_types } from '../action-types/types';
import apiClient from '../../config/apiConfig';

// Add a Research
export const addResearch = (vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.ADDING_RESEARCH});
    nprogress.start()
    return apiClient.post('/api/v1/research',vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Research successfully created'}))
            dispatch({
                type:actions_types.ADD_RESEARCH,
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

export const loadSelectedImage = (image) => (dispatch) => {
    dispatch({
        type:actions_types.SELECTED_RESEARCH_IMAGE,
        payload:image
    })
}

// get Research action
export const loadResearches = () => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_RESEARCH});
    return apiClient.get('/api/v1/research',configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.GET_RESEARCH,
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

// get single research action
export const loadResearch = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_RESEARCH});
    return apiClient.get(`/api/v1/research/${id}`,configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.GET_SINGLE_RESEARCH,
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

// update ResearchS
export const updateResearch = (id,sme) => (dispatch,getState) =>{
    dispatch({type: actions_types.UPDATING_RESEARCH});
    nprogress.start()
    return apiClient.put(`/api/v1/research/edit-research/${id}`,sme, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Research successfully updated'}))
            dispatch({
                type:actions_types.UPDATE_RESEARCH,
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

// Delete Research
export const deleteResearch = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.DELETING_RESEARCH});
    nprogress.start()
    return apiClient.delete(`/api/v1/research/delete/${id}`, configHeader(getState))
        .then(()=>{
            dispatch(createMessage({itemAdded:'Research successfully deleted'}))
            dispatch({
                type:actions_types.DELETE_RESEARCH,
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