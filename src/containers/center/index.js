/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-08 14:08
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Result, List, WhiteSpace, Modal} from 'antd-mobile';
import browserCookies from 'browser-cookies';
import {logout} from '../../actions/user';

@connect(
  state => state,
  {logout}
)
class Center extends Component {
  constructor (props) {
    super(props);
    
    this.handlelogout = this.handlelogout.bind(this);
  }
  
  handlelogout () {
    const alert = Modal.alert;
    alert('退出登录', '您确定退出登陆吗？', [
      {text: '取消', onPress: () => console.log('cancel')},
      {
        text: '确定',
        onPress: () => {
          browserCookies.erase('token');
          this.props.logout();
        }
      }
    ]);
  }
  
  render () {
    const User = this.props.User;
    const Item = List.Item;
    const Brief = Item.Brief;
    return User.avatar
      ? (
        <div>
          <Result
            img={<img src={require(`../../assets/img/${User.avatar}.png`)} alt="用户头像" style={{width: 60}}/>}
            title={User.username}
            message={User.type === 'boss' ? User.company : null}
          />
          
          <List renderHeader={() => '简介'}>
            <Item multipleLine>
              {User.job}
              {User.profile.split('\n').map(row => (
                <Brief key={row}>{row}</Brief>
              ))}
              {User.money ? <Brief>薪资范围：{User.money}</Brief> : null}
            </Item>
          </List>
          <WhiteSpace/>
          <List>
            <Item onClick={this.handlelogout}>退出登录</Item>
          </List>
        </div>
      )
      : <Redirect to={User.redirectTo}/>;
  }
}

export default Center;