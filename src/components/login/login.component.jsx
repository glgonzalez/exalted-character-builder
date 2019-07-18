import React, {useState, Fragment} from 'react';
import {AppBar, TextField, Toolbar, Typography, FormControl, Button, Paper, Container} from '@material-ui/core';
import { post } from '../../services/api-resources';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const request = {
      username,
      password
    }
    await post('/v1/login', request);
  }

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Login
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='md'>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <TextField 
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
            <Button type='submit' variant='contained' disabled={!username || !password}>Login</Button>
          </FormControl>
        </form>
      </Container>
    </Fragment>
  );
}
