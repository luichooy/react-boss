/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-04 15:45
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */

import axios from 'axios';
import {registerSuccess, errorMsg} from "../actions/user";

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';

const initState = {
  msg: '',
  isLogin: false,
  username: '',
  password: '',
  type: ''
};

export function User (state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, msg: '', isLogin: true, ...action.payload};
    case ERROR_MSG:
      return {...state, isLogin: false, msg: action.msg};
    default:
      return state;
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
        dispatch(registerSuccess(username, password, type));
      } else {
        console.log(`data.code + data.message`);
        dispatch(errorMsg(data.message));
      }
    })
    .catch(error => {
      console.log(error);
    })
  }
}



