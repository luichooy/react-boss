/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-04 16:15
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */



const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';

export function registerSuccess (data) {
  return {
    type: REGISTER_SUCCESS,
    payload: data
  };
}

export function errorMsg (msg) {
  return {msg, type: ERROR_MSG};
}