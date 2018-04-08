/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-08 15:59
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {WingBlank, WhiteSpace} from 'antd-mobile';
import {UserCard} from "../index";

class UserList extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired
  };
  
  render () {
    const userList = this.props.userList;
    
    return (
      <WingBlank>
        <WhiteSpace/>
        {userList.map(user => (
          user.avatar
            ? <UserCard key={user._id} user={user}></UserCard>
            : null
        ))}
      </WingBlank>
    );
  }
}

export default UserList;

