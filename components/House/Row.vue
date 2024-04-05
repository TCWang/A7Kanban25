<template>
  <div class="row" v-if="isHeader">
    <h4 class="link item">區域</h4>
    <h4 class="header item">建案</h4>

    <h4 class="header item">每坪開價</h4>
    <h4 class="header item">投資建設</h4>
    <h4 class="header item-long">樓層規劃</h4>
    <h4 class="header item-long">棟戶規劃</h4>
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
    <p class="header item">{{ 區域 }}</p>
    <a :href="`/houses/${建案}`" class="link item">{{ 建案 }}</a>
    <p class="header item">{{ 每坪開價 }}</p>

    <p class="header item">{{ 投資建設 }}</p>
    <p class="header item-long">{{ 樓層規劃 }}</p>
    <p class="header item-long">{{ 棟戶規劃 }}</p>
  </div>
</template>

<script setup lang="ts">
interface RowProps {
  區域?: string;
  建案?: string;
  每坪開價?: string;
  投資建設?: string;
  樓層規劃?: string;
  棟戶規劃?: string;
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
.header {
  margin: 0;
  margin-right: 0rem;
  padding: 0.1rem 0.1rem;
  font-weight: 400;
  /* width: auto; */
}
.item {
  color: black;
  width: 12%;
  margin-right: 1rem;
}
.item-long {
  text-decoration: none;

  width: 26%;
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
