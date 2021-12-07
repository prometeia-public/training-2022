import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip, CartesianGrid} from 'recharts';
import React from 'react';

const Istogramma = ({newdata, campi}) => {
    return (
        <div className="chart_bg" style={{ width: '70%'}}>
            <ResponsiveContainer width="100%" aspect={2}>
                <BarChart
                    width={300}
                    height={300}
                    data={newdata}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" label={{ value: 'X', angle: 0, position: 'insideTopRight', fill: '#FFFFFF' }} />
                    <YAxis label={{ value: 'Y', angle: 0, position: 'insideTopLeft', offset: -1, fill: '#FFFFFF' }} />
                    <Tooltip />
                    {campi.map(campi => (
                        <Bar type="natural" dataKey={campi} fill="#82ca9d" stroke="#FFFFFF" strokeWidth="2" legendType="square" />
                    ))}
                    <Legend />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Istogramma