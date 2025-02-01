FROM node:18

# 設定工作目錄
WORKDIR /app

# 安裝 Vue CLI
RUN npm install -g @vue/cli

# 設定容器內部的 volume (可透過 docker-compose 或 -v 參數掛載外部資料夾)
VOLUME ["/app"]

# 暴露 Vue 開發伺服器的預設埠
EXPOSE 5174 8081

# 預設進入 shell 讓使用者能手動執行 npm create vue 專案
CMD ["sh"]
