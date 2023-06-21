import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/features-actions/signupSlice";
import { Link } from "react-router-dom";

const LogoutModal = (props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
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
        <h4>Are you sure you want to Logout ?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Link to={"/"}>
          <Button className="logout-btn" onClick={() => handleLogout()}>
            Logout
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default LogoutModal;
