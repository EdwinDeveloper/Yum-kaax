import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import CardComponent from '../MainDashboard/cardComponent';
import AddDosificadorDialogComponent from '../MainDashboard/AddDosificadorDialogComponent';
import AddCropButtonComponent from '../../Components/AddCropButtonComponent';
import SelectDosificadorComponent from '../../Components/SelectDosificadorComponent';
import ChartTimeLineInProcess from '../../Components/ChartTimeLineInProcess';
import PieChartStory from '../../Components/PieChartStory';

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
  containerMain: {
    display: 'flex',
    padding: '0 8px',
    justifyContent: 'space-around',
  },
  containerCards: {
    display: 'flex',
    padding: '0 8px',
  },
  fab: {
    margin: theme.spacing.unit,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  containerCardHeader:{
    display:'flex',
    JustifyContent:'space-evenly',
    padding: '0 8px',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '16px',
    color: 'white !important',
    fontWeight: 'none',
  },
  addButton:{
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  }
});

class Dashboard extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
      <div className={classes.containerCardHeader}>
      <SelectDosificadorComponent/>
      <AddDosificadorDialogComponent/>
      </div>

      <div className={classes.containerMain}>
      <ChartTimeLineInProcess/>
      <PieChartStory/>
      </div>

      <div className={classes.containerCards}>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      </div>

      <div className={classes.addButton}>
      <AddCropButtonComponent/>
      </div>
      </div>
      );
  }
}
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
