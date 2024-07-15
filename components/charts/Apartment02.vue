<template>
  <div class="m-4">
    <h3>2024上半年 (1-6月) A7 房屋市場匯總</h3>
    <p>
      本圖依據內政部: 不動產交易實價查詢服務網 / 預售屋查詢 資料。
      數量價格屬住宅戶, 不包含一樓商店戶 <br />
      2024年26個建案, 最高平均單價 富宇哈佛苑 46.48, 最低 和境心見 35.21。
      其中14個建案在 40萬/坪以上, 12個建案 在35-40 萬/坪。<br />
      2024上半年銷售量 以溫莎堡奪魁 412戶, 其次為 鉑悅 246 戶。富宇富御 及
      頤昌筑岳 也都超過百戶銷售額。
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
          "富宇哈佛苑",
          "富宇富御",
          "頤昌筑岳",
          "溫莎堡",
          "捷市達",
          "富宇天玥",
          "禾悅花園",
          "豐邑森活",
          "富宇上城",
          "豐邑Green iN",
          "鉑悅",
          "允將大聚",
          "鴻築玥",
          "富堡菁英匯",
          "丹佛花都",
          "大華昇耕",
          "大華旭",
          "允將大作",
          "智匯學",
          "竹城中州",
          "富來舞綻",
          "君邑羅浮",
          "合展家禾",
          "鴻廣絵青",
          "維特魯威",
          "和境心見",
        ],
        datasets: [
          {
            yAxisID: "A",
            label: "成交量",
            data: [
              7, 139, 135, 412, 25, 28, 6, 67, 62, 25, 246, 47, 35, 36, 35, 49,
              4, 20, 13, 48, 34, 42, 28, 18, 5, 3,
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
              46.48, 46.46, 46.14, 45.57, 45.54, 45.38, 44.73, 44.61, 43.25,
              43.06, 42.62, 41.74, 40.88, 40.32, 39.93, 39.63, 39.41, 38.76,
              38.6, 38.22, 37.99, 37.35, 36.26, 36.24, 35.7, 35.21,
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
