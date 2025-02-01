<template>
    <div class="section" data-anchor="about">
      <h1>👋 {{ $t("about") }}</h1>
      <div class="about-content">
        <v-avatar
        color="grey"
        rounded="60"
        size="150"
      >
        <v-img :src=profileSrc alt="Profile" cover></v-img>
      </v-avatar>
        <div class="info-content">
            <div class="text-content">
                <p>{{ $t("about_content.expert") }}</p>
                <p>{{ $t("about_content.hobby") }}</p>
              </div>
              <!-- 新增學歷區塊 -->
              <div class="education-content">
                <h2>🎓{{ $t("education") }} </h2>
                <ul>
                  <li v-for="(edu, index) in educationList" :key="index">
                    <strong>{{ $t(edu.degree) }}</strong> - {{ $t(edu.school) }} ({{ edu.year }})
                  </li>
                </ul>
              </div>
              <Skills/>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import profileSrc from "@/assets/images/profile.jpg";
  import Skills from "./Skills.vue";
  import { ref } from "vue";

  const educationList = ref([
  {
    degree: "ntnu.degree",
    school: "ntnu.school",
    year: "2018 - 2022",
  },
]);
</script>
  
  <style scoped>
  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    color: #ddd;
  }
  
  .about-content {
    display: flex;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }

  h1 {
    margin-bottom: 1rem; /* 調整這個數值增加間距 */
  }
  
  .text-content {
    text-align: left;
    color: #ddd;
  }
  
  .skills img {
    width: 40px;
    margin-right: 10px;
  }

  .info-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
  }

  .education-content {
    text-align: left;
  }
  ul {
    padding-left: 20px;
  }
  </style>
  