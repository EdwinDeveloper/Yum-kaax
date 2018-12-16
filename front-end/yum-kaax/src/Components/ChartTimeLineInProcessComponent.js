import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, Sector, Cell } from 'recharts';
const styles = theme => ({
  bodyText:{
    fontFamily:'Roboto',
    fontSize:'.9rem',
  },
});

const data = [
{name: '1', Actual: 300, Faltante: 456},
{name: '2', Actual: 145, Faltante: 230},
{name: '3', Actual: 100, Faltante: 345},
{name: '4', Actual: 8, Faltante: 450},
{name: '5', Actual: 100, Faltante: 321},
{name: '6', Actual: 9, Faltante: 235},
{name: '7', Actual: 53, Faltante: 267},
{name: '8', Actual: 252, Faltante: 378},
{name: '9', Actual: 79, Faltante: 210},
{name: '10', Actual: 294, Faltante: 23},
{name: '12', Actual: 43, Faltante: 45},
{name: '13', Actual: 74, Faltante: 90},
{name: '14', Actual: 71, Faltante: 130},
{name: '15', Actual: 117, Faltante: 11},
{name: '16', Actual: 186, Faltante: 107},
{name: '17', Actual: 16, Faltante: 926},
{name: '18', Actual: 125, Faltante: 653},
{name: '19', Actual: 222, Faltante: 366},
{name: '20', Actual: 372, Faltante: 486},
{name: '21', Actual: 182, Faltante: 512},
{name: '22', Actual: 164, Faltante: 302},
{name: '23', Actual: 316, Faltante: 425},
{name: '24', Actual: 131, Faltante: 467},
{name: '25', Actual: 291, Faltante: 190},
{name: '26', Actual: 47, Faltante: 194},
{name: '27', Actual: 415, Faltante: 371},
{name: '28', Actual: 182, Faltante: 376},
{name: '29', Actual: 93, Faltante: 295},
{name: '30', Actual: 99, Faltante: 322},
{name: '31', Actual: 52, Faltante: 246},
{name: '32', Actual: 154, Faltante: 33},
{name: '33', Actual: 205, Faltante: 354},
{name: '34', Actual: 70, Faltante: 258},
{name: '35', Actual: 25, Faltante: 359},
{name: '36', Actual: 59, Faltante: 192},
{name: '37', Actual: 63, Faltante: 464},
{name: '38', Actual: 91, Faltante: 2},
{name: '39', Actual: 66, Faltante: 154},
{name: '40', Actual: 50, Faltante: 186}

];
  // const getPercent = (value, total) => {
  //   const ratio = total > 0 ? value / total : 0;

  //   return toPercent(ratio, 1);
  // };

const toPercent = (decimal, fixed = 0) => {
  return `${((decimal * .5)/40).toFixed(fixed)} g/l`;
};

class ChartTimeLineInProcessComponent extends Component {
  render(){
        const { classes } = this.props;
    return(
      <div className={classes.bodyText}>
      <BarChart width={600} height={300} data={data}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name"/>
      <YAxis tickFormatter={toPercent}/>
      <Tooltip/>
      <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
      <ReferenceLine y={0} stroke='#fff'/>
      <Brush dataKey='name'  height={25} stroke="#8884d8"/>
      <Bar dataKey="Actual" stackId="a" fill="#8bc34a" />
      <Bar dataKey="Faltante" stackId="a" fill="#D0AA02" />
      </BarChart>
</div>
      )
  }
}
ChartTimeLineInProcessComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChartTimeLineInProcessComponent);

