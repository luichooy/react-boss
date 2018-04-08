import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './http';

import reducers from './reducers';
import Login from './containers/login';
import Register from './containers/register';
import {Auth} from './components';
import Bossinfo from './containers/Bossinfo';
import Geniusinfo from './containers/Geniusinfo';
import Dashboard from './containers/Dashboard';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f  // redux 调试工具
));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Auth></Auth>
        <Switch>
          <Route path="/geniusinfo" component={Geniusinfo}></Route>
          <Route path="/bossinfo" component={Bossinfo}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Route component={Dashboard}></Route>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
