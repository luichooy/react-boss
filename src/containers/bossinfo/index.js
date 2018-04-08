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
class Bossinfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      avatar: '',
      money: '',
      job: '',
      company: '',
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
        <NavBar>BOSS完善信息页面</NavBar>
        <WhiteSpace/>
        {this.state.avatar
          ? <div>已选择头像：<img src={require(`../../assets/img/${this.state.avatar}.png`)} alt="头像"/></div>
          : <div>请选择头像</div>
        }
        <WhiteSpace/>
        <AvatarSelector onSelect={this.selectAvatar}></AvatarSelector>
        <List>
          <InputItem onChange={(val) => this.handleChange('job', val)}>招聘职位</InputItem>
          <InputItem onChange={(val) => this.handleChange('company', val)}>公司名称</InputItem>
          <InputItem onChange={(val) => this.handleChange('money', val)}>职位薪资</InputItem>
          <TextareaItem
            onChange={(val) => this.handleChange('profile', val)}
            rows={3}
            autoHeight
            title="职位要求"
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

export default Bossinfo;