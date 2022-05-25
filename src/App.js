import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './App.css';



function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
    }
    fetchData();
  }, [lat, long])

  return (
    <div className="App">
      <Container className="container" fluid>

        {(typeof data.main != 'undefined') ? (
          <Weather weatherData={data} />
        ) : (
          <Card body>Your Weather Data is Loading!</Card>

        )}
      </Container>
    </div>
  );
}

export default App;
