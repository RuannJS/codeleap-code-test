import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import "./App.css";
import MainPage from "./Pages/Main/MainPage";
import LoginControl from "./Pages/LoginControl/LoginControl";

const App = () => {
  const { isLogged } = useSelector((state) => state.signup);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route
          path="/main"
          element={isLogged ? <MainPage /> : <LoginControl />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
