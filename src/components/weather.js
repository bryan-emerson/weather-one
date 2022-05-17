import React from 'react';
//import './styles.css';

export default function Weather(props) {
  return (
    <div>
      <div> "Location: " { props.weatherData.name } </div>
      <div> "Visibility: " { props.weatherData.visibility } </div>
      <div> "Current Temp: " { props.weatherData.main.temp } &deg;C</div>
      <div> "Today's High Temp: " { props.weatherData.main.temp_max } &deg;C</div>
      <div> "Today's Low Temp: " { props.weatherData.main.temp_min } &deg;C</div>
      <div> "Dewpoint: " { props.weatherData.main.humidity } </div>
      <div> "Wind: " { props.weatherData.wind["speed"] } </div>
    </div>
  );
}