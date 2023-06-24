import React, { useRef } from "react";
import "./NewPostForm.scss";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../../redux/features-actions/createPostThunk";
import {
  titleChange,
  contentChange,
  clearInput,
  increaseCounter,
} from "../../redux/features-actions/newPostFormSlice";

const NewPostForm = () => {
  const contentRef = useRef(null);
  const titleRef = useRef(null);

  const { title, content } = useSelector((store) => store.newpost);
  const { loginUsername } = useSelector((store) => store.signup);

  const dispatch = useDispatch();

  const handleTitle = (event) => {
    const title = event.target.value;
    dispatch(titleChange(title));
  };

  const handleContent = (event) => {
    const content = event.target.value;
    dispatch(contentChange(content));
  };

  const handleNewPost = () => {
    const data = {
      username: loginUsername,
      title: title,
      content: content,
    };
    dispatch(createPost(data));
    contentRef.current.value = "";
    titleRef.current.value = "";
    dispatch(clearInput());
    setTimeout(() => dispatch(increaseCounter()), 500);
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label className="fs-5" htmlFor="form-title">
          Title
        </Form.Label>
        <Form.Control
          ref={titleRef}
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
          ref={contentRef}
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
          <button
            onClick={() => handleNewPost()}
            type="button"
            className="newpost-btn mt-3"
          >
            Create
          </button>
        )}
      </div>
    </Form>
  );
};

export default NewPostForm;
