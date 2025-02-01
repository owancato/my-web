<template>
  <div class="section" data-anchor="projects">
    <h1>💼 {{ $t("projects") }}</h1>
    <v-container class="container">
      <v-row no-gutters>
        <v-col
          cols="12" sm="6" md="4" lg="3"
          v-for="(project, index) in projects"
          :key="index"
        >
          <v-sheet class="ma-2 pa-2 project-card">
            <v-avatar
              rounded="60"
              size="150"
            >
              <!-- Project Image -->
              <v-img :src="project.image" alt="project image" class="project-image" />
            </v-avatar>
            <!-- Project Title -->
            <h3 class="project-title">{{ project.title }}</h3>
            <!-- Project Description -->
            <p class="project-description">{{ $t(project.description) }}</p>
            <!-- Tech Tags -->
            <v-chip-group class="tech-tags" column>
              <v-chip v-for="(tag, idx) in project.techTags" :key="idx" class="ma-1 tag" color="primary" text-color="white">
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import dockerSrc from "@/assets/images/docker.png";
import chromeSrc from "@/assets/images/chrome.png";

const projects = [
  {
    title: "Ezdock",
    description: "ezdock_desc",
    image: dockerSrc, // Replace with actual image URL
    techTags: ["Docker", "PHP", "Laravel"],
  },
  {
    title: "Ticket Support Tool",
    description: "ticket_support_desc",
    image: chromeSrc, // Replace with actual image URL
    techTags: ["Jquery", "JavaScript", "Python"],
  },
];
</script>

<style scoped>
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
}

.project-card {
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  background-color: #3a3a3a;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-title {
  font-size: 1.25rem; /* 微調標題大小 */
  font-weight: bold;
  margin-top: 16px;
  color: #ffffff;
}

.project-description {
  margin-top: 8px;
  color: #ddd;
  text-align: left;
  font-size: 16px; /* 更適合手機的字體大小 */
}

.tech-tags {
  margin-top: 12px;
}

.tag {
  background-color: #616161;
  color: #ffffff;
}

.v-chip {
  margin: 2px;
}

.container {
  background-color: #181818;
}

h1 {
  font-size: 1.75rem; /* 調整標題大小 */
  margin-bottom: 20px;
}

/* Media query for mobile responsiveness */
@media (max-width: 768px) {
  .section {
    padding-top: 500px !important;
  }

  .project-title {
    font-size: 1.2rem;  /* 微調手機版標題的大小 */
  }

  .project-description {
    font-size: 14px;  /* 微調手機版文字的大小 */
  }

  .project-image {
    height: 150px;  /* 在手機上調整圖片大小 */
  }
}
</style>
