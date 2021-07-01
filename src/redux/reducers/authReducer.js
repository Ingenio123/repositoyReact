import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_TOKEN,
    LOGIN_GOOGLE_SUCCESS
  } from '../actions/types';

  let isAuth = null;
  if(localStorage.getItem('user')) isAuth =  true;

  const initialState = {
    token: localStorage.getItem('user'),
    isAuthenticated: isAuth,
    isLoading: false
  };
  
export default function casos(state = initialState, action){
    switch (action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload
        };
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false,
        };

      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
      case REGISTER_FAIL:
        localStorage.removeItem('user');
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: null,
          isLoading: false
        };
      case GET_TOKEN:
        
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          isLoading: false
        };
      case LOGIN_GOOGLE_SUCCESS:
        return {
          ...state,
          token: action.payload,
          isAuthenticated:true,
          isLoading:false
        }
      default:
        return state;
    }
  }