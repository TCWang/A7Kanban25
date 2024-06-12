<template>
  <div>
    <h2>A7重劃區 人口數據統計</h2>
    <p>依據 2024/Q1 A7重劃區總建案數</p>
    <div class="flex flex-row flex-wrap">
      <ChartsHouse01 class="w-full md:w-1/2" />
      <ChartsHouse02 class="w-full md:w-1/2" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "城市探索-人口趨勢統計",
  meta: [
    {
      name: "description",
      content: "A7新林口-社區網站:  城市探索 - 人口趨勢統計 ",
    },
  ],
});
</script>

<style scoped></style>
