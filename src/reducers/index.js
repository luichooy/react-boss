/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-03 18:32
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


import {combineReducers} from 'redux';

const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';

export function counter (state = 10,action){
  switch(action.type){
    case ADD_GUN:
      return ++state;
    case REMOVE_GUN:
      return --state;
    default:
      return state;
  }
}

export default combineReducers({
  counter
});
