import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import Istogramma from './Istogramma' ;
import Torta from './Torta';
import SideBar from './SideBar';
import XData from './XData';

//Fetch data
const fetchData = async () => {
  const res = await fetch('/data.json')
  const d = await res.json()

  return d
}

function App() {
  const [newdata, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData()
      setData(dataFromServer.data)
    }

    getData()
  }, [])

  const campi = ["pv", "uv", "rv"]
  return (
    <div style={{ width: '100%', height: '200%', backgroundColor: '#1a1e34'}}>
      <div style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: '150%', marginLeft: '2%', height: '5%', position: "fixed", width:"100%", backgroundColor: '#1a1e34'}}>Dashboard</div>
      <SideBar />
      <div style ={{display:"inline", float: 'right', width: '80%', marginTop: "2.5%"}}>
      <Istogramma newdata={newdata} campi={campi}/>
      <XData newdata = {newdata} />
      </div>
      <div style ={{display:"inline", float: 'right', width: '80%'}}>
      <Torta newdata = {newdata} campi={campi} />
      </div>
    </div>
  );
}

export default App;


