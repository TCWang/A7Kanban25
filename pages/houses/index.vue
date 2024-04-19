<template>
  <div class="container">
    <h1>城市探索 - A7重劃區 建案匯總</h1>
    <HouseTable />
    <br />
    <h2>A7重劃區 數據統計</h2>
    <div class="flex flex-row flex-wrap">
      <ChartsHouse01 class="w-full md:w-1/2" />
      <ChartsHouse02 class="w-full md:w-1/2" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "城市探索-新推建案",
});
</script>
