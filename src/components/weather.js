import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';

export default function Weather(props) {
  return (
    <div>
      <div> "Location: " {props.weatherData.name} </div>
      <div> "Visibility: " {props.weatherData.visibility} </div>
      <div> "Current Temp: " {props.weatherData.main.temp} &deg;C</div>
      <div> "Today's High Temp: " {props.weatherData.main.temp_max} &deg;C</div>
      <div> "Today's Low Temp: " {props.weatherData.main.temp_min} &deg;C</div>
      <div> "Dewpoint: " {props.weatherData.main.humidity} </div>
      <div> "Wind: " {props.weatherData.wind["speed"]} </div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.weatherData.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}