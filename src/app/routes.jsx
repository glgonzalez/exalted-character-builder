import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Login, CharacterBuilder, Register, Characters} from '../components';

export function AppRoutes() {
  return (
    <Router className='router'>
      <Route path='/' exact component={Login} />
      <Route path='/register/' component={Register} />
      <Route path='/characters/' component={Characters} />
      <Route path='/builder/' component={CharacterBuilder} />
    </Router>
  );
}
