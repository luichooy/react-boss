/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-04 16:15
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


const AUTH_SUCCESS = 'AUTH_SUCCESS';
const LOAD_DATA = 'LOAD_DATA';
const ERROR_MSG = 'ERROR_MSG';
const LOGOUT = 'LOGOUT';


export function authSuccess (data) {
  let {password, ...user} = data;  // 过滤掉password字段 ？不太明白
  return {
    type: AUTH_SUCCESS,
    payload: user
  }
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

export function logout () {
  return {type: LOGOUT}
}