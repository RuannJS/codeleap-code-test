import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  titleChange,
  contentChange,
  decreaseCounter,
  clearInput,
} from "../../redux/features-actions/newPostFormSlice";
import { editPost } from "../../redux/features-actions/editPostThunk";

const EditModal = (props) => {
  const dispatch = useDispatch();

  const { title, content } = useSelector((state) => state.newpost);

  const { id, onHide } = props;

  const handleTitle = (event) => {
    const title = event.target.value;
    dispatch(titleChange(title));
  };

  const handleContent = (event) => {
    const content = event.target.value;
    dispatch(contentChange(content));
  };

  const handleEditPost = () => {
    const data = {
      id: id,
      title: title,
      content: content,
    };
    dispatch(editPost(data));
    dispatch(clearInput());
    onHide();
    setTimeout(() => dispatch(decreaseCounter()), 500);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label className="fs-5" htmlFor="form-title">
              Title
            </Form.Label>
            <Form.Control
              onChange={handleTitle}
              type="text"
              placeholder="Hello world"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label className="fs-5" htmlFor="form-content">
              Content
            </Form.Label>
            <Form.Control
              onChange={handleContent}
              as="textarea"
              placeholder="Content here"
              style={{ height: "75px" }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="cancel-btn" onClick={onHide}>
          Cancel
        </button>
        {title.length < 1 || content.length < 1 ? (
          <button type="button" disabled className="save-disabled-btn">
            Save
          </button>
        ) : (
          <button
            onClick={() => handleEditPost()}
            type="button"
            className="save-btn"
          >
            Save
          </button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
