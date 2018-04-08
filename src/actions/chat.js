/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-08 15:15
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */

const USER_LIST = 'USER_LIST';

export function userList (data) {
  return {
    type: USER_LIST,
    payload: data
  };
}
