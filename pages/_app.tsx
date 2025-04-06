import { HelloWorld } from "../src/components/HelloWorld";
import "../public/css/styles.css";
import React from "react";
import Card from "../src/components/Card/Card";

function HomePage() {
  return (
    <React.StrictMode>
      <HelloWorld />
      <Card />
    </React.StrictMode>
  );
}

export default HomePage;
