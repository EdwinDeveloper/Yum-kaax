import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/img/background/404.png';
import Fab from '@material-ui/core/Fab';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { BrowserRouter as Router, Link } from "react-router-dom";

const styles = theme => ({
  container: {
    margin: '0 auto',
    width: '40%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    height: '48vh',

  },
  bigAvatar: {
    height: '330px',
    marginTop: '-70px',
  },
  bigAvatar2: {
    height: '330px',
    marginTop: '-70px',
  },
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    marginTop: '80px',
  },
  containerHeader: {
    display: 'flex',
    padding: '0 8px',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
    color: 'white !important',
    fontWeight: 'none',
  },
  txtError: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex:'auto',
    fontSize:'4rem',
  },
  txtReturn: {
    display: 'flex',
    alignItems: 'center',
    flex:'auto',
    fontSize:'1.7rem',
  },
  txtMessage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex:'auto',
    fontSize:'2rem',
    color: '#6f6f6f',
    lineHeight: '0',
  },
  containerGeneral: {
    height: '100vh',
    background: '-webkit-linear-gradient(270deg, rgba(153,186,87,1) 0%, rgba(230,240,225,1) 100%, rgba(230,240,225,1) 100%)',
  },
  imgSharp: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  fab: {
    margin: theme.spacing.unit,
  },
});

class error404 extends Component {

  render(){
    const { classes } = this.props;

    return(
      <div>
      <div className={classes.containerGeneral}>
      <div className={classes.container}>
      <Typography component="h1" variant="h6" color="inherit"  className={classes.txtError} >
      ERROR 404
      </Typography>
      <Typography component="h5" variant="h5"  className={classes.txtMessage} >
      Página no encontrada
      </Typography>
      </div>
      <div className={classes.imgSharp}>
      <img alt="Remy Sharp" src={logo} className={classes.bigAvatar} />
      <img alt="Remy Sharp" src={logo} className={classes.bigAvatar2} />
      </div>
      <Typography component="h5" variant="h5"  className={classes.txtReturn} >
      <Link to="/login" className={classes.a}> <Fab color="secondary" aria-label="KeyboardReturnIcon" className={classes.fab}>
      <KeyboardReturnIcon />
      </Fab>
      </Link>
      Regresa a cuidar tus cultivos
      </Typography>
      </div>
      </div>
      );
  }
}
error404.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(error404);
