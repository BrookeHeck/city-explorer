import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class City extends React.Component {
  render() {
    console.log(this.props.mapUrl);
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="bottom" src={this.props.mapUrl} alt='map' />
          <Card.Body>
          <Card.Title>{this.props.cityData.display_name}</Card.Title>
            <Card.Text>
              {this.props.cityData.lat}, {this.props.cityData.lon}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default City;