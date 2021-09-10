import React, { useState, useEffect } from 'react';
import Weather from '../components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import '../styles/App.css';


//api.openweathermap.org/data/2.5/weather?q=London&appid={API key}


const App = () => {
  const API_key = "9dcc9a75583b1ef8ae3031dd9d94434d"
  const [weather, setweather] = useState({})
  useEffect(() => {
    return (
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_key}`)
      .then(response => response.json())
      .then(data =>
        setweather({
          name: data.name,
          conditions: data.weather[0].main
      }))
    )
  }, [])

  return (
    <div className="App">
      <Weather weather= {weather}/>

    </div>
  )
}

export default App
