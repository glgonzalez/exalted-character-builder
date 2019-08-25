import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Login, CharacterBuilder, Register, Characters } from '../components';
import { useHistory } from './history-context';

export function AppRoutes() {
  const appHistory = useHistory();
  return (
    <Router className='router' history={appHistory}>
      <Route path='/' exact component={Login} />
      <Route path='/register/' component={Register} />
      <Route path='/characters/:id' component={Characters} />
      <Route path='/builder/' component={CharacterBuilder} />
    </Router>
  );
}
