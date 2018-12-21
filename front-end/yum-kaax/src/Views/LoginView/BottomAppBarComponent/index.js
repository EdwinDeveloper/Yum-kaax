import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../../Assets/Img/Background/login.png';

const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  paper: {
    paddingBottom: 50,
  },

  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    height: '100px',

  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dense: {
    marginTop: 19,
  },
  bigAvatar: {
    width: '520px',
    height: '330px',
    position: 'absolute',
    marginTop: '-91px',
  },
});


function BottomAppBarComponent(props) {
  const { classes } = props;
  return (
    <React.Fragment>
    <CssBaseline />
    <AppBar position="fixed" color="primary" className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
    <img alt="Remy Sharp" src={logo} className={classes.bigAvatar} />
    </Toolbar>
    </AppBar>
    </React.Fragment>
    );
}

BottomAppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBarComponent);
