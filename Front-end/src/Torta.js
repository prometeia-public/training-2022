import {PieChart, Pie, ResponsiveContainer, Tooltip} from 'recharts';
import React from 'react';

const Torta = ({newdata}) => {
    return(
        <ResponsiveContainer width="100%" aspect={4}>
        <PieChart>
          <Pie
            dataKey="rv"
            isAnimationActive={false}
            data={newdata}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
}

export default Torta