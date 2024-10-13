import { Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
//import Message from "./components/Message.tsx";
import ListGroup from "./components/ListGroup.tsx";

const cities = [
  "New York",
  "Singapore",
  "Amsterdam",
  "Bangkok",
  "Penang",
  "Rotterdam",
];

function App() {
  return (
    <>
      <b>Choose your city</b>
      <ListGroup listitems={cities} active={5}></ListGroup>
    </>
  );
}

export default App;
