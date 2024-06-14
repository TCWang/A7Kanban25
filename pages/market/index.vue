<template>
  <div class="container flex flex-col h-screen">
    <h2>地區建案 - 實價資訊</h2>
    <div class="flex-1 h-1/2 w-full p-4 bg-gray-200 overflow-y-scroll">
      <!-- 上方窗口 -->
      <MarketTablePrice />
    </div>
    <div class="flex-1 h-1/2 w-full p-4 bg-gray-300 overflow-y-scroll">
      <!-- 下方窗口 -->
      <MarketTableQuantity />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "地區建案 - 實價資訊",
});
</script>

<style scoped>
/* 如果需要其他樣式，可以在這裡添加 */
.content {
  /* 為內容容器設置固定高度，使其超出高度時顯示滾動條 */
  max-height: 100%;
  /* 設置滾動條樣式 */
  scrollbar-width: thin;
  scrollbar-color: #4a5568 transparent; /* 滾動條顏色和背景色 */
  /* 添加滾動條樣式 */
  /* 非webkit瀏覽器 */
  scrollbar-track-color: transparent; /* 滾動條軌道顏色 */
  scrollbar-face-color: #4a5568; /* 滾動條輪廓顏色 */
  scrollbar-arrow-color: #cbd5e0; /* 滾動條箭頭顏色 */
  scrollbar-highlight-color: #cbd5e0; /* 滾動條高亮顏色 */
  scrollbar-darkshadow-color: #cbd5e0; /* 滾動條陰影顏色 */
  /* webkit瀏覽器 */
  scrollbar-color: #4a5568 transparent;
}
</style>
