<script setup>
import houses from "@/data/houseinfo.json";
const columns = [
  { key: "name", label: "建案名稱" },
  { key: "Y110Q3", label: "110年Q3" },
  { key: "Y110Q4", label: "110年Q4" },
  { key: "Y111Q1", label: "111年Q1" },
  { key: "Y111Q2", label: "111年Q2" },
  { key: "Y111Q3", label: "111年Q3" },
  { key: "Y111Q4", label: "111年Q4" },
  { key: "Y112Q1", label: "112年Q1" },
  { key: "Y112Q2", label: "112年Q2" },
  { key: "Y112Q3", label: "112年Q3" },
  { key: "Y112Q4", label: "112年Q4" },
  { key: "Y113Q1", label: "113年Q1" },
  { key: "Qtotal", label: "總銷售量" },
];

const housesOrganized = {
  newSorted: [...houses.quantity],
};
</script>

<template>
  <div class="">
    <h3>A7 最近銷售量</h3>

    <Ucontainer>
      <UTable :columns="columns" :rows="housesOrganized.newSorted"> </UTable>
    </Ucontainer>
  </div>
</template>

<style scoped></style>
