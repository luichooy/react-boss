/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-08 10:55
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {TabBar} from 'antd-mobile';

@withRouter
class NavLinkBar extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };
  
  constructor (props) {
    super(props);
  }
  
  render () {
    const Item = TabBar.Item;
    const navList = this.props.data.filter(nav => !nav.hide);
    console.log(navList);
    return (
      <div>
        <TabBar>
          {navList.map(nav => (
            <Item
              key={nav.path}
              title={nav.text}
              icon={{uri: require(`../../assets/img/${nav.icon}.png`)}}
              selectedIcon={{uri: require(`../../assets/img/${nav.icon}-active.png`)}}
              selected={nav.path === this.props.location.pathname}
              onPress={() => {
                this.props.history.push(nav.path);
              }}
            >
            </Item>
          ))}
        </TabBar>
      </div>
    );
  }
}


export default NavLinkBar;