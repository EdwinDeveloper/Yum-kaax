import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { BrowserRouter,Link} from "react-router-dom";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    color: 'white',
  },
  textField: {
    color: 'white !important',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '200',

  },
  a:{
    textDecoration:'none',
  },
  containerHeader: {
    display: 'flex',
    padding: '0 8px',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '16px',
    color: 'white !important',
    fontWeight: 'none',
  },
  btnLogin: {
    height: '20px',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(169, 93, 44, 1)',
    marginTop: '24px',
    '&:hover': {
      backgroundColor: 'rgba(163, 80, 44, 1)',
    },
  },
  cssLabel: {
    color: 'white',
  },

  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class AppBarTop extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      page:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:8080/auth/login',{
      method:'POST',
      mode:'cors',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email':this.state.email,'password':this.state.password
      })

    }).then(res=>res.json())
    .then(json=> {
      console.log(json);
      if(json.message=="Logged successfuly"){
          const {user_info}=json.payload;
          localStorage.setItem('user_info',user_info);
          console.log("Hola hermano");
          this.props.history.push('/main');
      }else if(json.success==false){
          alert("Invalid data");
      }
    })
  };

  handleChangeInput(event){
    let t=event.target;
    let v=t.value;
    let n= t.name;
    this.setState({
      [n]:v
    });
    console.log(n,v);
  }
  render() {
    const { classes } = this.props;

    return (
      <div className="React">
      <AppBar className={classes.containerHeader}>
      <h1 className="brand-name">YUM-KAAX</h1>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
      <TextField
      id="standard-dense"
      label="Correo"
      name="email"
      className={classNames(classes.textField, classes.dense)}
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
      <Link to={this.state.page}><Button onClick={this.handleSubmit} type="submit" className={classes.btnLogin}>Iniciar sesión</Button></Link>

      </form>
      </AppBar>
      </div>
      );
  }
}

AppBarTop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarTop);
