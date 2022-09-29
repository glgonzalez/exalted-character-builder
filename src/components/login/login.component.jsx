import React, { useState, Fragment } from 'react';
import { TextField, FormControl, Button } from '@material-ui/core';
import { Redirect } from 'react-router';
import { post } from '../../services/api-resources';
import './login.component.scss';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const request = {
        username,
        password
      }
      const response = await post('/authenticate', request);
      sessionStorage.setItem('access_token', response.access_token);
    }
    catch (e) {
      throw new Error(e);
    }
  }

  return (
    <Fragment>
      {sessionStorage.getItem('access_token') ? <Redirect to="/characters" /> :
        <form onSubmit={handleSubmit} id="login-form">
          <FormControl>
            <TextField 
              className='username'
              label="Username"
              value={username}
              onChange={(event) => {
                console.log(event.target.value);
                setUsername(event.target.value);
              }}/>
            <TextField
              label="password"
              type="password"
              value={password}
              onChange={event => {
                setPassword(event.target.value)
              }}/>
            <Button type='submit' variant='outlined' disabled={!username || !password} className='login-button'>Login</Button>
          </FormControl>
        </form>}
    </Fragment>
  );
}
