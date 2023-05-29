import React from "react";
import ReactDOM from "react-dom";
import EmblaCarousel from "./EmblaCarousel.component";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const App = () => (
  <main>
    <EmblaCarousel slides={slides} />
  </main>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
