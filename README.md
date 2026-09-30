# 吳雨柔 Yu-Jou Wu ｜ 個人作品集

資訊管理系學生的個人作品集網站，展示系統開發、電腦視覺、資料分析與前端設計相關專案。深色底＋金色點綴的單頁網站。

線上預覽：https://911097.github.io/portfolio-2026/

## 技術

React 19、TypeScript、Vite、Tailwind CSS 4

## 本機執行

需要 Node.js。

    npm install
    npm run dev

## 內容更新

作品資料集中在 `src/data/portfolioData.ts`，型別定義在 `src/types/portfolio.ts`。新增作品時在 `PROJECTS` 陣列加一筆，並在 `src/components/ProjectArt.tsx` 補對應的視覺主題。

## 專案結構

    src/
      components/   各區塊元件（Hero、SelectedWorks、ProjectModal 等）
      data/         作品與個人資料
      types/        TypeScript 型別
      App.tsx       頁面組裝與狀態管理
      
