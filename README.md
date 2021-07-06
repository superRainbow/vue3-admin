# vue3-admin

## 專案說明

Vue3 後台系統

### 預計前端專案上使用

```
1. 專案使用前後端分離 SPA 架構
		與後端使用 api 來傳遞資料

2. 前端框架(MVVM)：vue3
		- 使用官方的 CLI 建立專案
		- CSS 預處理器：SCSS
		- E2E Testing：Cypress

3. 方便開發
		開發方便模擬串接api：Mock


4. 維護專案品質
	- Linter/ Formatter：檢查工具
	- Commitizen：規範 commit message
	- conventional-changelog-cli：產生 changelog 檔案
```

## 使用

1. 下載專案並安裝使用套件

   ```
   git clone git@github.com:superRainbow/vue3-admin.git && cd $_ && npm install
   ```

2. 本地開發

   ```
   npm run serve
   ```

3. production 打包

   ```
   npm run build
   ```

4. end-to-end tests

   ```
   npm run test:e2e
   ```

5. Lints and fixes files

   ```
   npm run lint
   ```

## 其他

- See [Configuration Reference](https://cli.vuejs.org/config/).

test
