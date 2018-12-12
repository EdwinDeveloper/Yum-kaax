import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../../assets/img/background/login.png';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter as Router, Link } from "react-router-dom";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  containerMainLogin: {
    display: 'flex',
    padding: '0 8px',
    alignItems: 'center',
    fontWeight: 'none',
    marginTop: '116px',
    flexDirection: 'column',

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

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  bigAvatar: {
    width: '240px',
    height: '150px',
    margin:'0 auto',
  },
  menu: {
    width: 200,
  },
  subTitle: {
    fontSize: '.9rem',
    color: '#979797',
    textAlign:'center',
  },
  button: {
    margin: theme.spacing.unit,
  },
  formControl: {
    margin: '0 6px',
    width: '100%',
    marginTop: 19,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnLogin: {
    color: 'white',
    height: '37px',
    width: '100%',
    margin: '24px auto',
    display: 'flex',
    fontWeight: 'bold',
    backgroundColor: 'rgba(169, 93, 44, 1)',
    '&:hover': {
      backgroundColor: 'rgba(163, 80, 44, 1)',
    },
  },

  btnRegistrer: {
    color: 'white',
    height: '37px',
    width: '50%',
    margin: '24px auto',
    display: 'flex',
    fontWeight: 'bold',
    backgroundColor: 'rgba(151, 188, 88, 1)',
    '&:hover': {
      backgroundColor: 'rgba(151, 188, 88, 1)',
    },
  },
  divider: {
    backgroundColor: '#979797',
    width: '45%',
  },

  dividerText: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'none',
    flexDirection: 'row',
    width: '95%',
  },

});

class MainLoginMobile extends Component {

  render() {
    const { classes } = this.props;
    return (
     <div>
     <div className={classes.containerMainLogin}>
     <AppBar className={classes.containerHeader}>
     <h1 className="brand-name">YUM-KAAX</h1>
     </AppBar>
     <Typography component="h1" variant="h6" color="inherit"  className={classes.formControl + classes.root} >
     ¿Como te llamas?
     </Typography>
     <Typography component="h5" variant="h5" color="inherit"  className={classes.subTitle} >
     Ingresa tu nombre y correo electronico
     </Typography>
     <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
     <TextField
     id="standard-dense"
     label="Correo"
     name="email"
     className={classNames(classes.textField)}
     margin="dense"
     onChange={ this.handleChangeInput}
     classes={{
      root: classes.cssLabel,
    }}
    />
    <TextField
    id="standard-password-input"
    label="Contraseña"
    name="password"
    className={classes.textField}
    type="password"
    onChange={ this.handleChangeInput}
    autoComplete="current-password"
    margin="normal"
    />
    <Button type="submit" className={classes.btnLogin}>Iniciar sesión</Button>
    </form>
    <div className={classes.dividerText}>
    <Divider className={classes.divider} />
    <Typography component="h5" variant="h5" color="inherit"  className={classes.subTitle} >
    O
    </Typography>
    <Divider className={classes.divider} />
    </div>
    <Button type="submit" className={classes.btnRegistrer}>Crear tu cuenta</Button>
    <Typography component="h5" variant="h5" color="inherit"  className={classes.subTitle} >

      <Link to="/login"><a href="#">¿Olvidaste tu contraseña?</a></Link>

    </Typography>
    </div>
    </div>
    )
  }
}

export default withStyles(styles)(MainLoginMobile);

