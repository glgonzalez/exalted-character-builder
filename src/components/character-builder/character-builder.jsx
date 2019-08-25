import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import { Attributes } from './attributes';
import { CharacterProvider } from './character-provider';
import { Home } from './home';

export const CharacterBuilder = () => {
  return (
    <CharacterProvider>
      <Router>
        <Switch>
          <Redirect from='/builder' to='/builder/home' exact/>
          <Route path='/builder/home' component={Home} />
          <Route path='/builder/attributes' component={Attributes} />
          <Route path='/builder/abilities' component='' />
        </Switch>
      </Router>
    </CharacterProvider>
  );
};