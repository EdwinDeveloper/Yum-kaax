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
    backgroundColor: 'rgba(169, 93, 44, 1)',
    '&:hover': {
      backgroundColor: 'rgba(163, 80, 44, 1)',
    },
  },

});


function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}
class SliderExampleControlled extends Component {

  state = {
    activeStep: 0,
    name: '',
    email: '',
    user: '',
    pw: '',
    confirmPw: '',
    modelDosificador: '',
    nsDosificador: '',

  };

  totalSteps = () => {
    return getSteps().length;
  };

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
        <TextField
        id="standard-dense"
        label="Contraseña"
        className={classNames(classes.textField, classes.formControl)}
        value={this.state.pw}
        onChange={this.handleChange('pw')}
        margin="dense"
        />
        <TextField
        id="standard-dense"
        label="Confirmar Contraseña"
        className={classNames(classes.textField, classes.formControl)}
        margin="dense"
        value={this.state.confirmPw}
        onChange={this.handleChange('confirmPw')}
        />
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


  render() {
    const { classes, theme } = this.props;
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
        <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === 3}>
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

      <Button className={classes.btnLogin} size="small" onClick={this.handleNext} disabled={this.state.activeStep === 3}>
      Siguiente
      </Button>
      <Toolbar className={classes.toolbar}>
      <img alt="Remy Sharp" src={logo} className={classes.bigAvatar} />
      </Toolbar>
      </div>
      );
  }
}
SliderExampleControlled.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(SliderExampleControlled);

