<template>
    <div class="skills-container">
      <div class="category">
        <div class="title">
          <h3>{{ $t("about_content.main_skills") }}</h3>
        </div>
        <div class="skills-grid">
          <span class="skill">PHP / Laravel</span>
          <span class="skill">Python 3 / Flask</span>
          <span class="skill">Docker</span>
          <span class="skill">Linux</span>
          <span class="skill">Grafana / Loki / Prometheus</span>
          <span class="skill">MySQL / MongoDB / Redis</span>
          <span class="skill">AWS</span>
        </div>
      </div>
  
      <div class="category">
        <div class="title">
          <h3>{{ $t("about_content.other_skills") }}</h3>
        </div>
        <div class="skills-grid">
          <span class="skill">Chrome Extension</span>
          <span class="skill">Web crawler</span>
          <span class="skill">ETL program</span>
          <span class="skill">C++</span>
          <span class="skill">Vue.js</span>
          <span class="skill">JQuery</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from "vue-i18n";
  const { t } = useI18n();
  </script>
  
  <style scoped>
  .skills-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
    margin-top: 20px;
    max-width: 800px;
    width: 100%;
  }
  
  /* 🎨 技能分類 */
  .category {
    background: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: 12px;
  }
  
  /* 📌 標題 */
  .title {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  /* 🎯 技能網格 */
  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }
  
  /* 🔹 技能標籤 */
  .skill {
    background: rgba(255, 255, 255, 0.2);
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    text-align: center;
    white-space: nowrap;
  }
  
  /* 📱 手機版調整 */
  @media (max-width: 600px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }
  
    .skill {
      padding: 10px 14px;
      font-size: 1rem;
    }
  }
  </style>
  