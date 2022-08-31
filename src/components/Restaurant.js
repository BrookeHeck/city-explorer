import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/Restaurant.css';

class Restaurant extends React.Component {
  render() {
    console.log(this.props.restaurant);
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title><a href={this.props.restaurant.url} target='_blank' rel='noreferrer'>{this.props.restaurant.name}</a></Card.Title>
            <Card.Text>{`Rating: ${this.props.restaurant.rating}`}</Card.Text>
            <Card.Text>{`Price: ${this.props.restaurant.price}`}</Card.Text>
            {this.props.restaurant.imgUrl && 
            <Card.Img variant="bottom" src={this.props.restaurant.imgUrl} alt="Restaurant Image" />}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Restaurant;