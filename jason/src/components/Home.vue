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
    padding: 20px;
    overflow: hidden;
  }
  
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  /* 讓標題適應不同裝置 */
  .headline {
    font-size: 3rem; /* 桌機版 */
    font-weight: bold;
    text-align: center;
  }
  
  .subheadline {
    font-size: 1.5rem;
    margin-top: 10px;
  }
  
  /* GIF 自適應 */
  .gif {
    max-width: 30%;
    height: auto;
    display: flex;
  }
  
  /* 📌 手機版調整 */
  @media (max-width: 768px) {
    .headline {
      font-size: 2rem; /* 手機版標題縮小 */
    }
    
    .subheadline {
      font-size: 1.2rem;
    }
  
    .gif {
      max-width: 60%; /* 手機版 GIF 放大 */
    }
  }
  </style>
  