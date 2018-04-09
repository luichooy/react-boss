/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-09 10:10
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


/*
 * 高阶组件 HOC
 */

import React, {Component} from 'react';


export default function FormHOC (Comp) {
  return class WrapperComponent extends Component {
    constructor (props) {
      super(props);
      
      this.state = {};
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange (key, val) {
      console.log(key, val);
      this.setState({
        [key]: val
      });
    }
    
    render () {
      return <Comp handleChange={this.handleChange} state={this.state} {...this.props}></Comp>
    }
  }
}
