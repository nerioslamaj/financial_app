import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Home from './Home';
import SingleTransaction from './SingleTransaction';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import AddTransaction from './AddTransaction';
import MyTransactions from './MyTransactions';
import requireAuthentication from '../components/Auth';
import getUser from '../components/GetUser';
import NavBar from '../components/NavBar';

export default () => (
  <BrowserRouter>
    <Container style={{paddingTop:'60px'}}>
      <Route path="/" render={props => (<NavBar {...props} />)} />
      <Route exact path="/" component={getUser(Home)} />
      <Route path="/view/:transactionId" render={props => (<SingleTransaction {...props} />)} />
      <Route path="/login" render={props => (<LoginPage {...props} />)} />
      <Route path="/signup" render={props => (<SignupPage {...props} />)} />
      <Route path="/profile/transactions" component={requireAuthentication(AddTransaction)} />
      <Route path="/profile/transactions" component={requireAuthentication(MyTransactions)} />
    </Container>
  </BrowserRouter>
);
