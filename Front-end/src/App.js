import './App.css';
import React from 'react';
import { BarChart,PieChart, Pie, Bar, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip, CartesianGrid} from 'recharts';
import {useState, useEffect} from 'react'

//Fetch data
const fetchData = async () => {
  const res = await fetch('http://localhost:5000/data')
  const d = await res.json()

  return d
}

function App() {
  const [newdata, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData()
      setData(dataFromServer)
    }

    getData()
  }, [])
  return (
    <div style={{ width: '100%', height: 300}}>
    <ResponsiveContainer width="100%" aspect = {4}>
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
      <XAxis dataKey = "name" label={{ value: 'Asse Orizzontale', angle: 0, position: 'insideTopRight', offset: 20 }} />
      <YAxis label={{ value: 'Asse Verticale', angle: -90, position: 'insideLeft', offset: 20 }}/>
      <Tooltip />
      <Legend />
      <Bar type="natural" dataKey="pv" stroke="#8884d8" strokeWidth="2" legendType="square" dot={{r:10, strokeWidth:8}}/>
      <Bar type="natural" dataKey="uv" stroke="#82ca9d" strokeWidth="2" legendType="square"/>
      <Bar type="natural" dataKey="rv" stroke="#26ab2a" strokeWidth="2" legendType="square"/>
    </BarChart>
  </ResponsiveContainer>
  <ResponsiveContainer width="100%" aspect = {4}>
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
  </div>
  );
}

export default App;


