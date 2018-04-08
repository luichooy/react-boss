/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-04 15:45
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */

import axios from 'axios';
import {authSuccess, errorMsg} from "../actions/user";

import {getRedirectPath} from '../util/util';

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const LOAD_DATA = 'LOAD_DATA';
const ERROR_MSG = 'ERROR_MSG';
const LOGOUT = 'LOGOUT';

const initialState = {
  redirectTo: '',
  msg: '',
  username: '',
  type: ''
};

export function User (state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        redirectTo: getRedirectPath(action.payload),
        msg: '',
        ...action.payload
      };
    case LOAD_DATA:
      return {...state, ...action.payload};
    case ERROR_MSG:
      return {...state, isLogin: false, msg: action.msg};
    case LOGOUT:
      return {...initialState, redirectTo: '/login'};
    default:
      return state;
  }
}


export function login ({username, password}) {
  if (!username || !password) {
    return errorMsg('用户名和密码必须输入');
  }
  
  return dispatch => {
    axios.post('/user/login', {username, password})
    .then(data => {
      if (data.code === 0) {
        dispatch(authSuccess(data.data));
      } else {
        dispatch(errorMsg(data.message));
      }
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export function register ({username, password, repeatPassword, type}) {
  if (!username || !password) {
    return errorMsg('用户名密码必须输入');
  }
  
  if (password !== repeatPassword) {
    return errorMsg('两次出入的密码不一致');
  }
  
  return dispatch => {
    axios.post('/user/register', {username, password, type})
    .then(data => {
      if (data.code === 0) {
        dispatch(authSuccess({username, password, type}));
      } else {
        console.log(`${data.code}：${data.message}`);
        dispatch(errorMsg(data.message));
      }
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export function update (data) {
  return dispatch => {
    axios.post('/user/update', data)
    .then(data => {
      if (data.code === 0) {
        dispatch(authSuccess(data.data));
      } else {
        console.log(`${data.code}：${data.message}`);
        dispatch(errorMsg(data.message));
      }
    })
    .catch(error => {
      console.log(error);
    })
  }
}



