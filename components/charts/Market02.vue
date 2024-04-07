<template>
  <div class="m-4">
    <h2>A7 生活圈 房屋市場趨勢 看板 2020 - 2024</h2>
    <Bar id="myChart" :options="chartOptions" :data="chartData"></Bar>
  </div>
</template>

<script>
import { Bar, Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);

export default {
  name: "MixBarChartTeamplate",
  components: { Bar, Line },
  data() {
    return {
      chartData: {
        labels: ["2020", "2021", "2022", "2023", "2024"],
        datasets: [
          {
            yAxisID: "A",
            label: "樂善國小-成交量",
            data: [924, 857, 456, 969, 105],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "樂善國小-每坪單價",
            data: [22.44, 26.43, 34.49, 37.0, 39.04],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "A",
            label: "郵政物流-成交量",
            data: [1085, 405, 56, 146, 21],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "郵政物流-每坪單價",
            data: [25.37, 29.43, 38.23, 40.36, 42.07],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "A",
            label: "中心商業-成交量",
            data: [1797, 2049, 1146, 1545, 88],
            backgroundColor: ["rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 206, 86, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "中心商業-每坪單價",
            data: [25.72, 28.39, 35.55, 38.02, 38.61],
            backgroundColor: ["rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 206, 86, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "A",
            label: "文青國小-成交量",
            data: [1243, 1145, 657, 1793, 224],
            backgroundColor: ["rgba(153, 102, 255, 0.2)"],
            borderColor: ["rgba(153, 102, 255, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "文青國小-每坪單價",
            data: [26.11, 28.37, 35.2, 39.18, 43.1],
            backgroundColor: ["rgba(153, 102, 255, 0.2)"],
            borderColor: ["rgba(153, 102, 255, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "A",
            label: "體育大學-成交量",
            data: [197, 372, 558, 363, 13],
            backgroundColor: ["rgba(255, 159, 63, 0.2)"],
            borderColor: ["rgba(255, 159, 63, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "體育大學-每坪單價",
            data: [26.14, 24.76, 31.02, 33.69, 34.99],
            backgroundColor: ["rgba(255, 159, 63, 0.2)"],
            borderColor: ["rgba(255, 159, 63, 1)"],
            borderWidth: 1,
            type: "line",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        indexAxis: "x",
        scales: {
          A: {
            type: "linear",
            position: "left",
            ticks: { beginAtZero: true, color: "blue" },
            // Hide grid lines, otherwise you have separate grid lines for the 2 y axes
            grid: { display: false },
            title: {
              display: true,
              text: "成交量",
            },
          },
          B: {
            type: "linear",
            position: "right",
            ticks: { beginAtZero: false, color: "red", min: 20, max: 45 },
            grid: { display: false },
            title: {
              display: true,
              text: "平均每坪(萬元)",
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped></style>
