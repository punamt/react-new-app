import axios from 'axios';
import {
    GET_ERRORS,
    SET_CURRENT_USER,
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE 
} from './types';

//GET current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('./api/profile') 
    .then(res => dispatch({
        type:GET_PROFILE,
        payload:res.data
    }))
    .catch(err => dispatch({
        type:GET_ERRORS,
        payload:{}
    }));

};

//Get all profile by handle
export const getProfileByHandle = (handle) => dispatch => {
    dispatch(setProfileLoading());
    axios.get(`/api/profile/${handle}`)
    .then(res => dispatch({
         type:GET_PROFILES,
         payload:res.data
    }))
    .catch(err => dispatch({
        type:GET_ERRORS,
        payload:null
    }))
};

//create profile
export const createProfile = (profileData,history) => dispatch => {
  axios.post('/api/profile', profileData)
  .then(res => history.push('/dashboard'))
  .catch(err => dispatch({
    type: GET_ERRORS,
    payload:err.response.data
  }))
};

//Add experience
export const addExperience = (expData,history) => dispatch => {
  axios.post('/api/profile/experience',expData)
  .then(res => history.push('/dashboard'))
  .catch(err => dispatch({
    type: GET_ERRORS,
    payload:err.response.data
  }))
};

//delete experience
export const deleteExperience = (id) => dispatch => {
  axios.delete(`/api/profile/experience/${id}`)
  .then(res => dispatch({
      type:GET_PROFILE,
      payload:res.data
  }))
  .catch(err=> dispatch({
      type:GET_ERRORS,
      payload:err.response.data
    }))
};

//Add education
export const addEducation = (eduData,history) => dispatch => {
    axios.post('/api/profile/education',eduData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload:err.response.data
    }))
  };


//delete education
export const deleteEducation = (id) => dispatch => {
  axios.delete(`/api/profile/education/${id}`)
  .then(res => dispatch({
      type:GET_PROFILE,
      payload:res.data
  }))
  .catch(err => dispatch({
      type:GET_ERRORS,
      payload:err.response.data
  }))
};

//GET all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios.get('/api/profile/all')
  .then(res => dispatch({
      type:GET_PROFILES,
      payload:res.data
  }))
  .catch(err => dispatch({
      type:GET_ERRORS,
      payload:null
  }))
};

//Delete account and profile
export const deleteAccount = () => dispatch => {
    if(window.confirm('Are you sure? this can NOT be undone!'))
    axios.delete('/api/profile')
    .then(res => dispatch({
        type:SET_CURRENT_USER,
        payload:{}
    }))
    .catch(err => dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    }))
};


//set profile loading
export const setProfileLoading = () =>{
    return{
        type:PROFILE_LOADING
    };
};

//clear profile
export const clearCurrentProfile = () => {
    return{
        type:CLEAR_CURRENT_PROFILE
    }
    
}