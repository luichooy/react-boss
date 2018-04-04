/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-04 10:09
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */



import React, {Component} from 'react';
import './logo.css';
import logoImg from './job.png';

class Logo extends Component{
  render(){
    return (
      <div className="logo-container">
        <img src={logoImg} alt="logo"/>
      </div>
    );
  }
}

export default Logo;
