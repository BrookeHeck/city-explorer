import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedMap.css';

class SelectedMap extends React.Component {
  render() {
    return (
      <Modal style={{width: '90vw'}} show={this.props.showMap}>
        <Modal.Header closeButton onClick={this.props.closeMapModal}>
          <Modal.Title>{this.props.cityName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.map} alt='large map' title={this.props.cityName}/>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SelectedMap;