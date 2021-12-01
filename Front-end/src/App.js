import './App.css';
import React from 'react';
import { BarChart,PieChart, Pie, Bar, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip, CartesianGrid} from 'recharts';
import {useState, useEffect} from 'react'

/*const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    rv: 3500,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    rv: 1200,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    rv: 3000,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    rv: 2780,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    rv: 3000,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    rv: 1300,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    rv: 6000,
    amt: 2100,
  },
];*/

/*const newdata = []
  data.data.map((data) => {
    newdata.push(data)
})  */


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


