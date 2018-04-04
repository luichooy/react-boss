/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-03 18:51
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


import React, {Component} from 'react';

import {Logo} from '../../components';
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile';

class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
      type: 'genius'
    }
  }
  
  render () {
    const RadioItem = Radio.RadioItem;
    return (
      <div className="register-wrapper">
        <Logo/>
        <WingBlank>
          <List>
            <InputItem>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem type="password">密码：</InputItem>
            <WhiteSpace/>
            <InputItem type="password">确认密码：</InputItem>
            <WhiteSpace/>
            <RadioItem checked={this.state.type === 'genius'}>牛人</RadioItem>
            <RadioItem checked={this.state.type === 'boss'}>BOSS</RadioItem>
          </List>
          <WhiteSpace/>
          <Button type="primary">注册</Button>
        </WingBlank>
      </div>
    );
  }
}


export default Register;