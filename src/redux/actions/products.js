import {returnErrors, createMessage} from './messages'
import { configHeader } from './auth'
import nprogress from 'nprogress'
import { actions_types } from '../action-types/types';
import apiClient from '../../config/apiConfig';

// Add a product
export const addProduct = (vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.ADDING_PRODUCT});
    nprogress.start()
    return apiClient.post('/api/v1/products',vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Product successfully created'}))
            dispatch({
                type:actions_types.ADD_PRODUCT,
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

// get product action
export const loadProducts = () => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_PRODUCT});
    return apiClient.get('/api/v1/products',configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.GET_PRODUCT,
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

// update PRODUCTS
export const updateProducts = (id,sme) => (dispatch,getState) =>{
    dispatch({type: actions_types.UPDATING_PRODUCT});
    nprogress.start()
    return apiClient.put(`/api/v1/products/edit-product/${id}`,sme, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Product successfully updated'}))
            dispatch({
                type:actions_types.UPDATE_PRODUCT,
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

// Delete PRODUCT
export const deleteProduct = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.DELETING_PRODUCT});
    nprogress.start()
    return apiClient.delete(`/api/v1/product/delete/${id}`, configHeader(getState))
        .then(()=>{
            dispatch(createMessage({itemAdded:'Product successfully deleted'}))
            dispatch({
                type:actions_types.DELETE_PRODUCT,
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