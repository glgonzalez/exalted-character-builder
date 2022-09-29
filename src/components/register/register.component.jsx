import React, {useState, Fragment} from 'react';
import { TextField, FormControl, Button, Container, Typography } from '@material-ui/core';
import { useHistory } from '../../app/history-context';
import { useUser } from '../../app/user';
import './register.scss';
import { post } from '../../services/api-resources';

export function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [email, setEmail] = useState('');
  
  const { setLoginName, setUserId } = useUser();
  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const request = {
        username,
        password,
        email
      }
      const response = await post('/users', request);
      await sessionStorage.setItem('access_token', response.access_token);
      if (sessionStorage.getItem('access_token')) {
        setLoginName(response.user.username);
        setUserId(response.user.id);
        history.push(`/characters/${response.user.id}`);
      }
    } catch (err) {
      throw new Error(err);
    }
  }
  const confirmPassword = () => {
    return password === confirmedPassword;
  }
  
  return (
    <Fragment>
      <Container maxWidth='lg' className='signup-form'>
        <div className='register-heading'>
          <Typography variant='h6'>
            Registration
          </Typography>
        </div>
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
            <Button className='sign-up-button' type='submit' variant='outlined' disabled={!username || !password || !confirmPassword()}>Sign Up</Button>
          </FormControl>
        </form>
      </Container>
    </Fragment>
  );
}