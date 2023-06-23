import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditModal = (props) => {
  const { id, onHide } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          CodeLeap Network
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure you want to edit this item?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button className="cancel-btn" onClick={onHide}>
          Cancel
        </Button>
        <Button className="delete-btn">Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
