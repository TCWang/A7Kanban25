<template>
  <div class="p-2">
    <h2>生活圈 戶數統計</h2>
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
        labels: [
          "1.樂善國小生活圈",
          "2.郵政物流園區",
          "3.中心商業區",
          "4.文青國小生活圈",
          "5.體育大學生活圈",
        ],
        datasets: [
          {
            yAxisID: "A",
            label: "住家",
            data: [3471, 2925, 9084, 4975, 5935],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            type: "bar",
          },

          {
            yAxisID: "A",
            label: "商店",
            data: [136, 45, 243, 123, 31],
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
