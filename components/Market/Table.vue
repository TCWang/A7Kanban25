<script setup>
import houses from "@/data/houses.json";

const housesOrganized = {
  newSorted: [...houses]
    .filter((house) => house.選擇2 === "Y")
    .sort((a, b) => a.No - b.No),
};
</script>

<template>
  <div class="">
    <div class="">
      <h3>A7建案 熱銷排行榜</h3>

      <p></p>

      <div class="">
        <div class="">
          <MarketRow :isHeader="true" />
          <MarketRow
            v-for="(house, index) in housesOrganized.newSorted"
            :key="house.id"
            :No="house.No"
            :建案="house.建案"
            :AQ1="house.實價登錄數23Q1"
            :AQ2="house.實價登錄數23Q2"
            :AQ3="house.實價登錄數23Q3"
            :AQ4="house.實價登錄數23Q4"
            :AQ5="house.實價登錄數24Q1"
            :PQ1="house.實價平均23Q1"
            :PQ2="house.實價平均23Q2"
            :PQ3="house.實價平均23Q3"
            :PQ4="house.實價平均23Q4"
            :PQ5="house.實價平均24Q1"
            :index="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
