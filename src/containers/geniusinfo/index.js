/**
 * Created by Administrator on 2018/4/7.
 */


import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {NavBar, List, InputItem, TextareaItem, Button, WingBlank, WhiteSpace} from 'antd-mobile';
import {AvatarSelector} from '../../components';

import {update} from '../../reducers/user';


@connect(
  state => state.User,
  {update}
)
class Geniusinfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      avatar: '',
      profile: ''
    };
    
    this.selectAvatar = this.selectAvatar.bind(this);
  }
  
  selectAvatar (avatar) {
    this.setState({
      avatar: avatar
    });
  }
  
  handleChange (key, val) {
    this.setState({
      [key]: val
    });
  }
  
  render () {
    const path = this.props.location.pathname;
    const redirect = this.props.redirectTo;
    return (
      <div>
        {redirect && redirect !== path ? <Redirect to={this.props.redirectTo}/> : null}
        <NavBar>牛人完善信息页面</NavBar>
        <WhiteSpace/>
        {this.state.avatar
          ? <div>已选择头像：<img src={require(`../../assets/img/${this.state.avatar}.png`)} alt="头像"/></div>
          : <div>请选择头像</div>
        }
        <WhiteSpace/>
        <AvatarSelector onSelect={this.selectAvatar}></AvatarSelector>
        <List>
          <InputItem onChange={(val) => this.handleChange('job', val)}>求职岗位</InputItem>
          <TextareaItem
            onChange={(val) => this.handleChange('profile', val)}
            rows={3}
            autoHeight
            title="个人简介"
          />
        
        </List>
        <WingBlank>
          <WhiteSpace/>
          <Button onClick={() => this.props.update(this.state)} type="primary">保存</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Geniusinfo;