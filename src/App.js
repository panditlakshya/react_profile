import "./App.css";
import Header from "./Components/header/Header";
import React from "react";
import useWindowScroll from "./hooks/useWindowScroll";

function App() {
  const [show, handleShow] = useWindowScroll(false);
  return (
    <div className="app">
      <Header show={show} />
    </div>
  );
}

export default App;
