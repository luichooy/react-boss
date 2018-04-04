/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-03 18:51
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


import React, {Component} from 'react';

import {Logo} from '../../components/index';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';

class Login extends Component {
  constructor (props) {
    super(props);
    this.register = this.register.bind(this);
  }
  
  register () {
    this.props.history.push('/register');
  }
  
  render () {
    return (
      <div className="login-wrapper">
        <Logo/>
        <WingBlank>
          <List>
            <InputItem>用户：</InputItem>
            <WhiteSpace/>
            <InputItem type="password">密码：</InputItem>
          </List>
          <WhiteSpace/>
          <Button type="primary">登陆</Button>
          <WhiteSpace/>
          <Button onClick={this.register} type="primary">注册</Button>
        </WingBlank>
      </div>
    );
  }
}


export default Login;