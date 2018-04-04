/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-04 13:42
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

@withRouter
class Auth extends Component {
  componentDidMount () {
    const publicList = ['/login', '/register'];
    const pathname = this.props.location.pathname;
    if (publicList.indexOf(pathname) > -1) {
      return null;
    }
    
    this.getUser();
  }
  
  getUser () {
    axios.get('/user/info')
    .then(data => {
      if (data.code === 0) {
        if (data.data.isLogin === 0) {
        
        } else {
          this.props.history.push('/login');
        }
      } else {
        console.log(`data.code + data.message`);
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  render () {
    return null;
  }
}

export default Auth;

