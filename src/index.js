import React from "react";
import ReactDOM from "react-dom/client";
import BmiCalc from "./BmiCalc";
import Color from "./Color";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BmiCalc />
    <Color />
    <Footer />
  </>
);
