<template>
  <div class="m-4">
    <h3>A7 社區房價 趨勢</h3>
    依據實價登錄網站資料，以住宅(不含一樓店家)為範圍。 <br />

    <select
      id="apartment"
      class="m-4 p-2 btn btn-primary"
      v-model="selectedApartment"
      @change="changeApartment"
    >
      <option value="大華旭">大華旭</option>
      <option value="大華昇耕">大華昇耕</option>
      <option value="丹佛花都">丹佛花都</option>
      <option value="允將大聚">允將大聚</option>
      <option value="允將大聚">允將大作</option>
      <option value="禾悅花園">禾悅花園</option>
      <option value="合展家禾">合展家禾</option>
      <option value="竹城中州">竹城中州</option>
      <option value="君邑羅浮">君邑羅浮</option>
      <option value="和境心見">和境心見</option>
      <option value="捷市達">捷市達</option>
      <option value="富宇上城">富宇上城</option>
      <option value="富宇天玥">富宇天玥</option>
      <option value="富宇哈佛苑">富宇哈佛苑</option>
      <option value="富宇富御">富宇富御</option>
      <option value="富來舞綻">富來舞綻</option>
      <option value="富堡菁英匯">富堡菁英匯</option>
      <option value="溫沙堡">溫沙堡</option>
      <option value="智匯學">智匯學</option>
      <option value="鉑悅">鉑悅</option>
      <option value="維特魯威">維特魯威</option>
      <option value="頤昌筑岳">頤昌筑岳</option>
      <option value="鴻廣絵青">鴻廣絵青</option>
      <option value="鴻築玥">鴻築玥</option>
      <option value="豐邑GreeniN">豐邑GreeniN</option>
      <option value="豐邑森活">豐邑森活</option>
    </select>

    <Bar id="myChart" :options="chartOptions" :data="computedChartData"></Bar>
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
  name: "MixBarLineChart",
  components: { Bar, Line },
  data() {
    return {
      selectedApartment: "富宇上城",
      chartData: [
        {
          name: "Y110Q3",
          price: {
            大亮時代A7: "31.59 ",
            允將大作: "29.53 ",
            友文化: "22.86 ",
            文華天際: "25.88 ",
            水悅青青: "24.65 ",
            台北國際村: "35.86 ",
            禾悅花園: "31.34 ",
            合謙學: "29.34 ",
            竹城甲子園: "26.06 ",
            君邑丘比特: "28.79 ",
            和洲金剛: "27.23 ",
            和發大境: "27.68 ",
            和耀恆美: "24.72 ",
            皇普MVP: "24.61 ",
            捷市達: "32.50 ",
            富宇上城: "31.72 ",
            富宇天匯: "32.84 ",
            富宇哈佛苑: "35.09 ",
            富宇悅峰: "24.36 ",
            詠勝市中欣: "30.44 ",
            新潤翡麗: "28.12 ",
            維特魯威: "30.76 ",
            遠雄新未來3: "30.09 ",
            樂田田: "24.98 ",
            鴻廣新A7: "26.84 ",
            鴻築鴻典: "25.13 ",
            Ptotal: "27.79 ",
          },
          quantity: {
            大亮時代A7: "9",
            允將大作: "55",
            友文化: "10",
            文華天際: "68",
            水悅青青: "79",
            台北國際村: "1",
            禾悅花園: "35",
            合謙學: "13",
            竹城甲子園: "90",
            君邑丘比特: "15",
            和洲金剛: "21",
            和發大境: "54",
            和耀恆美: "32",
            皇普MVP: "21",
            捷市達: "41",
            富宇上城: "15",
            富宇天匯: "1",
            富宇哈佛苑: "18",
            富宇悅峰: "5",
            詠勝市中欣: "4",
            新潤翡麗: "8",
            維特魯威: "2",
            遠雄新未來3: "109",
            樂田田: "18",
            鴻廣新A7: "31",
            鴻築鴻典: "39",
            Qtotal: "795",
          },
        },
        {
          name: "Y110Q4",
          price: {
            大亮泊: "32.96 ",
            大亮時代A7: "39.51 ",
            允將大作: "31.25 ",
            文華天際: "28.06 ",
            水悅青青: "27.33 ",
            台北國際村: "38.30 ",
            玄泰T1: "26.56 ",
            玉子園: "21.18 ",
            禾悅花園: "36.10 ",
            合謙學: "31.27 ",
            竹城甲子園: "27.74 ",
            君邑丘比特: "29.32 ",
            和洲金剛: "28.18 ",
            和發大境: "30.16 ",
            和耀恆美: "25.92 ",
            皇普MVP: "25.66 ",
            捷市達: "34.69 ",
            富宇上城: "34.03 ",
            富宇哈佛苑: "38.39 ",
            富宇悅峰: "25.98 ",
            詠勝市中欣: "22.26 ",
            維特魯威: "31.26 ",
            頤昌澄岳: "33.34 ",
            頤昌璞岳: "27.26 ",
            頤昌豐岳: "48.36 ",
            鴻廣新A7: "28.42 ",
            鴻築鴻典: "24.83 ",
            Ptotal: "30.19 ",
          },
          quantity: {
            大亮泊: "399",
            大亮時代A7: "2",
            允將大作: "102",
            文華天際: "176",
            水悅青青: "51",
            台北國際村: "2",
            玄泰T1: "300",
            玉子園: "4",
            禾悅花園: "26",
            合謙學: "30",
            竹城甲子園: "50",
            君邑丘比特: "14",
            和洲金剛: "7",
            和發大境: "54",
            和耀恆美: "77",
            皇普MVP: "23",
            捷市達: "36",
            富宇上城: "23",
            富宇哈佛苑: "24",
            富宇悅峰: "14",
            詠勝市中欣: "1",
            維特魯威: "68",
            頤昌澄岳: "103",
            頤昌璞岳: "2",
            頤昌豐岳: "2",
            鴻廣新A7: "35",
            鴻築鴻典: "1",
            Qtotal: "1632",
          },
        },
        {
          name: "Y111Q1",
          price: {
            大亮泊: "35.56 ",
            大亮時代A7: "31.01 ",
            允將大作: "33.10 ",
            文華天際: "32.44 ",
            水悅青青: "31.78 ",
            玄泰T1: "30.78 ",
            禾悅花園: "37.29 ",
            合謙學: "32.99 ",
            君邑丘比特: "32.33 ",
            和發大境: "32.56 ",
            和耀恆美: "30.45 ",
            捷市達: "39.48 ",
            富宇上城: "37.85 ",
            富宇天匯: "41.31 ",
            富宇哈佛苑: "47.73 ",
            富宇悅峰: "25.88 ",
            維特魯威: "33.11 ",
            頤昌澄岳: "36.49 ",
            鴻廣新A7: "30.21 ",
            豐邑森活: "43.75 ",
            Ptotal: "34.58 ",
          },
          quantity: {
            大亮泊: "176",
            大亮時代A7: "1",
            允將大作: "36",
            文華天際: "48",
            水悅青青: "22",
            玄泰T1: "86",
            禾悅花園: "25",
            合謙學: "14",
            君邑丘比特: "10",
            和發大境: "23",
            和耀恆美: "19",
            捷市達: "27",
            富宇上城: "13",
            富宇天匯: "14",
            富宇哈佛苑: "12",
            富宇悅峰: "6",
            維特魯威: "20",
            頤昌澄岳: "20",
            鴻廣新A7: "8",
            豐邑森活: "15",
            Qtotal: "599",
          },
        },
        {
          name: "Y111Q2",
          price: {
            大亮泊: "37.24 ",
            允將大作: "34.76 ",
            文華天際: "33.01 ",
            水悅青青: "32.94 ",
            台北國際村: "38.94 ",
            玄泰T1: "34.10 ",
            禾悅花園: "40.73 ",
            合謙學: "31.15 ",
            君邑丘比特: "26.55 ",
            君邑羅浮: "40.06 ",
            和發大境: "33.06 ",
            和耀恆美: "30.98 ",
            捷市達: "41.40 ",
            富宇上城: "40.76 ",
            富宇天匯: "32.60 ",
            富宇哈佛苑: "44.65 ",
            維特魯威: "35.45 ",
            頤昌澄岳: "35.37 ",
            豐邑森活: "39.06 ",
            Ptotal: "35.50 ",
          },
          quantity: {
            大亮泊: "146",
            允將大作: "21",
            文華天際: "19",
            水悅青青: "10",
            台北國際村: "1",
            玄泰T1: "27",
            禾悅花園: "4",
            合謙學: "13",
            君邑丘比特: "1",
            君邑羅浮: "32",
            和發大境: "27",
            和耀恆美: "20",
            捷市達: "16",
            富宇上城: "3",
            富宇天匯: "114",
            富宇哈佛苑: "5",
            維特魯威: "10",
            頤昌澄岳: "9",
            豐邑森活: "28",
            Qtotal: "506",
          },
        },
        {
          name: "Y111Q3",
          price: {
            大亮泊: "38.29 ",
            大華旭: "37.31 ",
            允將大作: "35.51 ",
            台北國際村: "38.33 ",
            玄泰T1: "32.65 ",
            君邑羅浮: "39.24 ",
            和洲金剛: "31.76 ",
            和發大境: "34.10 ",
            和耀恆美: "32.04 ",
            捷市達: "42.80 ",
            富宇上城: "39.66 ",
            富宇天匯: "32.73 ",
            富宇哈佛苑: "45.66 ",
            智匯學: "34.74 ",
            鉑悅: "38.31 ",
            維特魯威: "35.63 ",
            頤昌澄岳: "35.52 ",
            鴻廣絵青: "37.84 ",
            豐邑森活: "36.89 ",
            Ptotal: "37.22 ",
          },
          quantity: {
            大亮泊: "146",
            大華旭: "68",
            允將大作: "29",
            台北國際村: "1",
            玄泰T1: "72",
            君邑羅浮: "59",
            和洲金剛: "1",
            和發大境: "8",
            和耀恆美: "2",
            捷市達: "17",
            富宇上城: "4",
            富宇天匯: "49",
            富宇哈佛苑: "3",
            智匯學: "1",
            鉑悅: "215",
            維特魯威: "3",
            頤昌澄岳: "1",
            鴻廣絵青: "17",
            豐邑森活: "30",
            Qtotal: "726",
          },
        },
        {
          name: "Y111Q4",
          price: {
            大亮泊: "36.82 ",
            大亮時代A7: "36.05 ",
            大華旭: "37.86 ",
            允將大作: "35.53 ",
            玄泰T1: "31.98 ",
            合展家禾: "35.05 ",
            君邑羅浮: "38.71 ",
            和洲金剛: "32.03 ",
            和發大境: "33.85 ",
            捷市達: "41.57 ",
            富宇上城: "40.36 ",
            富宇天匯: "33.56 ",
            富宇哈佛苑: "45.00 ",
            智匯學: "34.04 ",
            鉑悅: "39.03 ",
            鴻廣絵青: "35.45 ",
            豐邑森活: "36.99 ",
            Ptotal: "36.60 ",
          },
          quantity: {
            大亮泊: "93",
            大亮時代A7: "1",
            大華旭: "26",
            允將大作: "24",
            玄泰T1: "27",
            合展家禾: "22",
            君邑羅浮: "21",
            和洲金剛: "2",
            和發大境: "19",
            捷市達: "5",
            富宇上城: "5",
            富宇天匯: "12",
            富宇哈佛苑: "4",
            智匯學: "16",
            鉑悅: "67",
            鴻廣絵青: "21",
            豐邑森活: "24",
            Qtotal: "389",
          },
        },
        {
          name: "Y112Q1",
          price: {
            大亮泊: "38.14 ",
            大華旭: "37.98 ",
            允將大作: "36.13 ",
            玄泰T1: "31.72 ",
            合展家禾: "35.74 ",
            君邑羅浮: "38.85 ",
            和發大境: "37.85 ",
            捷市達: "41.53 ",
            富宇上城: "40.28 ",
            富宇天匯: "32.05 ",
            富宇哈佛苑: "44.82 ",
            富來舞綻: "40.20 ",
            富堡菁英匯: "43.39 ",
            智匯學: "34.43 ",
            鉑悅: "38.82 ",
            維特魯威: "35.69 ",
            鴻廣絵青: "35.36 ",
            豐邑森活: "38.19 ",
            Ptotal: "37.84 ",
          },
          quantity: {
            大亮泊: "100",
            大華旭: "11",
            允將大作: "27",
            玄泰T1: "28",
            合展家禾: "56",
            君邑羅浮: "28",
            和發大境: "13",
            捷市達: "13",
            富宇上城: "4",
            富宇天匯: "3",
            富宇哈佛苑: "2",
            富來舞綻: "7",
            富堡菁英匯: "46",
            智匯學: "16",
            鉑悅: "51",
            維特魯威: "2",
            鴻廣絵青: "21",
            豐邑森活: "30",
            Qtotal: "458",
          },
        },
        {
          name: "Y112Q2",
          price: {
            大亮泊: "37.64 ",
            大亮波波: "35.59 ",
            大亮時代A7: "47.98 ",
            大華旭: "37.45 ",
            允將大作: "35.04 ",
            玄泰T1: "33.53 ",
            禾悅花園: "41.04 ",
            合展家禾: "35.54 ",
            君邑羅浮: "40.05 ",
            和發大境: "34.33 ",
            和境心見: "34.76 ",
            捷市達: "41.72 ",
            富宇上城: "40.17 ",
            富宇哈佛苑: "45.47 ",
            富來舞綻: "38.44 ",
            富堡菁英匯: "43.81 ",
            智匯學: "36.16 ",
            鉑悅: "39.89 ",
            維特魯威: "34.92 ",
            鴻廣絵青: "35.43 ",
            豐邑森活: "38.85 ",
            Ptotal: "37.59 ",
          },
          quantity: {
            大亮泊: "139",
            大亮波波: "243",
            大亮時代A7: "1",
            大華旭: "30",
            允將大作: "6",
            玄泰T1: "44",
            禾悅花園: "2",
            合展家禾: "73",
            君邑羅浮: "51",
            和發大境: "10",
            和境心見: "92",
            捷市達: "23",
            富宇上城: "21",
            富宇哈佛苑: "7",
            富來舞綻: "24",
            富堡菁英匯: "76",
            智匯學: "45",
            鉑悅: "177",
            維特魯威: "4",
            鴻廣絵青: "45",
            豐邑森活: "37",
            Qtotal: "1150",
          },
        },
        {
          name: "Y112Q3",
          price: {
            大亮泊: "40.03 ",
            大亮波波: "39.35 ",
            大華旭: "38.01 ",
            大華昇耕: "36.71 ",
            丹佛花都: "40.23 ",
            允將大作: "35.90 ",
            允將大聚: "39.92 ",
            玄泰T1: "36.82 ",
            玄泰V1: "47.29 ",
            禾悅花園: "41.02 ",
            合展家禾: "35.54 ",
            竹城中州: "37.17 ",
            君邑羅浮: "39.31 ",
            和境心見: "34.77 ",
            捷市達: "42.11 ",
            富宇上城: "40.29 ",
            富宇天玥: "45.16 ",
            富宇哈佛苑: "45.75 ",
            富來舞綻: "37.86 ",
            富堡菁英匯: "41.65 ",
            智匯學: "35.77 ",
            鉑悅: "41.99 ",
            維特魯威: "36.14 ",
            鴻廣絵青: "35.69 ",
            鴻築玥: "37.47 ",
            豐邑森活: "42.13 ",
            Ptotal: "39.02 ",
          },
          quantity: {
            大亮泊: "80",
            大亮波波: "7",
            大華旭: "17",
            大華昇耕: "78",
            丹佛花都: "263",
            允將大作: "7",
            允將大聚: "89",
            玄泰T1: "4",
            玄泰V1: "1",
            禾悅花園: "4",
            合展家禾: "88",
            竹城中州: "15",
            君邑羅浮: "45",
            和境心見: "69",
            捷市達: "43",
            富宇上城: "35",
            富宇天玥: "3",
            富宇哈佛苑: "14",
            富來舞綻: "20",
            富堡菁英匯: "35",
            智匯學: "27",
            鉑悅: "80",
            維特魯威: "7",
            鴻廣絵青: "57",
            鴻築玥: "4",
            豐邑森活: "17",
            Qtotal: "1109",
          },
        },
        {
          name: "Y112Q4",
          price: {
            大華旭: "37.37 ",
            大華昇耕: "37.32 ",
            丹佛花都: "40.35 ",
            允將大聚: "41.53 ",
            禾悅花園: "40.27 ",
            合展家禾: "35.44 ",
            竹城中州: "38.20 ",
            君邑羅浮: "38.13 ",
            和境心見: "36.25 ",
            捷市達: "43.63 ",
            富宇上城: "40.71 ",
            富宇天玥: "45.23 ",
            富宇哈佛苑: "45.79 ",
            富來舞綻: "37.72 ",
            富堡菁英匯: "41.42 ",
            智匯學: "36.51 ",
            鉑悅: "42.62 ",
            維特魯威: "35.82 ",
            鴻廣絵青: "36.31 ",
            鴻築玥: "37.99 ",
            豐邑GreeniN: "41.47 ",
            豐邑森活: "43.24 ",
            Ptotal: "40.32 ",
          },
          quantity: {
            大華旭: "16",
            大華昇耕: "44",
            丹佛花都: "248",
            允將大聚: "244",
            禾悅花園: "1",
            合展家禾: "44",
            竹城中州: "29",
            君邑羅浮: "17",
            和境心見: "44",
            捷市達: "24",
            富宇上城: "74",
            富宇天玥: "82",
            富宇哈佛苑: "16",
            富來舞綻: "15",
            富堡菁英匯: "42",
            智匯學: "19",
            鉑悅: "162",
            維特魯威: "13",
            鴻廣絵青: "49",
            鴻築玥: "158",
            豐邑GreeniN: "7",
            豐邑森活: "28",
            Qtotal: "1376",
          },
        },
        {
          name: "Y113Q1",
          price: {
            大華旭: "39.40 ",
            大華昇耕: "38.98 ",
            丹佛花都: "39.93 ",
            允將大作: "37.92 ",
            允將大聚: "41.60 ",
            禾悅花園: "45.26",
            合展家禾: "36.35 ",
            竹城中州: "37.69 ",
            君邑羅浮: "37.05 ",
            和境心見: "35.21 ",
            捷市達: "45.84 ",
            富宇上城: "43.01 ",
            富宇天玥: "44.79 ",
            富宇哈佛苑: "46.48 ",
            富宇富御: "46.26",
            富來舞綻: "37.65 ",
            富堡菁英匯: "40.42 ",
            溫沙堡: "45.38",
            智匯學: "38.93 ",
            鉑悅: "43.22 ",
            維特魯威: "35.70 ",
            頤昌筑岳: "45.53 ",
            鴻廣絵青: "36.24 ",
            鴻築玥: "40.88 ",
            豐邑GreeniN: "42.23 ",
            豐邑森活: "43.99 ",
            Ptotal: "42.91 ",
          },
          quantity: {
            大華旭: "4",
            大華昇耕: "37",
            丹佛花都: "35",
            允將大作: "4",
            允將大聚: "46",
            允將大聚: "22",
            禾悅花園: "1",
            合展家禾: "27",
            竹城中州: "33",
            君邑羅浮: "14",
            和境心見: "3",
            捷市達: "21",
            富宇上城: "53",
            富宇天玥: "17",
            富宇哈佛苑: "7",
            富宇富御: "85",
            富來舞綻: "22",
            富堡菁英匯: "32",
            溫沙堡: "207",
            智匯學: "9",
            鉑悅: "145",
            維特魯威: "5",
            頤昌筑岳: "100",
            鴻廣絵青: "18",
            鴻築玥: "35",
            豐邑GreeniN: "15",
            豐邑森活: "36",
            Qtotal: "1011",
          },
        },
        {
          name: "Y113Q2",
          price: {
            大華昇耕: "41.64",
            允將大作: "38.97",
            允將大聚: "48.18",
            禾悅花園: "44.63",
            合展家禾: "33.92",
            竹城中州: "39.40",
            君邑羅浮: "37.50",
            捷市達: "43.94",
            富宇上城: "44.69",
            富宇天玥: "46.30",
            富宇富御: "46.75",
            富來舞綻: "38.62",
            富堡菁英匯: "39.50",
            智匯學: "37.84",
            溫沙堡: "45.77",
            鉑悅: "41.75",
            頤昌筑岳: "47.88",
            豐邑GreeniN: "44.30",
            豐邑森活: "45.34",
            Ptotal: "44.04",
          },
          quantity: {
            大華昇耕: "12",
            允將大作: "16",
            允將大聚: "1",
            禾悅花園: "5",
            合展家禾: "1",
            竹城中州: "15",
            君邑羅浮: "28",
            捷市達: "4",
            富宇上城: "9",
            富宇天玥: "11",
            富宇富御: "54",
            富來舞綻: "12",
            富堡菁英匯: "4",
            智匯學: "4",
            溫沙堡: "205",
            鉑悅: "101",
            頤昌筑岳: "35",
            豐邑GreeniN: "10",
            豐邑森活: "31",
            Qtotal: "558",
          },
        },
      ],

      chartOptions: {
        parsing: {
          xAxisKey: "name",
          yAxisKey: "quantity.富宇上城",
        },

        responsive: true,
        legend: {
          display: false,
          position: "bottom",
        },
        title: {
          display: true,
          text: "社區房價趨勢",
          fontSize: 20,
          fontColor: "#6b7280",
        },
        tooltips: {
          backgroundColor: "#4e42f5",
        },
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
              text: "單價(萬元)/坪",
            },
          },
        },
      },
    };
  },
  computed: {
    computedChartData() {
      return {
        labels: this.chartData.map((item) => item.name),
        datasets: [
          {
            yAxisID: "A",
            label: "季成交量",
            data: this.chartData.map(
              (item) => item.quantity[this.selectedApartment]
            ),
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
            type: "bar",
          },
          {
            yAxisID: "B",
            label: "單價(萬元)/坪",
            data: this.chartData.map(
              (item) => item.price[this.selectedApartment]
            ),
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            type: "line",
          },
          {
            yAxisID: "B",
            label: "A7每坪均價",
            data: this.chartData.map((item) => item.price.Ptotal),
            backgroundColor: ["rgba(0,230,115, 0.2)"],
            borderColor: ["rgba(0,230,115, 1)"],
            borderWidth: 1,
            type: "line",
          },
        ],
      };
    },
  },
  methods: {
    changeApartment() {
      this.chartOptions.parsing.yAxisKey = `quantity.${this.selectedApartment}`;
      this.$refs.myChart.chartInstance.update();
    },
  },
};
</script>

<style scoped></style>
