
import './App.css';
import Location from './Location';
import {useState, useEffect} from 'react';



const API_URL ='https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'http://openweathermap.org/img/wn/'
const API_KEY = '';


function App() {

    return (
      <div className="box">
      <Location/>
      </div> 

    )
  }





export default App;
