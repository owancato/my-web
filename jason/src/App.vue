<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import fullpage from "fullpage.js";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import Navbar from "@/components/Navbar.vue";
import Works from "@/components/Works.vue";

const sectionRefs = ref([]);

onMounted(() => {
  // 判斷是否為手機
  const isMobile = window.innerWidth < 900;
  console.log(window.innerWidth, window.devicePixelRatio);
  console.log(window.innerWidth)
  new fullpage("#fullpage", {
    autoScrolling: !isMobile, // 手機版停用 autoScrolling
    fitToSection: true, // 讓 section 置中
    //scrollOverflow: true, // 啟用內部滾動
    anchors: ["home", "about", "works", "projects", "contact"], // 確保 anchors 正確
    credits: { enabled: false },
    menu: '#myMenu',
    responsiveWidth: 768, // 小於 768px 時 fullPage.js 自動停用
  });
  

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  sectionRefs.value.forEach((section, index) => {
    if (!section) return;
    const scrollBottom = section.scrollHeight - section.scrollTop - section.clientHeight;

    if (scrollBottom <= 5) {
      setTimeout(() => {
        if (window.fullpage_api) {
          window.fullpage_api.moveSectionDown();
        }
      }, 300);
    }
  });
};
</script>

<template> 
  <v-app>
    <Navbar />
  </v-app>
  <div id="fullpage">
    <Home />
    <About />
    <Works />
    <Projects />
    <Contact />
  </div>
</template>

<style>
/* 讓 section 自動適應高度 */
.section {
  height: 100vh;
  overflow-y: auto; /* 允許內部滾動 */
  scroll-behavior: smooth;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
}

#fullpage {
  max-width: 100%; /* 修正手機版超出問題 */
  width: 1200vh;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* fullPage.js 內建的 watermark 隱藏 */
div.fp-watermark {
  display: none;
}

body {
  background-color: rgb(24, 24, 24) !important;
}
</style>
