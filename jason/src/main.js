import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import './assets/main.css';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components'; // 一次導入所有元件
import colors from 'vuetify/util/colors'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import "@mdi/font/css/materialdesignicons.css"

const icons = {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  }

const vuetify = createVuetify({
    icons: icons,
    components: components,
    theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              primary: colors.shades.black, // #E53935
              secondary: colors.shades.black, // #FFCDD2
            }
          },
        },
      },
  });
const app = createApp(App);
app.use(vuetify)
app.use(i18n);
app.mount("#app");
