import axios from 'axios';
import {isAuth,authenticate} from '../../helpers/Auth';
import {useHistory} from 'react-router-dom' 

import {
  USER_LOADED,
  USER_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_GOOGLE,
  LOGIN_GOOGLE_SUCCESS
} from './types';



// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });
  axios 
    .get('http://localhost:4000/data/api/auth/user', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
};

// --------------> Sign whith Google <------------- 
export const  SignWithGoogle = (token_id) => async (dispatch) =>{
  dispatch({
    type:AUTH_GOOGLE,
    payload: token_id
  })
}

// Register User
export const Register = ({username, password, your_lenguage,email,confirmPassword,age}) => async (dispatch) => {

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }; 

 

  // Request body
  const body = JSON.stringify({ username, password, your_lenguage, email ,confirmPassword,age});

  const res = await axios.post('http://localhost:4000/data/userSignUp', body, config)
  
  authenticate(res,()=>{
    
  })

  dispatch({
    type: REGISTER_SUCCESS,
    payload: res.data
  })
};

export const SignInGoogle = () => dispatch =>{
  return dispatch({
    type: LOGIN_GOOGLE_SUCCESS,
  })
}

// Login User
export const Login = ({email,password}) => async (dispatch) => { 
  
    dispatch({
      type: LOGIN_SUCCESS,
    })
}
  
// Logout User
export const Logout = () => dispatch => {
  dispatch({
    type: LOGOUT_SUCCESS
  })
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};