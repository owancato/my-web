<template>
    <v-app-bar color="rgba(0, 0, 0, 0.7)" density="compact" class="bar">
      <v-container class="d-flex align-center">
        <!-- 桌機版選單 -->
        <nav class="d-none d-md-flex">
          <ul id="myMenu">
            <li v-for="(section, index) in sections" :key="index">
              <a :href="'#' + section.id">{{ section.label }}</a>
            </li>
          </ul>
        </nav>
  
        <!-- 手機版漢堡選單 -->
        <v-menu v-if="isMobile" transition="scale-transition">
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(section, index) in sections" :key="index">
              <v-list-item-title>
                <a :href="'#' + section.id" class="mobile-link">{{ section.label }}</a>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
  
        <!-- 語言切換 -->
        <v-select
          v-model="selectedLanguage"
          :items="languages"
          item-title="label"
          item-value="value"
          variant="outlined"
          dense
          class="ml-auto language-selector"
          hide-details
          @update:modelValue="changeLanguage"
        ></v-select>
      </v-container>
    </v-app-bar>
  </template>
  
  <script setup>
  import { useI18n } from "vue-i18n";
  import { ref, computed, onMounted } from "vue";
  
  const { t, locale } = useI18n();
  const selectedLanguage = ref(localStorage.getItem("lang") || "en");
  
  // 多語系 Sections 文案
  const sections = computed(() => [
    { id: "home", label: t("home") },
    { id: "about", label: t("about") },
    { id: "works", label: t("works") },
    { id: "projects", label: t("projects") },
    { id: "contact", label: t("contact") },
  ]);
  
  const languages = [
    { label: "🇹🇼 繁體中文", value: "zh_TW" },
    { label: "🇺🇸 English", value: "en" },
  ];
  
  const isMobile = ref(false);
  
  onMounted(() => {
    const savedLang = localStorage.getItem("lang") ?? "zh_TW";
    selectedLanguage.value = savedLang;
    locale.value = savedLang; // 確保 Vue I18n 語言同步
  
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  });
  
  const checkScreenSize = () => {
    isMobile.value = window.innerWidth <= 768;
  };
  
  const changeLanguage = () => {
    locale.value = selectedLanguage.value;
    localStorage.setItem("lang", selectedLanguage.value);
  };
  </script>
  
  <style scoped>
  /* 桌機版選單 */
  nav {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
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

  .bar {
    width: 10%; /* 讓寬度填滿整個螢幕 */
  }
  
  /* 手機版連結 */
  .mobile-link {
    text-decoration: none;
    color: inherit;
    font-size: 16px;
  }
  
  /* 語言切換下拉選單 */
  .language-selector {
    max-width: 150px;
    color: white;
  }
  </style>
  