import React from 'react';
import Card from 'react-bootstrap/Card';
import './Movie.css';

class Movie extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.props.movie.title}</Card.Title>
            <Card.Text>
              {this.props.movie.overview}
            </Card.Text>
            <Card.Img variant="bottom" src={this.props.movie.imgPath} alt="Movie Image" />
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Movie;