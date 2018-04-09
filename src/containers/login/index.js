/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-03 18:51
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../reducers/user';
import {Logo} from '../../components/index';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import {FormHOC} from '../../components';


@connect(
  state => state.User,
  {login}
)
@FormHOC
class Login extends Component {
  constructor (props) {
    super(props);
    
    this.handleLogin = this.handleLogin.bind(this);
    this.register = this.register.bind(this);
  }
  
  handleLogin () {
    this.props.login(this.props.state);
  }
  
  register () {
    this.props.history.push('/register');
  }
  
  render () {
    return (
      <div className="login-wrapper">
        {this.props.redirectTo && this.props.redirectTo !== '/login' ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo/>
        <WingBlank>
          {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
          <List>
            <InputItem
              onChange={val => this.props.handleChange('username', val)}
            >
              用户：
            </InputItem>
            <WhiteSpace/>
            <InputItem
              onChange={val => this.props.handleChange('password', val)}
              type="password"
            >
              密码：
            </InputItem>
          </List>
          <WhiteSpace/>
          <Button type="primary" onClick={this.handleLogin}>登陆</Button>
          <WhiteSpace/>
          <Button onClick={this.register} type="primary">注册</Button>
        </WingBlank>
      </div>
    );
  }
}


export default Login;