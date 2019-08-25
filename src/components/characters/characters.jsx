/* eslint-disable react-hooks/exhaustive-deps */
import React, {createElement, useEffect, useState, Fragment} from 'react';
import {AppBar, Container, Card, Grid, Paper, Toolbar} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { get } from '../../services';
import { useUser } from '../../app/user';
import logo from '../../app/images/sb-logo-blackout.svg';
import './characters.scss';

export const Characters = () => {
  const [characters, setCharacters] = useState(null);

  const {loginName, userId} = useUser();

  console.log('Login Name: ', loginName);

  // useEffect(() => {
  //   if (!characters) {
  //     get('/characters').then(data => {
  //       setCharacters(data);
  //       console.log(data);
  //     });
  //   }
  // }, []);

  return (
    <Fragment>
      <AppBar position="static" className='register-header'>
        <Toolbar className="logo">
          <div className="logo">
            <img src={logo} alt=''/>
          </div>
        </Toolbar>
      </AppBar>
      <Grid container className='character-container'>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4} className='subContainer'>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper />
              </Grid>
            ))}
          </Grid>
          </Grid>
        </Grid>
    </Fragment>
  );
}