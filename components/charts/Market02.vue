<template>
  <div class="m-4">
    <h3>A7 生活圈 房屋市場趨勢 看板 20 - 2024(Q2)</h3>
    <p class="text-red-600">可點擊圖中項目, 獲得該項數值顯示</p>
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
            data: [86, 186, 316, 712, 170],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "樂善國小-每坪單價",
            data: [21.71, 26.67, 35.79, 37.49, 42.13],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "A",
            label: "郵政物流-成交量",
            data: [277, 254, 95, 302, 242],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "郵政物流-每坪單價",
            data: [22.3, 28.46, 35.08, 39.12, 44.79],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "A",
            label: "中心商業-成交量",
            data: [322, 1194, 1216, 1736, 500],
            backgroundColor: ["rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 206, 86, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "中心商業-每坪單價",
            data: [24.57, 29.75, 36.87, 39.29, 40.97],
            backgroundColor: ["rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 206, 86, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "A",
            label: "文青國小-成交量",
            data: [70, 777, 352, 1272, 657],
            backgroundColor: ["rgba(153, 102, 255, 0.2)"],
            borderColor: ["rgba(153, 102, 255, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "文青國小-每坪單價",
            data: [31.53, 29.14, 33.16, 38.73, 44.86],
            backgroundColor: ["rgba(153, 102, 255, 0.2)"],
            borderColor: ["rgba(153, 102, 255, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "A",
            label: "體育大學-成交量",
            data: [66, 43, 179, 3, 0],
            backgroundColor: ["rgba(255, 159, 63, 0.2)"],
            borderColor: ["rgba(255, 159, 63, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "體育大學-每坪單價",
            data: [26.34, 26.55, 32.86, 32.0],
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
            ticks: { beginAtZero: false, color: "red", min: 20, max: 50 },
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
