/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-04 16:15
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOAD_DATA = 'LOAD_DATA';
const ERROR_MSG = 'ERROR_MSG';


export function loginSuccess (data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data
  };
}

export function registerSuccess (data) {
  return {
    type: REGISTER_SUCCESS,
    payload: data
  };
}

export function loadData (data) {
  return {
    type: LOAD_DATA,
    payload: data
  };
}

export function errorMsg (msg) {
  return {msg, type: ERROR_MSG};
}