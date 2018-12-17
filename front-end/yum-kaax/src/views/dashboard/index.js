import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardComponent from '../TemplateDashboardView/cardComponent';
import AddCropButtonComponent from '../../Components/AddCropButtonComponent';
import ChartTimeLineInProcessComponent from '../../Components/ChartTimeLineInProcessComponent';
import PieChartStoryComponent from '../../Components/PieChartStoryComponent';
import { Route, BrowserRouter as Router, NavLink} from 'react-router-dom';

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
  addButton:{
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  }
});

class Dashboard extends Component {

  constructor(props){
      super(props);
  }
  render() {
    const { classes , crops } = this.props;
    console.log("data-crops",crops);
    return (
      <div>

      <div className={classes.containerMain}>
      <ChartTimeLineInProcessComponent/>
      <PieChartStoryComponent/>
      </div>

      <div className={classes.containerCards}>
      <CardComponent/>
      </div>

      <NavLink to="/main/AddCrops" activeClassName="selected" style={{ textDecoration: 'none' }}>
      <div className={classes.addButton}>
      <AddCropButtonComponent/>
      </div>
      </NavLink>
      </div>
      );
  }
}
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
