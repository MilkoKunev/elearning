import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import ProxiesRegistry from './proxies/ProxiesRegistry';
new ProxiesRegistry().registerProxies();

import Home from './views/Home';
import Courses from './views/Courses';
import Course from './views/Course';
import Profile from './views/Profile';
import LoginDialog from './views/dialogs/LoginDialog';
import RegisterDialog from './views/dialogs/RegisterDialog';

import { store } from './store';

const provider = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/courses' component={Courses} />
        <Route path='/courses/:id' component={Course} />
        <Route path='/users/:id/profile' component={Profile} />
        <LoginDialog />
        <RegisterDialog />
      </div>
    </Router>
  </Provider>
);

// Initial rendering
ReactDOM.render(provider, document.getElementById('app'));
