# Google Analytics 設置指南

## 💰 Google Analytics 是否收費？

**簡短回答：免費版完全免費！**

Google Analytics 提供兩個版本：

### ✅ **Google Analytics 4 (免費版) - 推薦使用**
- **完全免費**，無使用期限
- 適合：個人網站、小型企業、作品集網站
- 每月處理量限制：
  - 標準帳戶：每月 1,000 萬事件（對大多數網站來說綽綽有餘）
  - 自訂維度：最多 50 個
  - 數據保留期：14 個月（可選擇保留更長時間）
- **功能**：包含我們已實現的所有追蹤功能

### 💼 **Google Analytics 360 (付費版)**
- **月費**：約 $150,000 美元/年起（非常昂貴）
- 適合：大型企業、需要高級功能的公司
- 額外功能：無限量處理、更長數據保留、優先支持等

**結論**：對於您的作品集網站，**完全免費的 Google Analytics 4 已經足夠使用**，不需要付費！

---

## 📊 步驟 1: 創建 Google Analytics 帳戶

1. 前往 [Google Analytics](https://analytics.google.com/)
2. 登入您的 Google 帳戶
3. 點擊「開始測量」或「建立帳戶」
4. 填寫帳戶資訊：
   - 帳戶名稱：您的名稱或公司名稱
   - 帳戶資料共用設定：選擇您需要的選項

## 📝 步驟 2: 建立資源（Property）

1. 點擊「建立資源」
2. 填寫資源資訊：
   - 資源名稱：例如「Portfolio Website」
   - 報告時區：選擇「香港時間 (GMT+8)」
   - 貨幣：選擇「港元 (HKD)」
3. 點擊「下一步」並填寫商家資訊
4. 選擇「建立」

## 🔑 步驟 3: 獲取測量 ID (Measurement ID)

1. 在「資源」設定中，點擊「資料串流」
2. 選擇「網頁」作為平台
3. 填寫網站資訊：
   - 網站網址：您的網站網址（例如：https://singitsck.github.io）
   - 串流名稱：例如「Portfolio Main Site」
4. 點擊「建立串流」
5. **複製「測量 ID」**（格式：`G-XXXXXXXXXX`）

## ⚙️ 步驟 4: 更新網站代碼

1. 開啟 `index.html` 檔案
2. 找到以下兩處 `YOUR_GA4_MEASUREMENT_ID`：
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA4_MEASUREMENT_ID"></script>
   ```
   和
   ```javascript
   gtag('config', 'YOUR_GA4_MEASUREMENT_ID', {
   ```
3. 將 `YOUR_GA4_MEASUREMENT_ID` 替換為您的實際測量 ID（例如：`G-ABC123XYZ`）

## ✅ 已實現的追蹤功能

### 自動追蹤
- ✅ 頁面瀏覽量
- ✅ 用戶地理位置
- ✅ 設備類型（桌面/手機/平板）
- ✅ 瀏覽器類型
- ✅ 頁面停留時間

### 自定義事件追蹤
- ✅ **社交媒體連結點擊**：追蹤 LinkedIn、Twitter、GitHub 等連結
- ✅ **導航連結點擊**：追蹤用戶點擊的導航項目
- ✅ **CV 下載**：追蹤 CV.pdf 下載次數
- ✅ **服務詳情查看**：追蹤用戶查看哪些服務詳情
- ✅ **作品集互動**：追蹤用戶點擊的作品集項目
- ✅ **主題切換**：追蹤用戶選擇的顏色主題（深色/淺色）
- ✅ **表單提交**：追蹤聯繫表單提交次數
- ✅ **滾動深度**：追蹤用戶滾動到 25%、50%、75%、100%
- ✅ **聯絡資訊點擊**：追蹤電話和郵件連結點擊

## 📈 在 Google Analytics 中查看數據

1. 登入 [Google Analytics](https://analytics.google.com/)
2. 選擇您的資源
3. 在左側選單中：
   - **即時**：查看當前在線用戶
   - **報表** → **參與度** → **事件**：查看所有自定義事件
   - **報表** → **參與度** → **網頁和畫面**：查看頁面瀏覽量
   - **報表** → **使用者**：查看用戶統計資料

## 🔒 隱私和 GDPR 合規性

已實現的隱私保護措施：
- ✅ IP 匿名化（`anonymize_ip: true`）
- ✅ Cookie 過期時間設置為 2 年

**建議**：如果您的網站主要面向歐盟用戶，建議：
1. 添加 Cookie 同意彈窗
2. 添加隱私政策頁面
3. 考慮使用 Google Consent Mode

## 🧪 測試追蹤功能

### 方法 1: Google Analytics DebugView
1. 安裝 [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger) Chrome 擴展
2. 啟用擴展後，在 Google Analytics 中查看「即時」→「DebugView」
3. 瀏覽您的網站並觸發各種事件

### 方法 2: 瀏覽器開發者工具
1. 開啟瀏覽器開發者工具（F12）
2. 查看「Network」標籤
3. 過濾 `collect` 或 `google-analytics`
4. 觸發事件後查看是否有請求發送到 Google Analytics

## 📱 自定義追蹤事件（進階）

如果您想添加更多自定義事件，可以在 `js/main.js` 中使用以下格式：

```javascript
if (typeof gtag !== 'undefined') {
  gtag('event', 'event_name', {
    'event_category': 'Category Name',
    'event_label': 'Event Label',
    'value': 1
  });
}
```

## 🆘 常見問題

### Q: 為什麼看不到數據？
A: Google Analytics 可能需要 24-48 小時才顯示數據。使用「即時」報表可以立即查看當前活動。

### Q: 如何確認代碼是否正確安裝？
A: 使用瀏覽器開發者工具（F12）→ Console，輸入 `gtag`，如果看到函數定義，表示安裝成功。

### Q: 測量 ID 格式是什麼？
A: 格式為 `G-XXXXXXXXXX`（G- 後跟 10 個字母數字字符）

### Q: 可以同時使用多個測量 ID 嗎？
A: 可以，只需重複配置代碼並使用不同的測量 ID。

## 📚 相關資源

- [Google Analytics 4 官方文檔](https://developers.google.com/analytics/devguides/collection/ga4)
- [GA4 事件追蹤指南](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [GDPR 和 Google Analytics](https://support.google.com/analytics/answer/9019185)

---

**注意**：請記得將 `YOUR_GA4_MEASUREMENT_ID` 替換為您的實際測量 ID！
