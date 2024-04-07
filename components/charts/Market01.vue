<template>
  <div class="m-4">
    <h2>A7 房屋市場趨勢 看板 2023 Q1 - 2024 Q1</h2>
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
        labels: ["2023 Q1", "2023 Q2", "2023 Q3", "2023 Q4", "2024 Q1"],
        datasets: [
          {
            yAxisID: "A",
            label: "銷售戶數",
            data: [301, 697, 999, 859, 399],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "平均每坪單價(萬元)",
            data: [37.5, 37.4, 38.7, 40.0, 41.6],
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
          },
          B: {
            type: "linear",
            position: "right",
            ticks: { color: "red", min: 30, max: 45 },
            grid: { display: false },
          },
        },
      },
    };
  },
};
</script>

<style scoped></style>
