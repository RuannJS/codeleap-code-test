import React from "react";
import "./ListItem.scss";
import moment from "moment/moment";

const ListItem = (item) => {
  const { content, created_datetime, id, title, username } = item.item;

  return (
    <div id={id} className="item-container shadow">
      <div className="title-container ">
        <h2>{title}</h2>
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
    </div>
  );
};

export default ListItem;
