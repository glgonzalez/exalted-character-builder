import React from 'react';
import {Router} from '@reach/router';
import { Attributes } from './attributes';
import {CharacterProvider} from './character-provider';

export function CharacterCreation() {
  return (
    <CharacterProvider>
      <Router>
        <Attributes path='attributes' default/>
      </Router>
    </CharacterProvider>
  );
}