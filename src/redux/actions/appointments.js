import {returnErrors, createMessage} from './messages'
import { configHeader } from './auth'
import nprogress from 'nprogress'
import { actions_types } from '../action-types/types';
import apiClient from '../../config/apiConfig';

// Add appointment
export const addAppointment = (vendor) => (dispatch,getState) =>{
    dispatch({type: actions_types.ADDING_APPOINTMENT});
    nprogress.start()
    return apiClient.post('/api/v1/consultants/new-appointment',vendor, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Appointment successfully created'}))
            dispatch({
                type:actions_types.ADD_APPOINTMENT,
                payload:res?.data
            })
            nprogress.done();
            return "success";
        })
        .catch(err => {
            dispatch(returnErrors(err.response?.data?.message, err.response?.status))
            dispatch({
                type:actions_types.ACTION_FAIL,
            })
            nprogress.done()
        })
}

// get appointment action
export const loadAppointments = () => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_APPOINTMENT});
    return apiClient.get('/api/v1/consultants/getAllAppointments',configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.GET_APPOINTMENT,
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

// get USER appointment action
export const loadUserAppointments = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_APPOINTMENT});
    return apiClient.get(`/api/v1/consultants/getAllUserAppointments/${id}`,configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.USER_APPOINTMENT,
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

// get consultant appointment action
export const loadConsultantAppointments = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_APPOINTMENT});
    return apiClient.get(`/api/v1/consultants/getAllConsultantAppointments/${id}`,configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.USER_APPOINTMENT,
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

// get filter USER appointment action
export const loadFilterUserAppointments = (id,status) => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_APPOINTMENT});
    return apiClient.get(`/api/v1/consultants/filterUserAppointments/${id}/${status}`,configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.USER_APPOINTMENT,
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

// get filter Consultant appointment action
export const loadFilterConsultantAppointments = (id,status) => (dispatch,getState) =>{
    dispatch({type: actions_types.GETTING_APPOINTMENT});
    return apiClient.get(`/api/v1/consultants/filterConsultantAppointments/${id}/${status}`,configHeader(getState))
        .then(res=>{
            dispatch({
                type:actions_types.USER_APPOINTMENT,
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

// update appointment
export const updateAppointment = (id,appointment) => (dispatch,getState) =>{
    dispatch({type: actions_types.UPDATING_APPOINTMENT});
    nprogress.start()
    return apiClient.put(`/api/v1/consultants/edit-appointment/${id}`,appointment, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Appointment successfully updated'}))
            dispatch({
                type:actions_types.UPDATE_APPOINTMENT,
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

// update appointment status
export const updateAppointmentStatus = (id,appointment) => (dispatch,getState) =>{
    dispatch({type: actions_types.UPDATING_APPOINTMENT});
    nprogress.start()
    return apiClient.put(`/api/v1/consultants/edit-appointment-status/${id}`,appointment, configHeader(getState))
        .then(res=>{
            dispatch(createMessage({itemAdded:'Appointment status updated'}))
            dispatch({
                type:actions_types.UPDATE_APPOINTMENT,
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

// Delete appointment
export const deleteAppointment = (id) => (dispatch,getState) =>{
    dispatch({type: actions_types.DELETING_APPOINTMENT});
    nprogress.start()
    return apiClient.delete(`/api/v1/consultants/delete-appointment/${id}`, configHeader(getState))
        .then(()=>{
            dispatch(createMessage({itemAdded:'Appointment successfully deleted'}))
            dispatch({
                type:actions_types.DELETE_APPOINTMENT,
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