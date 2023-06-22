import React from "react";
import "./NewPostForm.scss";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import {
  titleChange,
  contentChange,
} from "../../redux/features-actions/newPostFormSlice";

const NewPostForm = () => {
  const dispatch = useDispatch();

  const handleTitle = (event) => {
    const title = event.target.value;
    dispatch(titleChange(title));
  };

  const handleContent = (event) => {
    const Content = event.target.value;
    dispatch(contentChange(Content));
  };

  const { title, content } = useSelector((store) => store.newpost);

  return (
    <Form>
      <Form.Group>
        <Form.Label className="fs-5" htmlFor="form-title">
          Title
        </Form.Label>
        <Form.Control
          id="form-title"
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
          id="form-content"
          onChange={handleContent}
          as="textarea"
          placeholder="Content here"
          style={{ height: "75px" }}
        />
      </Form.Group>
      <div className="btn-container text-end">
        {title.length < 1 || content.length < 1 ? (
          <button type="button" disabled className="newpost-disabled-btn mt-3">
            Create
          </button>
        ) : (
          <button type="button" className="newpost-btn mt-3">
            Create
          </button>
        )}
      </div>
    </Form>
  );
};

export default NewPostForm;
