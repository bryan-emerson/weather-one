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
            <div>Visibility: {props.weatherData.visibility} </div>
            <div>Current Temp: {props.weatherData.main.temp} &deg;C</div>
            <div>Today's High Temp: {props.weatherData.main.temp_max} &deg;C</div>
            <div>Today's Low Temp: {props.weatherData.main.temp_min} &deg;C</div>
            <div>Dewpoint: {props.weatherData.main.humidity} </div>
            <div>Wind: {props.weatherData.wind["speed"]} </div>
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}