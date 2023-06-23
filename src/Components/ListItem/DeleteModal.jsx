import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/features-actions/deletePostThunk";
import { decreaseCounter } from "../../redux/features-actions/newPostFormSlice";

const DeleteModal = (props) => {
  const dispatch = useDispatch();
  const { id, onHide } = props;

  const deleteItem = () => {
    const itemId = id;
    dispatch(deletePost(itemId));
    dispatch(decreaseCounter);
    onHide();
  };

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
        <h4>Are you sure you want to delete this item?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button className="cancel-btn" onClick={onHide}>
          Cancel
        </Button>
        <Button onClick={() => deleteItem()} className="delete-btn">
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
