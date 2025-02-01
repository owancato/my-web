<template>
    <div class="section" data-anchor="about">
      <h1>👋 {{ $t("about") }}</h1>
      <div class="about-content">
        <v-avatar color="grey" rounded="60" :size="avatarSize">
          <v-img :src="profileSrc" alt="Profile" cover></v-img>
        </v-avatar>
  
        <div class="info-content">
          <div class="text-content">
            <p>{{ $t("about_content.expert") }}</p>
            <p>{{ $t("about_content.hobby") }}</p>
          </div>
  
          <!-- 🎓 學歷區塊 -->
          <div class="education-content">
            <h2>🎓 {{ $t("education") }}</h2>
            <ul>
              <li v-for="(edu, index) in educationList" :key="index">
                <strong>{{ $t(edu.degree) }}</strong> - {{ $t(edu.school) }} ({{ edu.year }})
              </li>
            </ul>
          </div>
          <Skills />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import profileSrc from "@/assets/images/profile.jpg";
  import Skills from "./Skills.vue";
  import { ref, computed } from "vue";
  
  const educationList = ref([
    { degree: "ntnu.degree", school: "ntnu.school", year: "2018 - 2022" },
  ]);
  
  // 計算圖片大小（手機版縮小）
  const avatarSize = computed(() => (window.innerWidth < 600 ? 100 : 150));
  </script>
  
  <style scoped>
  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    color: #ddd;
  }
  
  /* 🎨 about-content 框架 */
  .about-content {
    display: flex;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    max-width:100%;
    width:100%;
  }
  
  /* 🏆 個人資訊 */
  .info-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
  }
  
  /* ✍️ 文字內容 */
  .text-content,
  .education-content {
    color: #ddd;
    max-width: 100%;
  }
  
  h1 {
    margin-bottom: 1rem;
  }
  
  /* 📱 手機版調整 */
  @media (max-width: 768px) {
    .section {
      padding-top: 500px !important;
    }
    .about-content {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  
    .info-content {
      align-items: center;
    }
  
    .education-content {
      text-align: center;
    }
  }
  </style>
  