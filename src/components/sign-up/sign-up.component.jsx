import React, {useState, Fragment} from 'react';
import {AppBar, TextField, Toolbar, Typography, FormControl, Button, Container} from '@material-ui/core';
import {navigate} from '@reach/router';
import './sign-up.css';
import { post } from '../../services/api-resources';

export function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const request = {
        username,
        password,
        email
      }
      const response = await post('/users', request);
      sessionStorage.setItem('access_token', response.access_token);
      navigate('/dashboard');
    } catch (err) {
      throw new Error(err);
    }
  }
  const confirmPassword = () => {
    return password === confirmedPassword;
  }
  
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Sign Up
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='lg'>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <TextField 
              className="sign-up"
              label="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)} />
            <TextField 
              className="sign-up"
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)} />
            <TextField
              className="sign-up"
              label="Password"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)} />
            <TextField
              className="sign-up"
              label="Confirm Password"
              type="password"
              value={confirmedPassword}
              onChange={event => setConfirmedPassword(event.target.value)} />
            {!confirmPassword() ? "Passwords doesn't match": null}
            <Button className='sign-up-button' type='submit' variant='contained' disabled={!username || !password || !confirmPassword()}>Sign Up</Button>
          </FormControl>
        </form>
      </Container>
    </Fragment>
  );
}