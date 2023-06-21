import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

const MainPage = () => {
  return (
    <section>
      <header>
        <NavigationBar />
      </header>
      <div className="content container"></div>
    </section>
  );
};

export default MainPage;
