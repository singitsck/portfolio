# 🚀 singitPortfolio | 個人作品集

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?logo=github)](https://singitsck.github.io/portfolio/)
[![Built with OpenClaw](https://img.shields.io/badge/Built%20with-OpenClaw-6B46C1?logo=robot)](https://openclaw.ai)
[![Skills by Anthropic](https://img.shields.io/badge/Skills-Anthropic%20Skills-orange)](https://github.com/anthropics/skills)

> 使用 OpenClaw 與 Anthropic Skills 建構的現代化個人作品集與旅行日誌
> A modern personal portfolio and travel journal built with OpenClaw & Anthropic Skills.

[🌐 Live Demo 線上預覽](https://singitsck.github.io/portfolio/)

---

## ✨ 最新更新 What's New

### 🌸 2026.03.19 - 新增旅行回顧專區 Travel Journal
- **東京聖誕之旅 2025**: 9天冬日探索紀錄 (Dec 20-28)
- **東京賞櫻之旅 2026**: 5天櫻花季行程規劃 (Apr 3-7)
- **互動式 GPS 地圖**: 使用 Leaflet.js 視覺化旅行軌跡
- **算法藝術背景**: Flow Fields + Particles 動態效果
- **雜誌風格設計**: Magazine editorial layout with parallax effects

---

## 🛠️ 技術棧 Tech Stack

### 核心技術 Core Technologies
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Responsive**: Mobile-first design with CSS Grid & Flexbox
- **Maps**: [Leaflet.js](https://leafletjs.com/) + OpenStreetMap
- **Icons**: [Unicons](https://iconscout.com/unicons)
- **Fonts**: Google Fonts (Noto Sans TC, Playfair Display, Poppins)

### 🤖 使用的 OpenClaw / Anthropic Skills
本項目大量使用 [Anthropic Skills](https://github.com/anthropics/skills) 進行開發：

| Skill | 用途 Usage |
|-------|-----------|
| `frontend-design` | 雜誌編輯風格頁面設計、視差滾動、動畫效果 |
| `algorithmic-art` | Flow Fields 動態背景生成 |
| `travel-gps-map` | GPS 軌跡視覺化與地圖整合 |
| `docx` | 生成行程規劃 Word 文檔 |
| `pptx-anthropic` | 簡報製作與設計系統 |

---

## 📁 項目結構 Structure

```
portfolio/
├── index.html                 # 主頁面 Main Portfolio
├── CV.pdf                     # 履歷 Resume
├── README.md                  # 本文件
├── css/
│   ├── styles.css            # 主樣式 Main Styles
│   └── swiper-bundle.min.css
├── js/
│   ├── main.js               # 主邏輯
│   └── swiper-bundle.min.js
├── images/                    # 作品圖片 Portfolio Images
└── travel/                    # 🆕 旅行專區 Travel Journal
    ├── index.html            # 旅行總覽首頁
    ├── css/
    │   └── travel.css        # 旅行頁面樣式
    ├── js/
    │   ├── travel.js         # 地圖與互動邏輯
    │   └── art-background.js # 算法藝術背景 (Canvas)
    ├── tokyo-2025/           # 聖誕之旅行程頁面
    │   └── index.html
    └── tokyo-2026/           # 賞櫻之旅行程頁面
        └── index.html
```

---

## 🎯 功能特色 Features

### 🏠 主要作品集 Main Portfolio
- 響應式個人簡介頁面 (Responsive personal intro)
- 技能展示與專案作品集
- 深色/淺色主題切換 (Dark/Light mode toggle)
- Google Analytics 整合

### 🌏 旅行日誌 Travel Journal (`/travel/`)
- **🎨 雜誌風格設計**: 使用 `frontend-design` skill 打造精緻排版
- **🗺️ 互動式地圖**: 內嵌 Leaflet 地圖顯示 GPS 軌跡與標記點
- **✨ 動態背景**: Canvas 繪製的 Flow Fields 粒子效果 (Algorithmic Art)
- **📅 行程時間線**: 清晰的每日行程與景點標記
- **🖼️ 照片畫廊**: 瀑布流布局，支援分類篩選
- **📱 響應式設計**: 完美支援手機、平板、桌面

---

## 🚀 快速開始 Quick Start

### 本地預覽 Local Preview
```bash
# 克隆倉庫 Clone repository
git clone https://github.com/singitsck/portfolio.git

# 進入目錄 Enter directory
cd portfolio

# 使用 Live Server 或直接在瀏覽器打開 index.html
# Or use Live Server / open index.html directly
```

### GitHub Pages 部署
本項目已啟用 GitHub Pages，自動部署至：
🔗 `https://singitsck.github.io/portfolio/`

---

## 📝 更新日誌 Changelog

### 2026-03-19
- ✨ 新增 `travel/` 旅行回顧專區
- 🗺️ 整合 Leaflet.js 互動地圖，顯示 2025/2026 東京 GPS 軌跡
- 🎨 添加算法藝術動態背景 (Flow Fields + Particles)
- 🌸 上線東京 2025 聖誕之旅行程頁面
- 🌸 上線東京 2026 賞櫻之旅行程頁面
- 📱 優化響應式布局與深色模式

### 2026-03-17
- 🔧 整理項目結構
- 🌙 完善深色模式支援
- 📝 更新內容與樣式優化

---

## 📸 預覽 Screenshots

### 主頁面 Main Portfolio
現代化個人簡介，展示技能與專案

### 旅行總覽 Travel Overview
![Travel Journal](https://via.placeholder.com/800x400/6B46C1/FFFFFF?text=Travel+Journal+Preview)
*雜誌風格設計，互動地圖，動態背景*

### 行程頁面 Trip Detail
![Trip Page](https://via.placeholder.com/800x400/E74C3C/FFFFFF?text=Trip+Detail+Page)
*時間線布局，航班/酒店資訊，景點標記*

---

## 📄 授權 License

MIT License © 2026 Siu Chun Kit (singit)

---

## 🙏 致謝 Acknowledgments

- 🤖 使用 [OpenClaw](https://openclaw.ai) 協助開發與自動化
- 🎨 設計技能來自 [Anthropic Skills](https://github.com/anthropics/skills)
- 🗺️ 地圖資料 © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors
- 🖼️ 部分圖片來自 [Unsplash](https://unsplash.com)

---

<p align="center">
  <sub>Built with 💙 by singit using OpenClaw</sub>
</p>
