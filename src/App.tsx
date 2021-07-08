import React from 'react';
import './App.css';
import "firebase/auth";
import "firebase/firestore";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as ROUTES from './static/routes'

import Navigation from './components/Navigation'

import Landing from './views/Landing';
// import SignUpPage from '../SignUp';
// import SignInPage from '../SignIn';
// import PasswordForgetPage from '../PasswordForget';
// import HomePage from '../Home';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Navigation />

      <Route exact path={ROUTES.LANDING} component={Landing} />
      {/* <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
    </Router>
  );
}

export default App;
