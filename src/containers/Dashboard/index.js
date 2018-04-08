/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-08 10:13
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */

import React, {Component} from 'react';
import {NavBar, TabBar} from 'antd-mobile';
import {connect} from 'react-redux';
import {NavLinkBar} from '../../components'

function Boss () {
  return <h2>BOSS</h2>
}

function Genius () {
  return <h2>Genius</h2>
}

function Chat () {
  return <h2>Chat</h2>
}

function User () {
  return <h2>User</h2>
}

@connect(
  state => state
)
class Dashboard extends Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    const User = this.props.User;
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: User.type === 'genius'
      },
      {
        path: '/genius',
        text: 'BOSS',
        icon: 'job',
        title: 'BOSS列表',
        component: Genius,
        hide: User.type === 'boss'
      },
      {
        path: '/chat',
        text: '消息',
        icon: 'chat',
        title: '消息列表',
        component: Chat
      },
      {
        path: '/user',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: User
      },
    ];
    const Item = TabBar.Item;
    const {pathname} = this.props.location;
    return (
      <div>
        <NavBar>{navList.find(nav => nav.path === pathname).title}</NavBar>
        <h2>Content</h2>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    );
  }
}

export default Dashboard;


