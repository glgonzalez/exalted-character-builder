import React, {useEffect, Fragment} from 'react';
import { AppBar, Toolbar, Typography, Container, Button } from '@material-ui/core';
import {useCharacterContext} from '../character-provider';


export function Attributes() {
  const [{attributes}, dispatch] = useCharacterContext();

  useEffect(() => {
    return () => {};
  }, [attributes.strength]);

  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Attributes
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {attributes.strength}
        <Button onClick={() => {
           dispatch({type: 'attributes',  attributes: {strength: 5}})
           }} >Button</Button>
      </Container>
    </Fragment>
  )
}