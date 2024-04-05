<script setup>
import houses from "@/data/houses.json";

const housesOrganized = {
  newSorted: [...houses]
    .filter((house) => house.選擇 === "Y")
    .sort((a, b) => a.No - b.No),
};
</script>

<template>
  <div class="">
    <div class="">
      <h3>A7 建案列表</h3>

      <div class="">
        <div class="">
          <HouseRow :isHeader="true" />
          <HouseRow
            v-for="(house, index) in housesOrganized.newSorted"
            :key="house.id"
            :區域="house.區域"
            :建案="house.建案"
            :每坪開價="house.每坪開價"
            :投資建設="house.投資建設"
            :樓層規劃="house.樓層規劃"
            :棟戶規劃="house.棟戶規劃"
            :index="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
