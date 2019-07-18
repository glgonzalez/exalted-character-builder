import React from 'react';
import {Router} from '@reach/router';
import {Login, CharacterCreation} from '../components';

export function AppRoutes() {
  return (
    <Router>
      <Login path='/' />
      <CharacterCreation path='character-creation/*' />
    </Router>
  );
}
