import React from "react";
import "./CreatePost.scss";
import NewPostForm from "../NewPostForm/NewPostForm";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const { username } = useSelector((state) => state.signup);

  return (
    <section className="create-container shadow mt-3">
      <div className="form-container">
        <h3>Welcome {username}, what's on your mind?</h3>
        <NewPostForm />
      </div>
    </section>
  );
};

export default CreatePost;
