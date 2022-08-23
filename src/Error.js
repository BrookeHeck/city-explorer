import React from 'react';
import Modal from 'react-bootstrap/Modal';

class Error extends React.Component {
  render() {
    return (
      <Modal show={this.props.error}>
        <Modal.Header closeButton onClick={this.props.closeErrorModal}>
          <Modal.Title>Sorry, we couldn't find the city you were looking for.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please double check the spelling of the city.</p>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Error;