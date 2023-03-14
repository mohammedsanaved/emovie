import React from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import Detail from "./components/Detail";
function App() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path={"/"} element={<Cards />} />
        <Route path={"/addmovie"} element={<AddMovie />} />
        <Route path={"/detail/:id"} element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
