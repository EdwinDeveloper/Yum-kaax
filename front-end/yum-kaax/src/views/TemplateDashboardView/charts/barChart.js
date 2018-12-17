import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class BarChartCropGrowth extends Component {


  render() {
const data = [
      {name: 'Magnesio', Actual: 4000, Faltante: 2400, amt: 2400, value: Math.random()},
      {name: 'Potasio', Actual: 3000, Faltante: 1398, amt: 2210,value: Math.random() },
      {name: 'Zinc', Actual: 2000, Faltante: 9800, amt: 2290,value: Math.random() },
      {name: 'Sal', Actual: 2780, Faltante: 3908, amt: 2000, value: Math.random()},

];


const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 1);
};

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

export default BarChartCropGrowth;
