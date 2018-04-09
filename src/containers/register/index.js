/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-03 18:51
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {register} from "../../reducers/user";
import {FormHOC} from '../../components';

import {Logo} from '../../components';
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile';

@connect(
  state => state.User,
  {register}
)
@FormHOC
class Register extends Component {
  constructor (props) {
    super(props);
    
    this.handleRegister = this.handleRegister.bind(this);
  }
  
  componentDidMount () {
    console.log(this.props);
    this.props.handleChange('type', 'genius');
  }
  
  handleRegister () {
    this.props.register(this.props.state);
  }
  
  render () {
    const RadioItem = Radio.RadioItem;
    return (
      <div className="register-wrapper">
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo/>
        <WingBlank>
          {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
          <List>
            <InputItem onChange={v => this.props.handleChange('username', v)}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem onChange={v => this.props.handleChange('password', v)} type="password">密码：</InputItem>
            <WhiteSpace/>
            <InputItem onChange={v => this.props.handleChange('repeatPassword', v)} type="password">确认密码：</InputItem>
            <WhiteSpace/>
            <RadioItem
              checked={this.props.state.type === 'genius'}
              onChange={() => this.props.handleChange('type', 'genius')}
            >
              牛人
            </RadioItem>
            <RadioItem
              checked={this.props.state.type === 'boss'}
              onChange={() => this.props.handleChange('type', 'boss')}
            >
              BOSS
            </RadioItem>
          </List>
          <WhiteSpace/>
          <Button onClick={this.handleRegister} type="primary">注册</Button>
        </WingBlank>
      </div>
    );
  }
}


export default Register;