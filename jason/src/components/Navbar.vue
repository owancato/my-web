<template>
    <div class="menu-container">
        <nav>
            <ul id="myMenu">
              <li v-for="(section, index) in sections" :key="index">
                <a :href="'#' + section.id">{{ section.label }}</a>
              </li>
            </ul>
          </nav>
        <select v-model="selectedLanguage" @change="changeLanguage">
            <option value="zh_TW">🇹🇼 繁體中文</option>
            <option value="en">🇺🇸 English</option>
          </select>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from "vue-i18n";
  import { onMounted, ref, computed } from "vue";
  const { t, locale } = useI18n();
  const selectedLanguage = ref(localStorage.getItem("language") || "en");
  // 多語系 Sections 文案
  const sections = computed(() => {
    return [
          { id: "home", label: t("home") },
          { id: "about", label: t("about") },
          { id: "works", label: t("works")},
          { id: "projects", label: t("projects") },
          { id: "contact", label: t("contact")},
        ]
  });

  onMounted(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
        selectedLanguage.value = savedLang;
        locale.value = savedLang; // 確保 Vue I18n 語言同步
    }
  });
  
  const changeLanguage = () => {
    locale.value = selectedLanguage.value;
    localStorage.setItem("lang", selectedLanguage.value);
  };
  </script>
  
  <style scoped>
  .menu-container {
    width: 100vw; /* 讓寬度填滿整個螢幕 */
    height: 60px; /* 保持原高度 */
    background-color: rgba(0, 0, 0, 0.7); /* 黑色背景，透明度 0.7 */
    position: fixed; /* 固定在頁面頂部 */
    top: 0;
    left: 0;
    z-index: 1000; /* 確保在最上層 */
    display: flex;
    align-items: center; /* 垂直置中 */
    padding: 0 20px; /* 左右內距 */
    backdrop-filter: blur(5px); /* 增加模糊效果 */
    justify-content: flex-end; /* 讓內容靠右對齊 */
  }

  nav {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px; /* 內距 */
  }
  
  nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  nav li {
    margin-right: 15px;
  }
  
  nav a {
    text-decoration: none;
    color: white;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background 0.3s;
  }
  
  nav a:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  select {
    padding: 5px 10px;
    font-size: 14px;
    border: 1px solid #444;
    border-radius: 5px;
    background-color: #201f1f;
    color: white;
    cursor: pointer;
  }
  
  select:hover {
    background-color: #333232;
  }
  </style>