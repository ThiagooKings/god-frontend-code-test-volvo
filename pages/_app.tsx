import "../public/css/styles.css";
import React from "react";
import Carousel from "../src/components/Carousel/Carousel";
import Card from "../src/components/Card/Card";

function HomePage() {
  return (
    <React.StrictMode>
      <Carousel />
    </React.StrictMode>
  );
}

export default HomePage;
