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
  }
  
  .category {
    background: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: 12px;
  }
  
  .title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .title img {
    width: 40px;
    height: 40px;
  }
  
  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }
  
  .skill {
    background: rgba(255, 255, 255, 0.2);
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    white-space: nowrap;
  }
  </style>
  