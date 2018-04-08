/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-08 14:05
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserList} from '../../reducers/chat';
import {UserList} from "../../components";


@connect(
  state => state.Chat,
  {getUserList}
)
class Boss extends Component {
  
  componentDidMount () {
    this.props.getUserList('genius');
  }
  
  render () {
    
    return (
      <UserList userList={this.props.userList}></UserList>
    );
  }
}

export default Boss;