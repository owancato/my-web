<template>
    <div class="section" data-anchor="contact">
      <v-container class="contact-container">
        <h1 class="text-h4 font-weight-bold mb-4">📩 {{ $t("contact") }}</h1>
        <v-row justify="center">
          <v-col cols="24">
            <v-card class="pa-4 card" width="250">
              <v-list class="card">
                <v-list-item v-for="(contact, index) in contacts" :key="index" class="contact-item card">
                  <v-btn 
                    :href="contact.link" 
                    target="_blank"
                    class="contact-btn card-btn"
                  >
                    <v-icon start :icon="contact.icon"></v-icon>{{ contact.label }}
                  </v-btn>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const contacts = ref([
    {
      label: "Gmail",
      link: "mailto:owancato@gmail.com",
      icon: "mdi-email",
    },
    {
      label: "GitHub",
      link: "https://github.com/owancato",
      icon: "mdi-github",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/owancato/",
      icon: "mdi-linkedin",
    },
  ]);
  </script>
  
  <style scoped>
  .section {
    height: auto; /* 改為 auto，避免固定高度影響排版 */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
  
  .contact-container {
    text-align: center;
  }
  
  .contact-item {
    width: 100%;
    padding: 0;
    margin: 8px 0;
  }
  
  .contact-btn {
    width: 100%;
    text-transform: none; /* 讓文字保持原樣 */
    font-size: 1.2rem;
    margin: 8px 0; /* 加上間隔，使按鈕不會緊貼在一起 */
  }
  
  .card {
    background-color: #3a3a3a;
  }
  
  .card-btn {
    background-color: #616161;
    color: white;
  }
  
  /* Media query for mobile responsiveness */
  @media (max-width: 600px) {
    .section {
        padding-top: 200px !important;
    }

    .contact-btn {
      font-size: 1rem; /* 調整手機版按鈕字體大小 */
    }
  
    .card {
      padding: 20px; /* 增加手機版卡片內邊距 */
    }
  
    .contact-container {
      padding: 0;
    }
  }
  </style>
  