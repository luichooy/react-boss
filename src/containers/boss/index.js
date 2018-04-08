/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-08 14:05
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


import React, {Component} from 'react';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';
import {connect} from 'react-redux';
import {getUserList} from '../../reducers/chat';


@connect(
  state => state.Chat,
  {getUserList}
)
class Boss extends Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount () {
    console.log(this.props);
    this.props.getUserList('genius');
  }
  
  render () {
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <WingBlank>
        <WhiteSpace/>
        {this.props.userList.map(user => (
          user.avatar ?
            <Card key={user._id}>
              <Header
                title={user.username}
                thumb={require(`../../assets/img/${user.avatar}.png`)}
                extra={<span>{user.job}</span>}
              />
              <Body>
              {user.profile.split('\n').map(row => (
                <div key={row}>{row}</div>
              ))}
              </Body>
            </Card>
            : null
        ))}
      </WingBlank>
    );
  }
}

export default Boss;