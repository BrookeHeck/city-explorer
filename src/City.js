import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class City extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="bottom" src={this.props.mapUrl} alt='map' />
          <Card.Body>
          <Card.Title>{this.props.cityData.display_name}</Card.Title>
            <Card.Text>
              Coordinates: {this.props.cityData.lat}, {this.props.cityData.lon}
          </Card.Text>
          <Button variant="primary">Details</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default City;