import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardReportComponent from '../../Components/CardReportComponent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  componentCards: {

    display: 'flex',
    height: '80%',
  },

  cards:{
    width:'100%',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
  }
});
class MonthlyReportSection extends Component{
  render(){
    const { classes } = this.props;
    return(
      <div>
     <Typography component="h1" variant="h6" color="inherit"  className={classes.formControl} >
        Selecciona el mes que desee ver el reporte
        </Typography>
      <div className= {classes.componentCards}>
      <div className={classes.cards}>
      <CardReportComponent/>
      <CardReportComponent/>
      <CardReportComponent/>
      <CardReportComponent/>
      <CardReportComponent/>
      </div>
      </div>
      </div>
      );
  }
}

export default withStyles(styles, { withTheme: true })(MonthlyReportSection);
