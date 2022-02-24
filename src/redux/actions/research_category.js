import {returnErrors, createMessage} from './messages'
import { configHeader } from './auth'
import nprogress from 'nprogress'
import { actions_types } from '../action-types/types';
import apiClient from '../../config/apiConfig';

// Get trining category
export const loadResearchCategory = () => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_RESEARCH_CATEGORY});
    return apiClient.get('/api/v1/r-category',configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.GET_RESEARCH_CATEGORY,
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
export const addResearchCategory = (vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.ADDING_RESEARCH_CATEGORY});
    nprogress.start()
    return apiClient.post('/api/v1/r-category',vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Research category successfully created'}))
            dispatch({
                type:actions_types.ADD_RESEARCH_CATEGORY,
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
export const updateResearchCategory = (id, vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.UPDATING_RESEARCH_CATEGORY});
    nprogress.start()
    return apiClient.put(`/api/v1/r-category`,vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Research category successfully updated'}))
            dispatch({
                type:actions_types.UPDATE_RESEARCH_CATEGORY,
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
export const deleteResearchCategory = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.DELETING_RESEARCH_CATEGORY});
    nprogress.start()
    return apiClient.delete(`/api/v1/r-category/delete/${id}`, configHeader(getState))
        .then(()=>{
            dispatch(createMessage({itemAdded:'Research category successfully deleted'}))
            dispatch({
                type:actions_types.DELETE_RESEARCH_CATEGORY,
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