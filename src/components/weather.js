import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';
import moment from 'moment';

export default function Weather(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <div className="header">
            <Card.Title>{props.weatherData.name} weather</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">for {moment().format('dddd')} {moment().format('LL')}</Card.Subtitle>
          </div>
          <Card.Text>
            <div className="row">
              <div className="column">
                <p>Conditions: <br />{props.weatherData.weather[0].description} </p>
                <p>Visibility: <br />{props.weatherData.visibility} ft </p>
                <p>Current Temp: <br />{Math.floor((props.weatherData.main.temp)*1.8+32)} &deg;F</p>
                <p>Feels like: <br />{Math.floor((props.weatherData.main.feels_like)*1.8+32)} &deg;F</p>
              </div>
              <div className="column">
                <p>Today's High: <br />{Math.floor((props.weatherData.main.temp_max)*1.8+32)} &deg;F</p>
                <p>Today's Low: <br />{Math.floor((props.weatherData.main.temp_min)*1.8+32)} &deg;F</p>
                <p>Dewpoint: <br />{props.weatherData.main.humidity} </p>
                <p>Wind: <br />{Math.floor((props.weatherData.wind.speed) * 2.237)} Mph </p>
              </div>
            </div>
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}