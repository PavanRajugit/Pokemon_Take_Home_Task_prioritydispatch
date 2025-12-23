

---

```md
# Pokémon Explorer 🧭

A full-stack Pokémon information website built with Nuxt 3, using a clean Vue + TypeScript frontend and a lightweight backend API layer that consumes the public  PokéAPI .

This project was designed to be simple, user-friendly, and interview-ready, with a focus on clean architecture, good UX, and clear separation of concerns.

---

## 🚀 Features

- Displays a list of 60 Pokémon with names and thumbnails
- Custom search filter to quickly find Pokémon by name
-  Dynamic routing  to individual Pokémon profile pages
-  Quick View modal  to preview Pokémon details without leaving the landing page
- Detailed profile page showing:
  - Name
  - Height
  - Weight
  - Abilities (formatted as a comma-separated, capitalized string)
- Responsive layout using  plain CSS only  (no UI libraries)

---

## 🧱 Architecture Overview

This project uses Nuxt 3’s full-stack capabilities:

### Frontend
-  Nuxt 3 / Vue 3 
-  TypeScript 
- Pages and components for clean UI structure
- Client-side filtering for fast search experience

### Backend
- Nuxt  server API routes  (`/server/api`)
- Acts as a middle layer between the frontend and PokéAPI
- Backend endpoints:
  - `GET /api/pokemon` → Fetches first 60 Pokémon (name + image)
  - `GET /api/pokemon/:name` → Fetches detailed Pokémon data

The frontend never calls PokéAPI directly.



## 🎨 Design Decisions

-  Hero-first landing page  to clearly communicate the purpose of the app
-  Search placed prominently  since filtering is the primary interaction
-  Quick View modal  added as a lead-level UX enhancement to reduce unnecessary navigation
- Muted, friendly color palette to keep the UI calm and readable
- No CSS frameworks used to demonstrate core CSS fundamentals

---

## 🧠 Bonus: Lead-Level Enhancement

As a project lead improvement, a  Quick View modal  was added to the landing page.  
This allows users to preview Pokémon details instantly without navigating away from the list, improving browsing efficiency and overall UX.

The feature:
- Reuses existing backend APIs
- Is implemented as a reusable component
- Does not increase backend complexity

---

## 🛠️ Tech Stack

-  Nuxt 3 
-  Vue 3 
-  TypeScript 
-  JavaScript (API layer) 
-  PokéAPI 
-  Plain CSS 

---

## ▶️ Getting Started

### Install dependencies
```bash
npm install
````

### Run the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📌 Notes

* No UI libraries (Bootstrap, Tailwind, etc.) were used
* Focus was placed on clarity, maintainability, and UX
* The project is suitable for both take-home assignments and portfolio use

---


