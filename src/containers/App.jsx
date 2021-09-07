import React, { useEffect } from 'react';
import Weather from '../components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import '../styles/App.css';


//api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
const API_key = "9dcc9a75583b1ef8ae3031dd9d94434d";

const App = () => {

  useEffect(() => {
    fetch(`api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_key}`)
    .then(response => response.json)
    .then(data => console.log(data))
  }, []);

  return (
    <div className="App">
      <Weather />
    </div>
  )
}

export default App
