import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteConfirmation(props) {
  return (
    <div>
      <Modal show={props.showModal} onHide={()=>{props.closeConfirmationModalHandler()}}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{props.closeConfirmationModalHandler()}}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>{props.deleteConfirmHandler()}}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default DeleteConfirmation
