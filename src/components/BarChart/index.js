import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getBarChartData } from "../../actions/barChartActions";

const BarChart = () => {
  const dispatch = useDispatch();

  const barChart = useSelector((state) => state.barChart);
  const { barChartData, loading } = barChart;

  const state = {
    labels: barChartData && barChartData.labels,
    datasets: [
      {
        label: "Ventas",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: barChartData && barChartData.values,
      },
    ],
  };

  useEffect(() => {
    dispatch(getBarChartData());
  }, [dispatch]);

  return (
    <>
      {loading && <CircularProgress />}
      {barChartData && (
        <Bar
          data={state}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display: true,
              text: "Promedio de ventas mensuales",
              fontSize: 20,
              marginLeft: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      )}
    </>
  );
};

export default BarChart;
