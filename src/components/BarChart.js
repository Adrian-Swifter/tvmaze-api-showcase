import React, { useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";

function BarChart(props) {
  let data = {
    labels: [props.tvShow1.name, props.tvShow2.name, props.tvShow3.name],
    datasets: [
      {
        label: "Rating",
        data: [
          props.tvShow1.rating && props.tvShow1.rating.average,
          props.tvShow2.rating && props.tvShow2.rating.average,
          props.tvShow3.rating && props.tvShow3.rating.average,
        ],
        backgroundColor: ["gold", "gold", "gold"],
      },
    ],
  };

  return (
    <div className="BarChart">
      <h1>Rating Chart</h1>
      <Bar data={data} />
    </div>
  );
}

export default BarChart;
