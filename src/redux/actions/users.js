import { returnErrors, createMessage } from "./messages";
import { configHeader } from "./auth";
import nprogress from "nprogress";
import { actions_types } from "../action-types/types";
import apiClient from "../../config/apiConfig";

// Add a user
export const addUser = role => (dispatch, getState) => {
  dispatch({ type: actions_types.ADDING_USER });
  nprogress.start();
  return apiClient
    .post("/api/v1/user", role, configHeader(getState))
    .then(res => {
      dispatch(createMessage({ itemAdded: "User successfully created" }));
      dispatch({
        type: actions_types.ADD_USER,
        payload: res?.data,
      });
      nprogress.done();
      return "success";
    })
    .catch(err => {
      dispatch(returnErrors(err.response?.data, err.response?.status));
      dispatch({
        type: actions_types.ACTION_FAIL,
      });
      nprogress.done();
    });
};

// get users action
export const loadUsers = () => (dispatch, getState) => {
  dispatch({ type: actions_types.GETTING_USER });
  return apiClient
    .get("/api/v1/user", configHeader(getState))
    .then(res => {
      dispatch({
        type: actions_types.GET_USER,
        payload: res?.data || [],
      });
      return "success";
    })
    .catch(err => {
      dispatch(returnErrors(err.response?.data, err.response?.status));
      dispatch({
        type: actions_types.ACTION_FAIL,
      });
    });
};

// update users
export const updateUser = (id, user) => (dispatch, getState) => {
  dispatch({ type: actions_types.UPDATING_USER });
  nprogress.start();
  return apiClient
    .put(`/api/v1/user/${id}/edit-user-details`, user, configHeader(getState))
    .then(res => {
      dispatch(createMessage({ itemAdded: "User successfully updated" }));
      dispatch({
        type: actions_types.UPDATE_USER,
        payload: res?.data,
      });
      nprogress.done();
      return "success";
    })
    .catch(err => {
      dispatch(returnErrors(err.response?.data, err.response?.status));
      dispatch({
        type: actions_types.ACTION_FAIL,
      });
      nprogress.done();
    });
};

// Delete user
export const deleteUser = id => (dispatch, getState) => {
  dispatch({ type: actions_types.DELETING_USER });
  nprogress.start();
  return apiClient
    .delete(`/api/v1/user/delete/${id}`, configHeader(getState))
    .then(() => {
      dispatch(createMessage({ itemAdded: "User successfully deleted" }));
      dispatch({
        type: actions_types.DELETE_USER,
        payload: id,
      });
      nprogress.done();
      return "success";
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actions_types.ACTION_FAIL,
      });
      nprogress.done();
    });
};

// contact us form
export const contactUser = body => (dispatch, getState) => {
  dispatch({ type: actions_types.ADDING_CONTACT });
  return apiClient
    .post("/api/v1/user/contact-us", body, configHeader(getState))
    .then(res => {
      dispatch(createMessage({ itemAdded: "Information sent successfully" }));
      dispatch({
        type: actions_types.ADD_CONTACT,
        payload: res?.data || [],
      });
      return "success";
    })
    .catch(err => {
      dispatch(returnErrors(err.response?.data, err.response?.status));
      dispatch({
        type: actions_types.ACTION_FAIL,
      });
    });
};

export const resendOtp = body => (dispatch, getState) => {
  dispatch({ type: actions_types.ADDING_OTP });
  return apiClient
    .post("/api/v1/user/resendCode", body, configHeader(getState))
    .then(res => {
      dispatch(createMessage({ itemAdded: "Otp sent successfully" }));
      dispatch({
        type: actions_types.ADD_OTP,
        payload: res?.data || [],
      });
      return "success";
    })
    .catch(err => {
      dispatch(returnErrors(err.response?.data, err.response?.status));
      dispatch({
        type: actions_types.ACTION_FAIL,
      });
    });
};

// reset-password
export const resetPassword = (data,option) => (dispatch, getState) => {
  dispatch({ type: actions_types.RESETTING_PASSWORD });
  nprogress.start();
  return apiClient.get(`/api/v1/user/reset-password/${data}/${option}`,configHeader(getState))
    .then(res => {
      dispatch(createMessage({ itemAdded: "Reset password code sent to user. Use it as your password." }));
      dispatch({
        type: actions_types.RESET_PASSWORD,
        payload: res?.data,
      });
      nprogress.done();
      return "success";
    })
    .catch(err => {
      console.log("error ", err)
      dispatch(returnErrors(err.response?.data, err.response?.status));
      dispatch({
        type: actions_types.ACTION_FAIL,
      });
      nprogress.done();
    });
};

// update-password

export const updatePassword = data => (dispatch, getState) => {
  dispatch({ type: actions_types.UPDATING_PASSWORD });
  nprogress.start();
  return apiClient
    .put("/api/v1/user/updatepassword", data, configHeader(getState))
    .then(res => {
      dispatch(createMessage({ itemAdded: "Password successfully updated." }));
      dispatch({
        type: actions_types.UPDATE_PASSWORD
      });
      nprogress.done();
      return "success";
    })
    .catch(err => {
      dispatch(returnErrors(err.response?.data, err.response?.status));
      dispatch({
        type: actions_types.ACTION_FAIL,
      });
      nprogress.done();
    });
};
