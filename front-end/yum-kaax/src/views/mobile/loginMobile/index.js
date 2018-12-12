import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  formControl: {
    margin: '0 6px',
    width: '95%',
    marginTop: 19,
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

class SliderExampleControlled extends Component {
  constructor(){
    super();
    this.state = {
      stepIndex: 0,

      desc: '',
      title: '',
      name: '',
    }
  }

  handleNext() {
    let stepIndex = this.state.stepIndex;
    this.setState({
      stepIndex: stepIndex + 1,
    });
  }

  handlePrev() {
    let stepIndex = this.state.stepIndex;
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1
      });
    }
  }

  _handleTitleChange(event,value){this.setState({title: value});}
  _handleNameChange(event,value){this.setState({name: value});}
  _handleDescChange(event,value){this.setState({desc: value});}

  getStepContent(stepIndex) {
    const { classes } = this.props;

    switch (stepIndex) {
      case 0:
      return (

        <div>
        <TextField
        id="standard-dense"
        label="Nombre Completo"
        className={classNames(classes.textField, classes.formControl)}
        margin="dense"
        />
        <TextField
        id="standard-dense"
        label="Correo Electronico"
        className={classNames(classes.textField, classes.formControl)}
        margin="dense"/>
        <div className={classes.formContainer}>
        <Button variant="contained" color="default" className={classes.button} onClick={this.handlePrev.bind(this)}>Back</Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleNext.bind(this)}>Next</Button>
        </div>
        </div>
        );

      case 1:
      return (
        <div>
        <TextField
        id="standard-dense"
        label="Usuario"
        className={classNames(classes.textField, classes.formControl)}
        margin="dense"
        />
        <TextField
        id="standard-dense"
        label="Contraseña"
        className={classNames(classes.textField, classes.formControl)}
        margin="dense"
        />
        <TextField
        id="standard-dense"
        label="Confirmar Contraseña"
        className={classNames(classes.textField, classes.formControl)}
        margin="dense"
        />
        <div className={classes.formContainer}>
        <Button variant="contained" color="default" className={classes.button} onClick={this.handlePrev.bind(this)}>Back</Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleNext.bind(this)}>Next</Button>
</div>
        </div>
        );

      case 2:
      return (
        <div>
        <TextField
        id="standard-dense"
        label="Modelo del Dosificador"
        className={classNames(classes.textField, classes.formControl)}
        margin="dense"
        />
        <TextField
        id="standard-dense"
        label="N/S del Dosificador"
        className={classNames(classes.textField, classes.formControl)}
        margin="dense"
        />
        <div className={classes.formContainer}>
        <Button variant="contained" color="default" className={classes.button} onClick={this.handlePrev.bind(this)}>Back</Button>
        <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleNext.bind(this)}>Finish</Button>
        </div>

        </div>);

      default:
      return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    return (<div>
      <Stepper activeStep={this.state.stepIndex}>
      <Step>
      <StepLabel>Nombre y correo</StepLabel>
      </Step>
      <Step>
      <StepLabel>Creacion de usuario</StepLabel>
      </Step>
      <Step>
      <StepLabel>Ingresar dosificador</StepLabel>
      </Step>
      </Stepper>

      {this.getStepContent(this.state.stepIndex)}


      </div>
      );
  }

}
SliderExampleControlled.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SliderExampleControlled);

