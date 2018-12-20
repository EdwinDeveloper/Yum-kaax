import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImgCrop from '../../Assets/Img/Background/nulleight.png';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter, Link} from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  containerCenter: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },


  header: {
    display: 'flex',
    alignItems: 'center',
    height: 100,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
  btnLogin: {
    height: '20px',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(169, 93, 44, 1)',
    marginTop: '24px',

  },
  containerMain: {
    display: 'flex',
    padding: '0 8px',
    justifyContent: 'space-around',
  },
  containerGeneral:{
    display: 'flex',
    padding: '0 8px',
    flexDirection: 'column',
  },
  dense: {
   marginLeft: '8px',
 },
   selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
    formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class AddCropsSection extends Component {

  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (

      <div>
      <div className={classes.containerGeneral}>
      <div className={classes.containerMain}>
      <img alt="Remy Sharp" src={ImgCrop} className={classes.img} />
      </div>

      <div className={classes.container}>
      <div className={classes.containerCenter}>

      <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="age-label-placeholder">
      Tipo de planta
      </InputLabel>
      <Select
      value={this.state.age}
      onChange={this.handleChange}
      input={<Input name="age" id="age-label-placeholder" />}
      displayEmpty
      name="age"
      className={classes.selectEmpty}
      >
      <MenuItem value="">Moringa</MenuItem>
      <MenuItem value={10}>Cebolla</MenuItem>
      <MenuItem value={20}>Cilantro</MenuItem>
      <MenuItem value={30}>Perejil</MenuItem>
      </Select>
      </FormControl>




      <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="age-label-placeholder">
      Tipo de planta
      </InputLabel>
      <Select
      value={this.state.age}
      onChange={this.handleChange}
      input={<Input name="age" id="age-label-placeholder" />}
      displayEmpty
      name="age"
      className={classes.selectEmpty}
      >
      <MenuItem value="">2</MenuItem>
      <MenuItem value={10}>4</MenuItem>
      <MenuItem value={20}>6</MenuItem>
      <MenuItem value={30}>8</MenuItem>


      </Select>
      </FormControl>







      <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="age-label-placeholder">
      Tipo de planta
      </InputLabel>
      <Select
      value={this.state.age}
      onChange={this.handleChange}
      input={<Input name="age" id="age-label-placeholder" />}
      displayEmpty
      name="age"
      className={classes.selectEmpty}
      >
      <MenuItem value="">Inicio</MenuItem>
      <MenuItem value={10}>Fin</MenuItem>

      </Select>
      </FormControl>

      </div>

      <Link to="/main/add/crops/crop/growth" style={{ textDecoration: 'none' }} >
      <Button   type="submit" className={classes.btnLogin}>Crear cultivo
      </Button>
      </Link>
      </div>
      </div>
      </div>
      )
  }
}

export default withStyles(styles, { withTheme: true })(AddCropsSection);
