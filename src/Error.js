import React from 'react';
import Alert from 'react-bootstrap/Alert'

class Error extends React.Component {
  render() {
    return (
      <Alert variant="info">
      <Alert.Heading>Sorry, we couldn't find what your looking for.</Alert.Heading>
      <hr />
      <p className="mb-0">
        Please check the spelling of the city entered.
      </p>
    </Alert>
    );
  }
}

export default Error;