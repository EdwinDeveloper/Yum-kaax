import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '100px',
    flexDirection: 'column',
    alignItems: 'flex-end',

  },
  formControl: {
    margin: '0 6px',
    width: '100%',
  },
  formContainer: {
    width: '50%',
    display: 'flex',
    padding: '0 8px',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnLogin: {
    height: '20px',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(169, 93, 44, 1)',
    marginTop:'8px',
    '&:hover': {
      backgroundColor: 'rgba(163, 80, 33, 1)',
    },
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'left',
    width: '50%',
  },
  subTitle: {
    fontSize: '1.5rem',
    width: '50%',
    color: '#979797',
  },
  terms: {
    fontSize: '1rem',
    width: '100%',
    color: '#979797',
    textAlign: 'justify',
    marginTop:'8px',
  }
});

class FormRegisterComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount: '',
      weight: '',
      weightRange: '',
      showPassword: false,
      showPasswordConfirm: false,
      name:'',
      email:'',
      user:'',
      password: '',
      passwordConfirm: '',
      model:'',
      serial_number:''
    };
    this.handleChangeInput=this.handleChangeInput.bind(this);
    this.handleBuildUser=this.handleBuildUser.bind(this);
    this.handleCreateMondoUser=this.handleCreateMondoUser.bind(this);
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleClickShowPasswordConfirm = () => {
    this.setState(state => ({ showPasswordConfirm: !state.showPasswordConfirm }));
  };


  componentDidMount() {
    this.forceUpdate();
  }

  handleChangeInput(event){
      let t=event.target;
      let val=t.value;
      let name=t.name;
      this.setState({
        [name]:val
      });
  }
  handleCreateMondoUser(data){

    console.log(data);
      try {
        fetch('http://localhost:8080/auth/signup',{
          method:'POST',
          mode:'cors',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(json =>{
          if(json.success===false){
            alert(json.error);
            console.log(json);
          }
        })
        .catch((error)=>{
            if(error.success===false){
                console.log(error);
            }
        });
      } catch (error) {
        console.log("Error",error);
      }
  }
  handleBuildUser(){
      let { name , email , user , password , passwordConfirm , model , serial_number }=this.state;
      if(password===passwordConfirm){
          const jsonUser={
              name,
              email,
              userName:user,
              password,
              serial_number,
              model
          }
          this.handleCreateMondoUser(jsonUser);
      }
  }

  render() {
    const { classes } = this.props;

    return (

      <div className={classes.container}>
      <Typography className={classes.title}>Crea tu cuenta</Typography>
      <Typography className={classes.subTitle}>Inicia a crear tus cultivos hidroponicos</Typography>
      <div className={classes.formContainer}>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="component-simple">Nombre completo</InputLabel>
      <Input onChange={this.handleChangeInput} name="name"/>
      </FormControl>
      </div>

      <div className={classes.formContainer}>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="component-simple">Correo electrónico</InputLabel>
      <Input onChange={this.handleChangeInput} name="email"/>
      </FormControl>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="component-simple">Usuario</InputLabel>
      <Input onChange={this.handleChangeInput} name="user"/>
      </FormControl>
      </div>
      <div className={classes.formContainer}>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="adornment-password">Contraseña</InputLabel>
      <Input
          id="adornment-password"
          type={this.state.showPassword ? 'text' : 'password'}
          value={this.state.password}
          onChange={this.handleChangeInput}
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
          name="password"
      />
      </FormControl>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="adornment-confirm-password">Confirmar contraseña</InputLabel>
      <Input
          id="adornment-confirm-password"
          type={this.state.showPasswordConfirm ? 'text' : 'password'}
          value={this.state.passwordConfirm}
          onChange={this.handleChangeInput}
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
      name="passwordConfirm"
      />
      </FormControl>
      </div>

      <div className={classes.formContainer}>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="component-simple">Modelo del dosificador</InputLabel>
      <Input onChange={this.handleChangeInput} name="model"/>
      </FormControl>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="component-simple">N/S del dosificador</InputLabel>
      <Input onChange={this.handleChangeInput} name="serial_number"/>
      </FormControl>
      </div>

      <div className={classes.formContainer}>
      <FormControl className={classes.formControl}>
      <Typography className={classes.terms}>Al hacer clic en "Registrarte", aceptas nuestras Condiciones, la Política de datos y la Política de cookies. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.</Typography>
      <Button className={classes.btnLogin} onClick={this.handleBuildUser}>Registrate</Button>

      </FormControl>
      </div>
      </div>
      );
  }
}

FormRegisterComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormRegisterComponent);
