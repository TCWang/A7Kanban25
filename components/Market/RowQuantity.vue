<template>
  <div class="row" v-if="isHeader">
    <p class="item-long">建案</p>
    <p class="item">110Q3</p>
    <p class="item">Q4</p>
    <p class="item">111Q1</p>
    <p class="item">Q2</p>
    <p class="item">Q3</p>
    <p class="item">Q4</p>
    <p class="item">112Q1</p>
    <p class="item">Q2</p>
    <p class="item">Q3</p>
    <p class="item">Q4</p>
    <p class="item">113Q1</p>
    <p class="item">Q2</p>
    <p class="item">總銷售</p>
  </div>
  <div
    v-else
    class="row"
    :style="
      index % 2 === 0
        ? { background: 'rgba(128,128,128,0.15)' }
        : { background: 'rgba(255,255,255,0.1)' }
    "
  >
    <a class="item-long">{{ name }}</a>

    <p class="item">{{ Y110Q3 }}</p>
    <p class="item">{{ Y110Q4 }}</p>
    <p class="item">{{ Y111Q1 }}</p>
    <p class="item">{{ Y111Q2 }}</p>
    <p class="item">{{ Y111Q3 }}</p>
    <p class="item">{{ Y111Q4 }}</p>
    <p class="item">{{ Y112Q1 }}</p>
    <p class="item">{{ Y112Q2 }}</p>
    <p class="item">{{ Y112Q3 }}</p>
    <p class="item">{{ Y112Q4 }}</p>
    <p class="item">{{ Y113Q1 }}</p>
    <p class="item">{{ Y113Q2 }}</p>
    <p class="item">{{ Qtotal }}</p>
  </div>
</template>

<script setup lang="ts">
interface RowProps {
  name?: string;
  Y106Q2?: string;
  Y106Q3?: string;
  Y106Q4?: string;
  Y107Q1?: string;
  Y107Q2?: string;
  Y107Q3?: string;
  Y107Q4?: string;
  Y108Q1?: string;
  Y108Q2?: string;
  Y108Q3?: string;
  Y108Q4?: string;
  Y109Q1?: string;
  Y109Q2?: string;
  Y109Q3?: string;
  Y109Q4?: string;
  Y110Q1?: string;
  Y110Q2?: string;
  Y110Q3?: string;
  Y110Q4?: string;
  Y111Q1?: string;
  Y111Q2?: string;
  Y111Q3?: string;
  Y111Q4?: string;
  Y112Q1?: string;
  Y112Q2?: string;
  Y112Q3?: string;
  Y112Q4?: string;
  Y113Q1?: string;
  Y113Q2?: string;
  Qtotal?: string;
  index: number;
  isHeader?: boolean;
}

const props = defineProps<RowProps>();
</script>

<style scoped>
.row {
  border-top: 1px solid rgba(128, 128, 128, 0.336);
  display: flex;
  align-items: center;
}

.item {
  color: black;
  width: 6%;
  margin-right: 1rem;
}
.item-long {
  text-decoration: none;

  width: 22%;
  font-weight: 500;
}
.link {
  margin: 0;
  margin-right: 1rem;
  padding: 0.1rem 0.1rem;
  font-weight: 400;
  color: rgb(10, 31, 148);
}
</style>
