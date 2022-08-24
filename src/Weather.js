import React from 'react'
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: '15vw' }}>
          <Card.Body>
            <Card.Title>{this.props.forecast.date}</Card.Title>
            <Card.Text>
              {`Temperature of ${this.props.forecast.temp} with ${this.props.forecast.description}`}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Weather;