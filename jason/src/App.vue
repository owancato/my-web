<script setup>
import { ref, onMounted } from "vue";
import fullpage from "fullpage.js";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import Navbar from "@/components/Navbar.vue";
import Works from "./components/Works.vue";

const sectionRefs = ref([]); // 存儲每個 section 的 DOM 參考

onMounted(() => {
  new fullpage("#fullpage", {
    autoScrolling: true, // 允許手動滾動
    fitToSection: false, // 避免強制對齊 section
    //scrollOverflow: true, // 允許 section 內部滾動
    //navigation: true,
    anchors: ["home", "about", "projects", "contact"], // 確保沒有空格
    //navigationPosition: "left",
    credits: {
      enabled: false,
      label: 'Made with fullPage.js',
      position: 'right'
    },
    menu: '#myMenu'
  });

  // 監聽滾動，當滾動到底部時，手動進入下一個 section
  window.addEventListener("scroll", handleScroll);
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
    <Navbar/>
    <div id="fullpage">
      <Home/>
      <About/>
      <Works/>
      <Projects/>
      <Contact/>
    </div>
</template>

<style>
.section {
  height: 100vh;
  overflow-y: auto; /* 允許內部滾動 */
  scroll-behavior: smooth;
}

#app {
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  height: 100vh;
  width: 100%;
  position: relative; /* 確保不干擾 fixed 的 Navbar */
}

#fullpage {
  width: 1200px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

div.fp-watermark {
  display: none;
}

</style>
