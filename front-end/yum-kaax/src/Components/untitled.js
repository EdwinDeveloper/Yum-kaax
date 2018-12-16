import React, { Component } from 'react';

class PieChartStory extends Component{

      render(){
            return(
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
                  )
      }
}

export default withStyles(styles)(PieChartStory);
