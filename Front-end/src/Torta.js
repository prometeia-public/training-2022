import {PieChart, Pie, ResponsiveContainer} from 'recharts';
import React from 'react';
import './App.css';

const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

const Torta = ({newdata, campi}) => {
  return (
    <div className="pieChart_bg">
      <ResponsiveContainer width={"100%"}>
        <PieChart
          margin={{
            top: 10,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <Pie
            dataKey={campi[0]}
            isAnimationActive={true}
            animationDuration="750"
            data={newdata}
            outerRadius="60%"
            fill={random_hex_color_code()}
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Torta