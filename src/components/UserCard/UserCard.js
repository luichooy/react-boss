/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-08 15:44
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd-mobile';

class UserCard extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };
  
  render () {
    const user = this.props.user;
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <Card>
        <Header
          title={user.username}
          thumb={require(`../../assets/img/${user.avatar}.png`)}
          extra={<span>{user.job}</span>}
        />
        <Body>
        {user.type === 'boss' ? <p>公司名称：{user.company}</p> : null}
        {user.profile.split('\n').map(row => (
          <div key={row}>{row}</div>
        ))}
        {user.type === 'boss' ? <p>薪资范围：{user.money}</p> : null}
        </Body>
      </Card>
    );
  }
}

export default UserCard;

