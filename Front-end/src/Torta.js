import {PieChart, Pie, ResponsiveContainer} from 'recharts';
import React from 'react';
import './App.css';

const Torta = ({newdata}) => {
  return (
    <div className="pieChart_bg">
      <ResponsiveContainer width="100%">
        <PieChart
          margin={{
            top: 10,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <Pie
            dataKey="rv"
            isAnimationActive={false}
            data={newdata}
            outerRadius="60%"
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Torta