import React, { useState } from 'react';
import Weather from '../components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import '../styles/App.css';
import Form from '../components/Form';


//api.openweathermap.org/data/2.5/weather?q=London&appid={API key}


const App = () => {
  const API_key = "9dcc9a75583b1ef8ae3031dd9d94434d";
  const [ search, setSearch ] = useState();
  const [weather, setweather] = useState({
    name:"",
    icon: "",
    main: "",
    celsius:"0",
    temp_max:"0",
    temp_min:"0",
    description:"",
    error: false,
  })

  const weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  }

  const calCelsius = temp => {
    let cell = Math.floor(temp - 273.15)
    return cell
  }

  const getWeatherIcon = (icons, rangeId) => {
    switch(true) {
      case rangeId >= 200 && rangeId <= 232:
        return weatherIcon.Thunderstorm
      case rangeId >= 300 && rangeId <= 321:
        return weatherIcon.Drizzle;
      case rangeId >= 500 && rangeId <= 531:
        return weatherIcon.Rain
      case rangeId >= 600 && rangeId <= 622:
        return weatherIcon.Snow
      case rangeId >= 701 && rangeId <= 781:
        return weatherIcon.Atmosphere
      case rangeId === 800:
        return weatherIcon.Clear
      case rangeId >= 801 && rangeId <= 804:
        return weatherIcon.Clouds
      default:
        return weatherIcon.Clouds
    }
  }

  const getWeather = () => {
    return (
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}`)
      .then(response => response.json())
      .then(data =>
        setweather({
          name: data.name,
          icon: getWeatherIcon(weatherIcon, data.weather[0].id),
          main: "",
          celsius: calCelsius(data.main.temp),
          temp_max: calCelsius(data.main.temp_max),
          temp_min: calCelsius(data.main.temp_min),
          description: data.weather[0].main,
          error: false,
      }))
      .catch(err =>
        setweather({
          error: true
      }))
      .catch(console.log(weather.error))
  )}

  return (
    <div className="App">
      <Form
        setSearch={setSearch}
        getWeather={getWeather}

      />
      <Weather
        weather={weather}
      />
    </div>
  )
}

export default App
