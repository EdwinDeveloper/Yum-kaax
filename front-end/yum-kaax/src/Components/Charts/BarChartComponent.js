import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class BarChartComponent extends Component {


  render() {
const data = [
      {name: 'Nitrogeno', Actual: 4000, Faltante: 2400, amt: 2400, value: Math.random()},
      {name: 'Magnesio', Actual: 3000, Faltante: 1398, amt: 2210,value: Math.random() },
      {name: 'Potasio', Actual: 2000, Faltante: 9800, amt: 2290,value: Math.random() },
      {name: 'Calcio', Actual: 2780, Faltante: 3908, amt: 2000, value: Math.random()},

];

const toPercent = (decimal, fixed = 0) => {
  return `${((decimal * 1)/2000).toFixed(fixed)} g/l`;
};

    return (
      <div>

      <BarChart width={500} height={300} data={data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 5"/>
       <XAxis dataKey="name"/>
       <YAxis tickFormatter={toPercent}/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="Actual" stackId="a" fill="#8bc34a" />
       <Bar dataKey="Faltante" stackId="a" fill="#D0AA02" />
      </BarChart>

      </div>
    );
  }
}

export default BarChartComponent;
