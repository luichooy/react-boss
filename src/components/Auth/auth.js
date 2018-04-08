/**
 * @Project Name: react-boss
 * @Author: luichooy
 * @Date: 2018-04-04 13:42
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */


import {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadData} from '../../actions/user';

@withRouter
@connect(
  null,
  {loadData}
)
class Auth extends Component {
  componentDidMount () {
    const publicList = ['/login', '/register'];
    const {pathname} = this.props.location;
    if (publicList.indexOf(pathname) > -1) {
      return null;
    }
    this.getUser();
  }
  
  getUser () {
    axios.get('/user/info')
    .then(data => {
      if (data.code === 0) {
        this.props.loadData(data.data);
      } else {
        this.props.history.push('/login');
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

