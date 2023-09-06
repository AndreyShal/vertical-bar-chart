import { useState } from "react";
import "./index.scss";

interface ChildProps {
  data: number[];
}

const generateKey = (pre: number) => {
  return `${pre}_${new Date().getTime()}`;
};

const VerticalBarChart: React.FC<ChildProps> = ({ data }) => {
  const [sum, setSum] = useState(data.reduce((partialSum, a) => partialSum + a, 0));

  return (
    <div className="vertical-bar-chart">
      <ul className="vertical-bar-chart__list">
        {data.map((num, index) => (
          <li
            key={generateKey(num)}
            className="vertical-bar-chart__item"
            style={{ width: `calc(80% / ${data.length})`, height: `${(num / sum) * 100}%` }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalBarChart;
