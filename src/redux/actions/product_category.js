import {returnErrors, createMessage} from './messages'
import { configHeader } from './auth'
import nprogress from 'nprogress'
import { actions_types } from '../action-types/types';
import apiClient from '../../config/apiConfig';

// Get trining category
export const loadProductCategory = () => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_PRODUCT_CATEGORY});
    return apiClient.get('/api/v1/p-category',configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.GET_PRODUCT_CATEGORY,
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
export const addProductCategory = (vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.ADDING_PRODUCT_CATEGORY});
    nprogress.start()
    return apiClient.post('/api/v1/p-category',vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Product category successfully created'}))
            dispatch({
                type:actions_types.ADD_PRODUCT_CATEGORY,
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
export const updateProductCategory = (id, vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.UPDATING_PRODUCT_CATEGORY});
    nprogress.start()
    return apiClient.put(`/api/v1/p-category`,vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Product category successfully updated'}))
            dispatch({
                type:actions_types.UPDATE_PRODUCT_CATEGORY,
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
export const deleteProductCategory = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.DELETING_PRODUCT_CATEGORY});
    nprogress.start()
    return apiClient.delete(`/api/v1/p-category/delete/${id}`, configHeader(getState))
        .then(()=>{
            dispatch(createMessage({itemAdded:'Product category successfully deleted'}))
            dispatch({
                type:actions_types.DELETE_PRODUCT_CATEGORY,
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