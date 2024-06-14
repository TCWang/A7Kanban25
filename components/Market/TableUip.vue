<script setup>
import houses from "@/data/houseinfo.json";
const columns = [
  { key: "name", label: "建案名稱", class: "custom-cell" },
  { key: "Y110Q3", label: "110年Q3", class: "custom-cell" },
  { key: "Y110Q4", label: "110年Q4", class: "custom-cell" },
  { key: "Y111Q1", label: "111年Q1", class: "custom-cell" },
  { key: "Y111Q2", label: "111年Q2", class: "custom-cell" },
  { key: "Y111Q3", label: "111年Q3", class: "custom-cell" },
  { key: "Y111Q4", label: "111年Q4", class: "custom-cell" },
  { key: "Y112Q1", label: "112年Q1", class: "custom-cell" },
  { key: "Y112Q2", label: "112年Q2", class: "custom-cell" },
  { key: "Y112Q3", label: "112年Q3", class: "custom-cell" },
  { key: "Y112Q4", label: "112年Q4", class: "custom-cell" },
  { key: "Y113Q1", label: "113年Q1", class: "custom-cell" },
  { key: "Ptotal", label: "單價平均", class: "custom-cell" },
];

const housesOrganized = {
  newSorted: [...houses.price],
};
</script>

<template>
  <div class="">
    <h3>A7 最近銷售每坪單價</h3>

    <Ucontainer>
      <UTable :columns="columns" :rows="housesOrganized.newSorted"> </UTable>
    </Ucontainer>
  </div>
</template>

<style scoped>
.custom-cell {
  padding: 0; /* Example padding */
  margin: 0; /* Example margin */
}
</style>
