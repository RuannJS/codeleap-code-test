import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import CreatePost from "../../Components/CreatePost/CreatePost";
import ListPost from "../../Components/ListPost/ListPost";

const MainPage = () => {
  return (
    <section>
      <header>
        <NavigationBar />
      </header>
      <div className="content container">
        <CreatePost />
        <ListPost />
      </div>
    </section>
  );
};

export default MainPage;
