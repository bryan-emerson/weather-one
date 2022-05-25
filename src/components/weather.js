import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';
import moment from 'moment';

export default function Weather(props) {
  return (
    <div>

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.weatherData.name} weather</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">for {moment().format('dddd')} {moment().format('LL')}</Card.Subtitle>
          <Card.Text>
            <div className="row">
              <div className="column">
                <p>Conditions: {props.weatherData.weather[0].main} </p>
                <p>Visibility: {props.weatherData.visibility} </p>
                <p>Current Temp: {props.weatherData.main.temp} &deg;C</p>
                <p>Feels like: {props.weatherData.main.feels_like} &deg;C</p>
              </div>
              <div className="column">
                <p>Today's High Temp: {props.weatherData.main.temp_max} &deg;C</p>
                <p>Today's Low Temp: {props.weatherData.main.temp_min} &deg;C</p>
                <p>Dewpoint: {props.weatherData.main.humidity} </p>
                <p>Wind: {props.weatherData.wind["speed"]} </p>
              </div>
            </div>
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}