import React from 'react';
import {Router} from '@reach/router';
import {Login, CharacterCreation, SignUp} from '../components';

export function AppRoutes() {
  return (
    <Router>
      <Login path='/' />
      <CharacterCreation path='character-creation/*' />
      <SignUp path='sign-up' />
    </Router>
  );
}
