import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, Sector, Cell } from 'recharts';


const data2 = [{name: 'Group A', value: 100}, {name: 'Group B', value: 100},
{name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#8bA34a', '#8bc3Aa', '#8bA34a', '#Abc34a'];
const RADIAN = Math.PI / 180;

class PieChartStory extends Component{

      render(){
            return(
                  <div>
                  <PieChart width={300} height={250} onMouseEnter={this.onPieEnter}>
                  <Pie
                  data={data2}
                  cx={170}
                  cy={130}
                  innerRadius={80}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  >
                  {
                        data2.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                  }
                  </Pie>
                  </PieChart>
                  </div>
                  )
      }
}

export default PieChartStory;
