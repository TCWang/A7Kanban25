import { defineNuxtPlugin } from "#app";
import {
  Bar,
  Line,
  Doughnut,
  Pie,
  Scatter,
  Bubble,
  PolarArea,
  Radar,
} from "vue-chartjs";
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
  ArcElement,
} from "chart.js";

export default defineNuxtPlugin((nuxtApp) => {
  // Guard to keep Chart.js from initializing during SSR where the DOM is unavailable.
  if (import.meta.server) {
    return;
  }

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    PointElement,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    ArcElement
  );

  nuxtApp.vueApp.component("LineChart", {
    extends: Line,
  });

  nuxtApp.vueApp.component("DoughnutChart", {
    extends: Doughnut,
  });

  nuxtApp.vueApp.component("BarChart", {
    extends: Bar,
  });

  nuxtApp.vueApp.component("PieChart", {
    extends: Pie,
  });

  nuxtApp.vueApp.component("ScatterChart", {
    extends: Scatter,
  });

  nuxtApp.vueApp.component("BubbleChart", {
    extends: Bubble,
  });

  nuxtApp.vueApp.component("RadarChart", {
    extends: Radar,
  });
});
