import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,

  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SelectReportGenerateComponent extends Component {

  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    const { classes } = this.props;
    return(

      <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="age-label-placeholder">
      Mes
      </InputLabel>
      <Select
      value={this.state.age}
      onChange={this.handleChange}
      input={<Input name="age" id="age-label-placeholder" />}
      displayEmpty
      name="age"
      className={classes.selectEmpty}
      >
      <MenuItem value={10}>Julio</MenuItem>
      <MenuItem value={20}>Agosto</MenuItem>
      <MenuItem value={30}>Septiembre</MenuItem>
      </Select>
      </FormControl>
      </form>
      )
  }
}

SelectReportGenerateComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectReportGenerateComponent);
