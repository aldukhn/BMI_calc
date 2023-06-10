import React, { useState } from "react";
import "./App.sass";
import Header from "./components/Header";
import BmiForm from "./components/BmiForm";
import Result from "./components/Result";

function BmiCalc() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  return (
    <div id="app">
      <div className="container">
        <Header />
        <BmiForm
          height={height}
          setHeight={setHeight}
          setWeight={setWeight}
          weight={weight}
          setResult={setResult}
        />
        <Result result={result} />
      </div>
    </div>
  );
}

export default BmiCalc;
