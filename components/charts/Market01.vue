<template>
  <div class="m-4">
    <h3>A7 房屋市場趨勢 看板 2017年 Q2 - 2024年 Q1</h3>
    <p>
      本圖依據內政部: 不動產交易實價查詢服務網 / 預售屋查詢 資料。
      數量價格屬住宅戶, 不包含一樓商店戶
    </p>
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
          "2017 Q2",
          "2017 Q3",
          "2017 Q4",
          "2018 Q1",
          "2018 Q2",
          "2018 Q3",
          "2018 Q4",
          "2019 Q1",
          "2019 Q2",
          "2019 Q3",
          "2019 Q4",
          "2020 Q1",
          "2020 Q2",
          "2020 Q3",
          "2020 Q4",
          "2021 Q1",
          "2021 Q2",
          "2021 Q3",
          "2021 Q4",
          "2022 Q1",
          "2022 Q2",
          "2022 Q3",
          "2022 Q4",
          "2023 Q1",
          "2023 Q2",
          "2023 Q3",
          "2023 Q4",
          "2024 Q1",
        ],
        datasets: [
          {
            yAxisID: "A",
            label: "成交量",
            data: [
              130, 129, 126, 98, 287, 266, 290, 191, 383, 391, 384, 207, 186,
              252, 176, 53, 19, 779, 1603, 571, 494, 709, 384, 442, 1132, 1081,
              1370, 351,
            ],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "平均每坪單價(萬元)",
            data: [
              29.91, 29.83, 30.38, 30.7, 26.52, 26.42, 26.53, 24.82, 24.34,
              25.74, 27.17, 25.67, 23.75, 23.16, 24.61, 24.34, 25.92, 27.72,
              30.02, 34.01, 35.17, 36.96, 36.55, 37.53, 37.46, 38.76, 40.28,
              41.61,
            ],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
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
            ticks: { color: "red", min: 30, max: 45 },
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
