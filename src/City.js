import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Weather from './Weather.js';
import './City.css';

class City extends React.Component {
  handleRemove = () => this.props.removeCity(this.props.cityData.display_name);

  handleSelect = () => {this.props.handleMapSelect(this.props.cityData.display_name, this.props.mapUrl)};

  render() {
    return (
      <>
        <Card style={{ width: '25rem'}}>
          <Card.Body>
          <Card.Title>{this.props.cityData.display_name}</Card.Title>
            <Card.Text>
              Coordinates: {this.props.cityData.lat}, {this.props.cityData.lon}
          </Card.Text>
          <Weather weatherData={this.props.weatherData}/>
          <Button variant='primary'>Details</Button>
          <Button variant='primary' onClick={this.handleRemove}>Remove</Button>
          </Card.Body>
          <Card.Img variant="bottom" src={this.props.mapUrl} alt='map' onClick={this.handleSelect} />
        </Card>
      </>
    );
  }
}

export default City;