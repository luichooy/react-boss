/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-08 10:13
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */

import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {NavBar, TabBar} from 'antd-mobile';
import {connect} from 'react-redux';
import {NavLinkBar} from '../../components'
import Boss from '../boss';
import Genius from '../genius';
import Chat from '../chat';
import Center from '../center';

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
        path: '/center',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: Center
      },
    ];
    const {pathname} = this.props.location;
    return (
      <div>
        <NavBar className="fix-header">{navList.find(nav => nav.path === pathname).title}</NavBar>
        <div className="content">
          <Switch>
            {navList.map(nav => (
              <Route key={nav.path} path={nav.path} component={nav.component}></Route>
            ))}
          </Switch>
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    );
  }
}

export default Dashboard;


