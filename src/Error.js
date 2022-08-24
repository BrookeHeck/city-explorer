import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './Error.css';

class Error extends React.Component {
  render() {
    return (
      <Modal show={this.props.error}>
        <Modal.Header closeButton onClick={this.props.closeErrorModal}>
          <Modal.Title>Sorry, we couldn't find the city you are looking for.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src='../img/errorPhoto.avif' alt='Angry Octopus'/>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Error;