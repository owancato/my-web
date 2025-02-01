import { createI18n } from "vue-i18n";

const messages = {
  en: {
    home: "Home",
    about: "About Me",
    projects: "Projects",
    contact: "Contact",
    works: "Work Experiences",
    switchLang: "Switch Language",
    headline: "Hi! I'm Jason!",
    subHeadline: "I'm a backend engineer from Taiwan.",
    about_content: {
        expert: "Focused on backend development and basic DevOps, willing to learn new technologies as needed.",
        hobby: "Part-time band keyboardist and amateur session musician.",
        main_skills: "Backend development",
        other_skills: "Others"
    },
    popchill_tasks: [
        "Maintain existing features and develop new website functionalities (API & admin panel).",
        "Independently integrated a third-party payment system (DaGeFu installment payments).",
        "Implemented Auto Scaling to resolve high server load and optimize server costs.",
        "Monitored system health using Grafana and Prometheus to ensure timely anomaly detection.",
        "Collected logs with Promtail and Loki to improve operational log query efficiency."
    ],
    leju_tasks: {
        backend: [
            "Implemented CI/CD on GitHub to enhance deployment automation.",
            "Developed a keyword search feature for the official blog page using MongoDB Atlas Search.",
            "Optimized SQL queries to improve user experience.",
            "Modified Laradock to manage all projects locally with a single Docker Compose setup."
        ],
        intern: [
            "Performed data analysis using Python and worked with Flask, BigQuery, and third-party API integrations.",
            "Assisted in developing a scheduling system.",
            "Implemented an ETL program for Ragic to Google Sheet data synchronization."
        ]
    },
    ezdock_desc: "A Docker Compose project that can run multiple Laravel applications simultaneously, adapted from Laradock. It resolves cross-project connection issues and is suitable for local development.",
    ticket_support_desc: "A Chrome extension that supports multiple Taiwanese ticketing websites, allowing users to execute automation scripts to improve ticket-snatching efficiency. It can also integrate with an OCR module for automatic CAPTCHA input.",
    education: "Education",
    ntnu: {
        school: "National Taiwan Normal University",
        degree: "Master of Computer Science"
    }
  },
  zh_TW: {
    home: "首頁",
    about: "關於我",
    projects: "作品集",
    contact: "聯絡我",
    works: "工作經歷",
    switchLang: "切換語言",
    headline: "嗨！我是 Jason！",
    subHeadline: "我是來自台灣的後端工程師",
    about_content: {
        expert: "專注於後端開發與基礎維運，會依據需求學習新技術。",
        hobby: "副業為樂團鍵盤手, 業餘 session 樂手。",
        main_skills: "後端開發",
        other_skills: "其他"
    },
    popchill_tasks: [
        '既有功能維護 + 網站功能開發 (API + 後台)',
        '獨立開發第三方金流系統串接 (大哥付無卡分期)',
        '導入 Auto Scaling 解決伺服器 loading 過高 & 最佳化伺服器使用開銷',
        '使用 Grafana + Prometheus 監控系統，確保能及時發現異常',
        '使用 Promtail + Loki 進行日誌收集，提高 operation log 查詢效率'
    ],
    leju_tasks: {
        backend: [
            '導入 CI/CD 於 GitHub 提升部署自動化',
            '開發官網部落格頁面的關鍵字搜尋功能 (MongoDB Atlas Search)',
            '優化 SQL 查詢效能提升使用者體驗',
            '改寫 Laradock 以便在本地單個 Docker Compose 管理所有專案'
        ],
        intern: [
            '使用 Python 進行數據分析，並接觸 Flask、BigQuery 及第三方 API 串接',
            '協助開發排班系統',
            '實作 Ragic 至 Google Sheet ETL 程式'
        ]
    },
    ezdock_desc: "一項 docker compose 專案能夠同時運行多個 laravel 應用程式，改編自 laradock，解決了跨專案間連線問題，適用於本地開發。",
    ticket_support_desc: "一項支援多個台灣售票網站的 chrome 擴充功能，可以依據需求執行自動化腳本增加搶票效率，也可以串接 OCR 模組實現驗證碼自動輸入。",
    education: "學歷",
    ntnu: {
        school: "國立台灣師範大學",
        degree: "資訊工程學系"
    }
  },
};

const i18n = createI18n({
  locale: localStorage.getItem("lang") ?? "zh_TW", // 預設語言
  messages,
  globalInjection: true,
  legacy: false,
});

export default i18n;
