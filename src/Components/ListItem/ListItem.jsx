import { useState } from "react";
import React from "react";
import "./ListItem.scss";
import moment from "moment/moment";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import { useSelector } from "react-redux";

const ListItem = (item) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const { loginUsername } = useSelector((state) => state.signup);

  const { content, created_datetime, id, title, username } = item.item;

  const handleDelete = () => {
    setDeleteModal(!deleteModal);
  };

  const handleEdit = () => {
    setEditModal(!editModal);
  };

  return (
    <div id={id} className="item-container shadow">
      <div className="title-container">
        {loginUsername === username ? (
          <div className="row">
            <h2 className="col-8">{title}</h2>
            <div className="col-4 text-end">
              <img
                onClick={() => handleDelete()}
                className="icon"
                src="src\assets\delete-icon.svg"
                alt="delete"
              />
              <img
                onClick={() => handleEdit()}
                className="icon"
                src="src\assets\edit-icon.svg"
                alt="edit"
              />
            </div>
          </div>
        ) : (
          <h2>{title}</h2>
        )}
      </div>

      <div className="username-time-container row container">
        <span className="fs-6 col-6 ">@{username}</span>
        <span className="fs-6 col-6 text-end">
          {moment(created_datetime).fromNow()}
        </span>
      </div>
      <div className="content-container container">
        <p>{content}</p>
      </div>
      <DeleteModal
        show={deleteModal}
        id={id}
        onHide={() => setDeleteModal(!deleteModal)}
      />
      <EditModal
        id={id}
        show={editModal}
        onHide={() => setEditModal(!editModal)}
      />
    </div>
  );
};

export default ListItem;
