<template>
  <div class="container">
    <h1>城市探索 - A7重劃區 地區介紹</h1>

    <div class="flex flex-row flex-wrap">
      <section class="w-full md:w-1/2 p-2">
        <h3>A7重劃區 行政區域</h3>
        <p>
          A7重劃區分屬於桃園市龜山區的 長庚里, 樂善里, 文化里及文青里。
          在地籍中主要包含 1428垹坡段, 1441樂捷段及1442善捷段。 詳細資料可查詢
          <a href="https://easymap.land.moi.gov.tw/Index"
            >地籍圖資 網路便民服務系統</a
          >。
        </p>
        <p>
          在開發期間，未完成的建案區域沒有街道門牌號碼前可使用上面系統中的地號作為標示。
        </p>
      </section>

      <img
        src="/images/introduction/int-001.png"
        class="w-full md:w-1/2 p-2 shadow-md"
        alt="A7區域劃分"
      />
    </div>

    <div class="flex flex-row flex-wrap">
      <section class="w-full md:w-1/2 p-2">
        <h3>A7重劃區生活圈</h3>
        <p>
          依據
          <a href="https://www.leju.com.tw/page_blog/view/1253"
            >樂居:區域房市-A7重劃區</a
          >
          包含: 樂善國小生活圈, 郵政物流生活圈, 中心商業生活圈, 文青國小生活圈,
          及 體育大學生活圈 五大生活圈。
        </p>
        <NuxtImg
          src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/introduction/INT-005.png"
          class="w-full shadow-md"
          alt="A7區域劃分"
        />
      </section>

      <NuxtImg
        src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/introduction/INT-007.jpeg"
        class="w-full md:w-1/2 p-2 shadow-md"
        alt="A7重劃區房屋類別"
      />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "城市探索-A7重劃區",
  meta: [
    {
      name: "description",
      content: "A7新林口-社區網站:  城市探索 - A7重劃區 ",
    },
  ],
});
</script>

<style scoped></style>
