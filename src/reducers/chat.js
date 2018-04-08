/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-08 15:06
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


import axios from 'axios';
import {userList} from '../actions/chat';

const USER_LIST = 'USER_LIST';

const initialState = {
  userList: []
};


export function Chat (state = initialState, action) {
  switch (action.type) {
    case USER_LIST:
      return {...state, userList: action.payload};
    default:
      return state;
  }
}

export function getUserList (type) {
  return dispatch => {
    axios.get(`/user/list?type=${type}`)
    .then(data => {
      if (data.code === 0) {
        dispatch(userList(data.data));
      } else {
      
      }
    })
    .catch(error => {
      console.log(error);
    })
  }
}