import React, { useState, Fragment } from 'react';
import { AppBar, TextField, Toolbar, FormControl, Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { post } from '../../services/api-resources';
import './login.component.scss';
import logo from '../../app/images/sb-logo.svg';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const request = {
      username,
      password
    }
    const response = await post('/authenticate', request);
    sessionStorage.setItem('access_token', response.access_token);
  }

  return (
    <Fragment>
      <AppBar position="static" className='login-app-bar'>
        <Toolbar>
          <Link to='/register' className='register-link'>
            Register
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth='md' className='login-form'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <form onSubmit={handleSubmit}>
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
        </form>
      </Container>
    </Fragment>
  );
}
