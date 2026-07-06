# CostCut Landing Page

> **Premium AI Without the Cloud Bill**

CostCut is an intelligent routing engine that offloads tasks to local models and only uses expensive Cloud APIs when necessary. This repository contains the frontend landing page for the project, built with Nuxt and Vuetify.

## 🚀 Technologies

- **Framework:** [Nuxt](https://nuxt.com/) / Vue.js
- **UI Components:** [Vuetify](https://vuetifyjs.com/)
- **Deployment:** GitHub Pages (via GitHub Actions)

---

## 🛠️ Local Development

### 1. Install Dependencies

Make sure you have Node.js installed, then install the project dependencies:

```bash
npm install
```

### 2. Start the Development Server

Run the development server. The app will be available at `http://localhost:3000`.

```bash
npm run dev
```

---

## 🌐 Deployment

This application is set up with automated deployments to GitHub Pages.

Whenever you push code to the `main` or `master` branch, the GitHub Action defined in `.github/workflows/deploy.yml` will automatically build the static assets and publish them to your GitHub Pages URL.

If you ever need to generate the static files locally to test what will be deployed, you can run:

```bash
npm run generate
```
