<template>
  <div>
    <h1>地區建案 - 購屋須知</h1>
    <div class="flex flex-row flex-wrap">
      <section class="w-full md:w-1/2 p-2"></section>
      <section class="w-full md:w-1/2 p-2"></section>
    </div>
    <div class="flex flex-row flex-wrap">
      <section class="w-full md:w-1/2 p-2">
        <h3>「棟」、「幢」怎麼分？</h3>
        兩個都是房屋的計量單位，但一棟和一幢其實意思不太一樣。
        <ul>
          <li>
            幢：(ㄔㄨㄤˊ)
            建築物地面層以上，可與其他建築物相連者，所有相連的建築物統稱為1幢。
          </li>
          <li>
            棟：具備有單獨出入口並以無開口之防火牆及防火樓板與其他建築物區隔分開者，稱為1棟。
          </li>
        </ul>
        <NuxtImg
          src="/images/knowledge/KNO-001-棟幢-1.jpeg"
          class="w-3/4 md:w-2/3"
        />
      </section>
      <section class="w-full md:w-1/2 p-2">
        <NuxtImg
          src="/images/knowledge/KNO-001-棟幢-2.jpeg"
          class="w-3/4 md:w-2/3"
        />
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "地區建案 - 購屋須知",
});
</script>

<style scoped></style>
