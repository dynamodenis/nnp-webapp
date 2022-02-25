import axios from 'axios'
import {returnErrors, createMessage} from './messages'
import { actions_types } from '../action-types/types';
import apiClient from '../../config/apiConfig';



// GET USER USING TOKEN
export const loadUser = (id) => (dispatch, getState)=>{
    //User Loading
    // dispatch({type: USER_LOADING});
    
    // get the user
    axios.get(`/api/v1/user/searchById/${id}`,configHeader(getState))
    .then(res =>{
        dispatch({
            type:actions_types.USER_LOADED,
            payload:res.data
        });
    })
    .catch(err=>{
        dispatch({
            type:actions_types.LOGIN_FAIL,
        });
        // dispatch(returnErrors(err.response.data,err.response.status))
    });
}

// LOGIN A USER
export const login = (credentials) => (dispatch)=>{
    // Set Headers
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    // create the user details to send as json
    const body =JSON.stringify(credentials)

    //User Loading
    dispatch({type: actions_types.USER_LOADING});
    // console.log(process.env.NODE_TLS_REJECT_UNAUTHORIZED="0");
      // "proxy": "http://165.232.34.95:3005",
      apiClient.post('/api/v1/user/login',body,config)
    .then(res =>{
        dispatch(createMessage({loginSuccess:'Logged in successfully'}))
        dispatch({
            type:actions_types.LOGIN_SUCCESS,
            payload:res.data?.data
        });
    })
    .catch(err=>{
        console.log("login error",err.response?.status)
        dispatch(returnErrors(err.response?.data,err.response?.status))
        dispatch({
            type:actions_types.LOGIN_FAIL,
            payload: err.response?.data
        });
    });
}

// register user
export const registerUser = (credentials) => (dispatch)=>{
    // Set Headers
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    // create the user details to send as json
    const body =JSON.stringify(credentials)
    //User Loading
    dispatch({type: actions_types.USER_LOADING});
    return apiClient.post('/api/v1/user/user-registration',body,config)
    .then(res =>{
        dispatch(createMessage({loginSuccess:'Registration successful.'}))
        dispatch({
            type:actions_types.REGISTRATION_SUCCESS,
            payload:res.data?.data
        });
        return "success";
    })
    .catch(err=>{
        console.log("registartion error",err.response)
        dispatch(returnErrors(err.response?.data,err.response?.status))
        dispatch({
            type:actions_types.REGISTRATION_FAIL,
            payload: err.response?.data
        });
    });
}


// verify user
export const verifyUser = (credentials) => (dispatch)=>{
    // Set Headers
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    // create the user details to send as json
    const body =JSON.stringify(credentials)
    //User Loading
    dispatch({type: actions_types.USER_LOADING});
    return apiClient.post('/api/v1/user/verify-phoneNumber',body,config)
    .then(res =>{
        dispatch(createMessage({loginSuccess:'User verification successful.'}))
        dispatch({
            type:actions_types.USER_VERIFICATION,
            payload:res.data?.data
        });
        return "success";
    })
    .catch(err=>{
        console.log("registartion error",err.response)
        dispatch(returnErrors(err.response?.data,err.response?.status))
        dispatch({
            type:actions_types.REGISTRATION_FAIL,
            payload: err.response?.data
        });
    });
}


// logout user
export const logout = () => (dispatch, getState)=>{

    // Get token from state
    const token =getState().auth.token;

    if(token){
        dispatch(createMessage({logoutSuccess:'Logged out successfully'}))
        dispatch({ 
            type:actions_types.LOGOUT_SUCCESS
        });
    }else{
        dispatch(createMessage({logoutError:'Logged out failed'}))
    }
}

// logout user when token expires
export const tokenExpire = () => (dispatch, getState)=>{

    // Get token from state
    const token =getState().auth.token;

    if(token){
        dispatch({ 
            type:actions_types.LOGOUT_SUCCESS
        });
    }else{
        dispatch(createMessage({logoutError:'Logged out failed'}))
    }
}

// Setup the config with the token

export const configHeader = getState =>{
    // Get token from state
    const token =getState().auth.token;

    // Set Headers
    const config = {
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    }

    // If token is set add the token to the headers
    if(token){
        config.headers['Authorization']=`Bearer ${token}`
    }
    return config
}