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
                    <v-icon start :icon="contact.icon"></v-icon>{{contact.label}}
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.contact-container {
  text-align: center;
}

.contact-item {
    width: 100%;
    padding: 0;
}

.contact-btn {
    width: 100%;
    text-transform: none; /* 讓文字保持原樣 */
    font-size: 1.2rem;
}

.card {
    background-color: #3a3a3a;
}

.card-btn {
    background-color: #616161;
    color: white;

}
</style>
