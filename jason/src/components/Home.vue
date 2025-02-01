<template>
    <div class="section" data-anchor="home">
      <div class="text-container">
        <img :src="gifSrc" alt="Animated GIF" class="gif" />
        <div class="headline">{{ $t("headline") }}</div>
        <div class="subheadline">{{ $t("subHeadline") }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
import gifSrc from "@/assets/pepega-pls.gif";
</script>
  
  <style scoped>
  .section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
  }
  
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .headline {
    font-size: 3rem; /* 第一行較大 */
    font-weight: bold;
  }
  
  .subheadline {
    font-size: 1.5rem; /* 第二行較小 */
    margin-top: 10px; /* 增加間距 */
  }

  .gif {
    max-width: 30%; /* 設定最大寬度為 50% */
    height: auto;
    display: flex;
  }
  </style>
  