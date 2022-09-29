/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, Fragment } from 'react';
import {Grid, Paper} from '@material-ui/core';
import { get } from '../../services';
import { useUser } from '../../app/user';
import './characters.scss';

export const Characters = () => {
  const [characters, setCharacters] = useState(null);

  const {loginName, userId} = useUser();

  return (
    <Fragment>
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