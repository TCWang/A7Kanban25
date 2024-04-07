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
        labels: [
          "豐邑氧森",
          "富宇天玥",
          "鴻築玥",
          "豐邑Green iN",
          "鉑悅",
          "大華昇耕",
          "和境心見",
          "丹佛花都",
          "頤昌筑岳",
          "允將大聚",
        ],
        datasets: [
          {
            yAxisID: "A",
            label: "2023Q1-成交量",
            data: [30, 0, 0, 0, 51, 0, 0, 0, 0, 0],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            type: "bar",
          },

          {
            yAxisID: "A",
            label: "2023Q2-成交量",
            data: [37, 0, 0, 0, 177, 0, 89, 0, 0, 0],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            type: "bar",
          },

          {
            yAxisID: "A",
            label: "2023Q3-成交量",
            data: [17, 3, 4, 0, 80, 77, 14, 249, 0, 89],
            backgroundColor: ["rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 206, 86, 1)"],
            borderWidth: 1,
            type: "bar",
          },

          {
            yAxisID: "A",
            label: "2023Q4-成交量",
            data: [13, 58, 106, 0, 90, 27, 29, 127, 0, 202],
            backgroundColor: ["rgba(153, 102, 255, 0.2)"],
            borderColor: ["rgba(153, 102, 255, 1)"],
            borderWidth: 1,
            type: "bar",
          },

          {
            yAxisID: "A",
            label: "2024Q1-成交量",
            data: [20, 4, 27, 5, 79, 20, 1, 35, 70, 22],
            backgroundColor: ["rgba(255, 159, 63, 0.2)"],
            borderColor: ["rgba(255, 159, 63, 1)"],
            borderWidth: 1,
            type: "bar",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        indexAxis: "x",
        scales: {
          x: {
            stacked: true,
          },
          A: {
            stacked: true,
          },
        },
      },
    };
  },
};
</script>

<style scoped></style>
