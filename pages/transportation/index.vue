<template>
  <div class="container">
    <h1>城市探索 - A7重劃區 交通指南</h1>
    <div class="flex flex-row flex-wrap">
      <div class="w-full md:w-1/2 p-2 shadow-md">
        桃園公車資訊

        <UButton
          color="primary"
          variant="soft"
          size="xl"
          to="https://ebus.tycg.gov.tw/ebus/driving-map/2020"
          label="202 路線圖及時刻表"
        />

        <NuxtImg
          src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/transportation/TRA-202.png"
          alt="公車202"
        />
      </div>
      <div class="w-full md:w-1/2 p-2 shadow-md">
        桃園公車資訊
        <UButton
          color="primary"
          variant="soft"
          size="xl"
          to="https://ebus.tycg.gov.tw/ebus/driving-map/6030"
          label="603 路線圖及時刻表"
        />

        <NuxtImg
          src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/transportation/TRA-603.png"
          alt="公車603"
        />
      </div>
      <div class="w-full md:w-1/2 p-2 shadow-md">
        桃園公車資訊
        <UButton
          color="primary"
          variant="soft"
          size="xl"
          to="https://ebus.tycg.gov.tw/ebus/driving-map/6060"
          label="606 路線圖及時刻表"
        />

        <NuxtImg
          src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/transportation/TRA-606.jpeg"
          alt="公車606"
        />
      </div>
      <div class="w-full md:w-1/2 p-2 shadow-md">
        桃園公車資訊
        <UButton
          color="primary"
          variant="soft"
          size="xl"
          to="https://ebus.tycg.gov.tw/ebus/driving-map/6052"
          label="607 路線圖及時刻表"
        />

        <NuxtImg
          src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/transportation/TRA-607.webp"
          alt="公車607"
        />
      </div>
      <div class="w-full md:w-1/2 p-2 shadow-md">
        桃園樂活巴士
        <UButton
          color="primary"
          variant="soft"
          size="xl"
          to="https://ebus.tycg.gov.tw/ebus/driving-map/53170"
          label="長庚醫院線 L317 時刻表"
        />
        <UButton
          color="primary"
          variant="soft"
          size="xl"
          to="https://ebus.tycg.gov.tw/ebus/driving-map/53180"
          label=" L318 時刻表"
        />
        <UButton
          color="primary"
          variant="soft"
          size="xl"
          to="https://ebus.tycg.gov.tw/ebus/driving-map/53190"
          label=" L319 時刻表"
        />

        <NuxtImg
          src="/images/transportation/TRA-102-龜山樂活巴士.jpeg"
          alt="桃園樂活巴士"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "城市探索-交通指南",
  meta: [
    {
      name: "description",
      content: "A7新林口-社區網站:  城市探索 - 交通指南 ",
    },
  ],
});
</script>

<style scoped></style>
