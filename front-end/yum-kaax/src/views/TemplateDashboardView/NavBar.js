import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Dashboard from './Dashboard';


class NavBar extends Component {
  render() {
    return (
      <div>
      <AppBar position="static">
      <Dashboard></Dashboard>
      </AppBar>
      </div>
    );
  }
}

export default NavBar;