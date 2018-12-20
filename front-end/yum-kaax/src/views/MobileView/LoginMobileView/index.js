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
import logo from '../../../Assets/Img/Background/login.png';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
    width: 200,
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
    width: '95%',
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
    width: '50%',
    margin: '24px auto',
    display: 'flex',
    fontWeight: 'bold',
    backgroundColor: 'rgba(185, 100, 49, 0.9)',

  },

});

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

class LoginMobileView extends Component {
  constructor(props){
    super(props);

    this.state = {
     loading: false,
     query: 'idle',
     activeStep: 0,
     name: '',
     email: '',
     user: '',
     pw: '',
     passwordConfirm: '',
     modelDosificador: '',
     nsDosificador: '',
     showPassword: false,
     showPasswordConfirm: false,
     redirect: false,

   };
 }


 totalSteps = () => {
  return getSteps().length;
};
handleClickShowPasswordConfirm = () => {
  this.setState(state => ({ showPasswordConfirm: !state.showPasswordConfirm }));
};

handleClickShowPassword = () => {
  this.setState(state => ({ showPassword: !state.showPassword }));
};

handleChangeConfirmPassword = prop => event => {
  this.setState({ passwordConfirm: event.target.value });
};

handleChangePassword = prop => event => {
  this.setState({ password: event.target.value });
};
setRedirect = () => {
  this.setState({
    redirect: true
  })
}

renderRedirect = () => {
  if (this.state.redirect) {
    return <Redirect to='/mainMobile' />
  }
}

handleNext = () => {
  let activeStep;

  if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };


  getStepContent(stepIndex) {
    const { classes } = this.props;
    const { loading, query } = this.state;

    switch (stepIndex) {
      case 0:
      return (
        <div>
        <Typography component="h1" variant="h6" color="inherit"  className={classes.formControl} >
        ¿Como te llamas?
        </Typography>
        <Typography component="h5" variant="h5" color="inherit"  className={classes.subTitle} >
        Ingresa tu nombre y correo electronico
        </Typography>
        <TextField
        id="standard-dense"
        label="Nombre Completo"
        className={classNames(classes.textField, classes.formControl)}
        value={this.state.name}
        onChange={this.handleChange('name')}
        margin="dense"
        />

        <TextField
        id="standard-dense"
        label="Correo Electronico"
        className={classNames(classes.textField, classes.formControl)}
        value={this.state.email}
        onChange={this.handleChange('email')}
        margin="dense"/>
        </div>);

      case 1:
      return (
        <div>
        <Typography component="h1" variant="h6" color="inherit"  className={classes.formControl} >
        ¡Es momento de crear tu usuario!
        </Typography>
        <Typography component="h5" variant="h5" color="inherit"  className={classes.subTitle} >
        Ingresa tu usuario y contraseña
        </Typography>

        <TextField
        id="standard-dense"
        label="Usuario"
        className={classNames(classes.textField, classes.formControl)}
        value={this.state.user}
        onChange={this.handleChange('user')}
        margin="dense"
        />

        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="adornment-password">Contraseña</InputLabel>
        <Input
        id="adornment-password"
        type={this.state.showPassword ? 'text' : 'password'}
        value={this.state.password}
        onChange={this.handleChangePassword('password')}
        endAdornment={
          <InputAdornment position="end">
          <IconButton
          aria-label="Toggle password visibility"
          onClick={this.handleClickShowPassword}
          >
          {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
          </InputAdornment>
        }
        />
        </FormControl>

        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="adornment-confirm-password">Confirmar contraseña</InputLabel>
        <Input
        id="adornment-confirm-password"
        type={this.state.showPasswordConfirm ? 'text' : 'password'}
        value={this.state.passwordConfirm}
        onChange={this.handleChangeConfirmPassword('passwordConfirm')}
        endAdornment={
          <InputAdornment position="end">
          <IconButton
          aria-label="Toggle password visibility"
          onClick={this.handleClickShowPasswordConfirm}
          >
          {this.state.showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
          </IconButton>
          </InputAdornment>
        }
        />
        </FormControl>
        </div>
        );

      case 2:
      return (
        <div>
        <Typography component="h1" variant="h6" color="inherit"  className={classes.formControl} >
        ¡Ahora agregaremos su dosificador!
        </Typography>
        <Typography component="h5" variant="h5" color="inherit"  className={classes.subTitle} >
        En caso de no contar con dosificador, favor de
        </Typography>
        <TextField
        id="standard-dense"
        label="Modelo del Dosificador"
        className={classNames(classes.textField, classes.formControl)}
        margin="dense"
        value={this.state.modelDosificador}
        onChange={this.handleChange('modelDosificador')}
        />
        <TextField
        id="standard-dense"
        label="N/S del Dosificador"
        className={classNames(classes.textField, classes.formControl)}
        value={this.state.nsDosificador}
        onChange={this.handleChange('nsDosificador')}
        margin="dense"
        />
        </div>);

      default:
      return(
        <div>
        <Typography component="h1" variant="h6" color="inherit"  className={classes.formControl} >
        ¡Gracias por registrarte!
        </Typography>
        <Typography component="h5" variant="h5" color="inherit"  className={classes.subTitle} >
        En breve, se redireccionará la pagina para su ingreso
        </Typography>







        <div className={classes.root}>
        <div className={classes.placeholder}>
        {query === 'success' ? (
          <Typography>Success!</Typography>
          ) : (
          <Fade
          in={query === 'progress'}
          style={{
            transitionDelay: query === 'progress' ? '800ms' : '0ms',
          }}
          unmountOnExit
          >
          <CircularProgress />
          </Fade>
          )}
          </div>

          </div>
          </div>
          );
    }
  }

  completedSteps() {
    return Object.keys(this.state.completed).length;
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() + 0;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps();
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };







  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleClickLoading = () => {
    this.setState(state => ({
      loading: !state.loading,
    }));
  };

  handleClickQuery = () => {
    clearTimeout(this.timer);

    if (this.state.query !== 'idle') {
      this.setState({
        query: 'idle',
        redirect: false,
      });
      return;
    }

    this.setState({
      query: 'progress',
      redirect: false,
    });
    this.timer = setTimeout(() => {
      this.setState({
        query: 'success',
        redirect: false,
      });
    }, 2e3);
  };


  render() {
    const { classes, theme } = this.props;
    const { loading, query, redirect } = this.state;
    return (
      <div>
      <AppBar className={classes.containerHeader}>
      <h1 className="brand-name">YUM-KAAX</h1>
      </AppBar>
      <MobileStepper
      variant="progress"
      steps={4}
      position="static"
      activeStep={this.state.activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={this.handleNext}disabled={this.state.activeStep === 3}>
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0 || this.state.activeStep === 3 }>
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </Button>
      }
      />
      {this.getStepContent(this.state.activeStep)}

      <Button className={classes.btnLogin} size="small" onClick={(event) => { this.handleNext() ; this.handleClickQuery()}} disabled={this.state.activeStep === 3}>
      Siguiente
      </Button>
      <Toolbar className={classes.toolbar}>
      <img alt="Remy Sharp" src={logo} className={classes.bigAvatar} />
      </Toolbar>
      </div>
      );
  }
}
LoginMobileView.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(LoginMobileView);

