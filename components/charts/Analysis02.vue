<template>
  <div class="m-4">
    <h3>A7重劃區預售屋 臥房數及房屋總價趨勢</h3>
    依據 臥房數 的銷售成交量及總價比較:
    兩房及三房是區域市場主力。尤其近年來平均單價高漲後，首購族往往只能購買小坪數為主的二房。
    <p class="text-red-600">可點擊圖中項目, 獲得該項數值顯示</p>
    <Bar id="myChart2" :options="chartOptions" :data="chartData"></Bar>
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
  name: "MixBarChartTeamplate2",
  components: { Bar, Line },
  data() {
    return {
      chartData: {
        labels: [
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
            label: "一房-成交量",
            data: [, 136, 169, 43, 29, 27, 148, 15],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "一房-總價",
            data: [, 6.73, 6.45, 5.94, 7.4, 8.48, 7.56, 9.97],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "A",
            label: "兩房-成交量",
            data: [385, 613, 521, 203, 965, 1032, 2080, 694],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "兩房-總價",
            data: [11.55, 10.92, 7.84, 7.93, 9.46, 10.79, 11.13, 12.66],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "A",
            label: "三房-成交量",
            data: [, 188, 594, 437, 965, 692, 1282, 673],
            backgroundColor: ["rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 206, 86, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "三房-總價",
            data: [, 9.79, 9.9, 10.16, 12.06, 14.45, 14.77, 17.11],
            backgroundColor: ["rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 206, 86, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "A",
            label: "四房-成交量",
            data: [, , 22, 13, 67, 28, 66, 56],
            backgroundColor: ["rgba(153, 102, 255, 0.2)"],
            borderColor: ["rgba(153, 102, 255, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "四房-總價",
            data: [, , 11.37, 10.89, 15.6, 17.57, 18.57, 22.51],
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
            ticks: { beginAtZero: false, color: "red", min: 5, max: 25 },
            grid: { display: false },
            title: {
              display: true,
              text: "總價(百萬元)",
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped></style>
