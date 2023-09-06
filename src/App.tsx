import React, { useState } from "react";
import VerticalBarChart from "./componetns/VerticalBarChart";
import "./styles/index.scss";

function App() {
  const [labels1, setLabels1] = useState<number[]>([17, 23, 45, 40, 50, 30]);
  const [labels2, setLabels2] = useState<number[]>([7, 3, 35, 10, 20, 15]);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__block">
          <VerticalBarChart data={labels1} />
        </div>
        <div className="app__block">
          <VerticalBarChart data={labels2} />
        </div>
      </div>
    </div>
  );
}

export default App;
