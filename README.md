# unnotech-frontend-recruit

## 執行
```
npm install
npm run dev
```

## 專案的架構、邏輯說明

- stores 管理books的資料，以及當前頁面選中的書籍資料
- types 設定books相關型別
- request api請求
- router 路由
- pages 頁面
- components 組件

### pages

- Books.vue 書籍列表
- Book.vue 書籍內容
- AddBook.vue 新增書籍
- EditBook.vue 修改書籍

### 專案簡介
顯示書籍列表，可新增修改書籍，點擊書籍可查看書籍內容

## 第3方library
- tailwindcss  ui框架，可以更快速的切版
- pinia 輕量型的狀態管理，適合用在中小型專案，方便快速
- axios 幫助快速fetch api，使用它可以不用設定一堆東西
- vee-validate 表單驗證套件，可以快速設定表單格式和驗證規則
- yup 可快速設定驗證規則

## 遇到的困難、問題，以及解決的方法
pinia、vee-validate、yup都是第一次使用，算是邊看文件邊實作了XD
基本上遇到的困難、問題，基本上都是以前遇過的，也都有解決辦法，
不過在這個專案中，比較特別的是，我採用了對我而言相對較新的寫法
比如vite、<script setup></script>，這些是我之前比較少使用的，
所以在做這個專案途中，也經常查詢它們的寫法
舉例說明：props在<script setup></script>中要寫成下面的樣子
```ts
const props = defineProps({
  isShow: {
    type: Boolean,
    required: true
  },
})
```
另外這點算是我覺得在這個專案中比較麻煩的地方：
在書籍列表進入內容頁，需要再fetch一次才能取得書籍資料
這邊我使用pinia去記錄所有的書籍資料，使進入內容頁後可以直接根據id去查詢書籍內容並顯示，而不需要再fetch一次資料，不過重新整理後還是會需要再fetch一次資料
應該要再加上localStorage輔助儲存資料會更好，這是下一步的目標

## 待實作清單
- [ ] localStorage, 解決重新整理後store資料消失的問題
- [ ] 優化新增修改成功後的提醒彈窗
- [ ] 製作刪除功能