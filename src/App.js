import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
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
        //console.log("Latitude is:", lat)
        //console.log("Longitude is:", long)
      });

      await fetch(`${process.env.REACT_APP_API_URL}?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          //console.log(result);
        });
    }
    fetchData();
  }, [lat, long])

  return (
    <div className="App">
      <Container className="container" fluid>

        {(typeof data.main != 'undefined') ? (
          <Weather weatherData={data} lat={lat} long={long} />
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Your Weather Data Is Loading...</span>
          </Spinner>
        )}
      </Container>
    </div>
  );
}

export default App;
