<script setup>
import houses from "@/data/houseinfo.json";

const housesOrganized = {
  newSorted: [...houses.price],
};
</script>

<template>
  <div class="">
    <h3>A7 最近銷售紀錄</h3>

    <div>
      <UTable :rows="housesOrganized.newSorted">
        <template #default="{ rows }">
          <table>
            <thead>
              <tr>
                <th>建案</th>
                <th>Y110Q3</th>
                <th>Y110Q4</th>
                <th>Y111Q1</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="house in rows" :key="house.name">
                <td>{{ house.name }}</td>
                <td>{{ house.Y110Q3 }}</td>
                <td>{{ house.Y110Q4 }}</td>
                <td>{{ house.Y111Q1 }}</td>
              </tr>
            </tbody>
          </table>
        </template>
      </UTable>
    </div>
  </div>
</template>

<style scoped></style>
