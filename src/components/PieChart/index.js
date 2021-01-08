import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getPieChartData } from "../../actions/pieChartActions";

const PieChart = () => {
  const dispatch = useDispatch();

  const pieChart = useSelector((state) => state.pieChart);
  const { pieChartData, loading } = pieChart;

  const state = {
    labels: pieChartData && pieChartData.labels,
    datasets: [
      {
        label: "producto",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: pieChartData && pieChartData.values,
      },
    ],
  };

  useEffect(() => {
    dispatch(getPieChartData());
  }, [dispatch]);

  return (
    <div>
      {loading && <CircularProgress />}
      {pieChartData && (
        <Pie
          data={state}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display: true,
              text: "Ventas por tipo de producto",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      )}
    </div>
  );
};

export default PieChart;
