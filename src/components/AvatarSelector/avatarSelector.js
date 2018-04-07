/**
 * Created by Administrator on 2018/4/7.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'antd-mobile';

class AvatarSelector extends Component {
  
  static propTypes = {
    onSelect: PropTypes.func.isRequired
  };
  
  constructor (props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick (elem) {
    this.props.onSelect(elem.text);
  }
  
  
  render () {
    
    const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
      .split(',')
      .map(avatar => {
        return {
          icon: require(`../../assets/img/${avatar}.png`),
          text: avatar
        };
      });
    
    return (
      <div>
        <Grid
          data={avatarList}
          onClick={this.handleClick}
          columnNum={5}
        />
      </div>
    );
  }
}


export default AvatarSelector;