<template>
  <div class="p-2">
    <h2>行政里 戶數統計</h2>
    註: 文青里中原有合宜住宅商店數未計！
    <Bar id="myChart" :options="chartOptions" :data="chartData"></Bar>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
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
  name: "BarChartTeamplate",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["文化里", "文青里", "長庚里", "樂善里"],
        datasets: [
          {
            yAxisID: "A",
            label: "住家",
            data: [1159, 5935, 2652, 16644],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            type: "bar",
          },

          {
            yAxisID: "A",
            label: "商店",
            data: [12, 31, 118, 417],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
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
