import React, { Fragment } from 'react';
import { AppBar, Toolbar, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './layout.scss';
import logo from '../../app/images/sb-logo-blackout.svg';

export const Layout = ({children}) => {
  return (
    <Fragment>
      <AppBar position="static" className='layout-app-bar'>
        <Toolbar>
          <div className="left"></div>
          <Link to="/login" className="center">
            <img src={logo} alt="" className="logo" />
          </Link>
          <div className="right"></div>
        </Toolbar>
      </AppBar>
      <Container className="layout-container">
        {children}
      </Container>
    </Fragment>
  );
}