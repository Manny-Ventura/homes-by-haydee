# Real Estate Lead Generation Website (Bilingual)

## Overview

This project is a bilingual (English/Spanish) real estate website built for a family-operated real estate business.

Its primary goal is to improve lead quality and streamline initial client contact. Rather than functioning as a full property marketplace, the site acts as a **lead-generation and qualification platform**, helping prospective clients better understand their needs before reaching out.

---

## Goals

- Provide a clean, professional online presence
- Support both English and Spanish-speaking users
- Capture higher-quality leads through guided intake
- Reduce friction while still collecting meaningful context
- Remain simple and maintainable by a single developer

---

## Key Features

### 🌐 Bilingual Routing

- English and Spanish versions of all pages
- Locale-based routing (`/en`, `/es`)
- Shared UI structure with localized content

### 🏠 Marketing Pages

- Home
- About
- Contact
- Resources

### 📝 Contact & Buyer Intake

- Core fields (name, email, phone, message)
- Optional buyer context (budget, timeline, etc.)
- Designed to balance simplicity with lead quality

### 📱 SMS Notifications

- Form submissions trigger text notifications to the agent
- Enables fast response without requiring a CRM

### 🧮 Mortgage Calculator

- Dedicated resource page
- Helps users estimate affordability before contacting

---

## 🏗 Architecture Overview

This project uses a **frontend-first architecture with serverless backend functionality**.

### Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** Dynamic locale segment (`[lang]`)
- **Server Logic:** Route Handlers (serverless)
- **Deployment:** Vercel (recommended)

---

## 🌍 Routing & Internationalization

Using App Router, not Pages Router:
<https://nextjs.org/docs/app/guides/internationalization>

The app uses a dynamic route segment:

```txt
app/[lang]/