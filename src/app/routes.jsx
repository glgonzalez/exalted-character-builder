import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { Login, CharacterBuilder, Register, Characters } from '../components';
import { useHistory } from './history-context';
import { Layout } from '../components/layout';

export function AppRoutes() {
  const appHistory = useHistory();
  return (
    <Router className='router' history={appHistory}>
      <Layout>
        <Redirect path="/" to="/login" />
        <Route path='/login' exact component={Login} />
        <Route path='/register/' component={Register} />
        <Route path='/characters/' component={Characters} />
        <Route path='/builder/' component={CharacterBuilder} />
      </Layout>
    </Router>
  );
}
