import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import WeatherDay from './WeatherDay.js';
import Movie from './Movie.js';
import Restaurant from './Restaurant.js';
import '../css/City.css';

class City extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.cityData.display_name}</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Coordinates</Accordion.Header>
            <Accordion.Body>
              <p>Latitude: {this.props.cityData.lat}, </p>
              <p> Longitude: {this.props.cityData.lon}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Weather</Accordion.Header>
            <Accordion.Body>
              {
                this.props.weatherData.map((forecast, idx) => (
                  <WeatherDay forecast={forecast} key={idx} />
                ))
              }
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <img src={this.props.mapUrl} alt='map' />


        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Movies
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Restaurants
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div id="movies">
          {
            this.props.movieData.map(movie => (
              <Movie movie={movie} key={movie.id} />
            ))
          }
        </div>
        <div id='restaurants'>
          {
            this.props.restaurantData.map(restaurant => (
              <Restaurant restaurant={restaurant} key={restaurant.id} />
            ))
          }
        </div>
      </>
    );
  }
}

export default City;