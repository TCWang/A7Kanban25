<script setup>
import houses from "@/data/houseinfo.json";

const housesOrganized = {
  newSorted: [...houses.quantity],
};
// const housesOrganized = {
//   newSorted: [...houses]
//     .filter((house) => house.選擇2 === "Y")
//     .sort((a, b) => a.No - b.No),
// };
</script>

<template>
  <div class="">
    <div class="">
      <h3>A7建案 每季銷售量 匯總</h3>

      <p></p>

      <div class="">
        <div class="">
          <MarketRowQuantity :isHeader="true" />
          <MarketRowQuantity
            v-for="(house, index) in housesOrganized.newSorted"
            :key="house.name"
            :name="house.name"
            :Y106Q2="house.Y106Q2"
            :Y106Q3="house.Y106Q3"
            :Y106Q4="house.Y106Q4"
            :Y107Q1="house.Y107Q1"
            :Y107Q2="house.Y107Q2"
            :Y107Q3="house.Y107Q3"
            :Y107Q4="house.Y107Q4"
            :Y108Q1="house.Y108Q1"
            :Y108Q2="house.Y108Q2"
            :Y108Q3="house.Y108Q3"
            :Y108Q4="house.Y108Q4"
            :Y109Q1="house.Y109Q1"
            :Y109Q2="house.Y109Q2"
            :Y109Q3="house.Y109Q3"
            :Y109Q4="house.Y109Q4"
            :Y110Q1="house.Y110Q1"
            :Y110Q2="house.Y110Q2"
            :Y110Q3="house.Y110Q3"
            :Y110Q4="house.Y110Q4"
            :Y111Q1="house.Y111Q1"
            :Y111Q2="house.Y111Q2"
            :Y111Q3="house.Y111Q3"
            :Y111Q4="house.Y111Q4"
            :Y112Q1="house.Y112Q1"
            :Y112Q2="house.Y112Q2"
            :Y112Q3="house.Y112Q3"
            :Y112Q4="house.Y112Q4"
            :Y113Q1="house.Y113Q1"
            :Y113Q2="house.Y113Q2"
            :Qtotal="house.Qtotal"
            :index="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
