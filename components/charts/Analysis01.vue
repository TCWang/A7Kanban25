<template>
  <div class="m-4">
    <h3>桃園主要預售屋 區域行情</h3>
    八德區, 中壢區, 桃園區 及 龜山區 房屋市場行情比較:
    龜山區於2024年平均每坪價超越中壢區, 2023年起龜山區成交量也成為桃園第一。
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
        labels: [
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
        ],
        datasets: [
          {
            yAxisID: "A",
            label: "八德區-成交量",
            data: [, 6, 11, 39, 40, 295, 234, 12, 708, 1038, 1501, 1094],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "八德區-每坪單價",
            data: [
              ,
              22.11,
              20.6,
              23.85,
              19.91,
              20.98,
              20.55,
              20.85,
              26.79,
              31.41,
              33.49,
              37.63,
            ],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "A",
            label: "中壢區-成交量",
            data: [
              801, 201, 146, 133, 341, 1022, 1341, 729, 2629, 3549, 4278, 1508,
            ],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "中壢區-每坪單價",
            data: [
              29.94, 31.15, 25.59, 20.88, 18.89, 23.75, 23.36, 32.53, 37.3,
              40.68, 41.05, 42.41,
            ],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "A",
            label: "桃園區-成交量",
            data: [94, 11, 39, 93, 309, 751, 683, 1064, 2290, 2647, 2366, 1408],
            backgroundColor: ["rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 206, 86, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "桃園區-每坪單價",
            data: [
              35.85, 34.51, 34.01, 29.14, 26.41, 22.6, 25.07, 28.49, 34.64,
              39.13, 42.49, 46.76,
            ],
            backgroundColor: ["rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 206, 86, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "A",
            label: "龜山區-成交量",
            data: [, , 48, 29, 386, 955, 1398, 1039, 2708, 2389, 4379, 1645],
            backgroundColor: ["rgba(153, 102, 255, 0.2)"],
            borderColor: ["rgba(153, 102, 255, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "龜山區-每坪單價",
            data: [
              ,
              ,
              32.31,
              29.27,
              30.03,
              27.11,
              26.15,
              24.42,
              29.72,
              36.03,
              38.75,
              43.26,
            ],
            backgroundColor: ["rgba(153, 102, 255, 0.2)"],
            borderColor: ["rgba(153, 102, 255, 1)"],
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
