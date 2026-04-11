# Real Estate Lead Generation Website (Bilingual)

## Overview

This project is a bilingual (English/Spanish) real estate website built for a family-operated real estate business. Its primary goal is to improve lead quality and streamline the initial client contact process.

Rather than functioning as a full property marketplace, the site is designed as a **lead-generation and qualification platform**, helping prospective clients better understand their needs before reaching out.

## Goals

* Provide a clean, professional online presence
* Support both English and Spanish-speaking users
* Capture high-quality leads through a simple, user-friendly contact flow
* Reduce friction for users while still collecting meaningful context
* Be maintainable long-term by a single developer

## Key Features

* 🌐 **Bilingual Routing**

  * English and Spanish versions of all pages
  * Locale-based routing (`/en`, `/es`)
  * Shared component structure with localized content

* 🏠 **Marketing Pages**

  * Home
  * About
  * Contact
  * Resources

* 📝 **Contact & Buyer Intake Form**

  * Core contact fields (name, email, phone, message)
  * Optional buyer context (budget, timeline, etc.)
  * Designed to balance ease-of-use with lead quality

* 📱 **SMS Notification Integration**

  * Form submissions trigger a text notification to the agent
  * Enables fast response without requiring a CRM

* 🧮 **Mortgage Calculator**

  * Standalone resource page
  * Helps users better understand affordability before contacting

## Architecture

This project uses a **frontend-first architecture with serverless backend functionality**, avoiding unnecessary complexity.

### Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (assumed)
* **Routing:** Dynamic locale segment (`[lang]`)
* **Server Logic:** Next.js Route Handlers (serverless functions)
* **Deployment:** Vercel (recommended)

### Design Principles

* **Keep the MVP small and focused**
* **Avoid premature backend complexity**
* **Separate structure from content**
* **Design for future extensibility without overengineering**

## Internationalization Strategy

* Shared page and component structure
* Locale-specific content via message files (`en.json`, `es.json`)
* URL-based language separation for clarity and SEO

## Project Structure (Simplified)

```
app/
  [lang]/
    layout.tsx
    page.tsx
    about/
    contact/
    resources/

components/
  (shared UI components)

lib/
  i18n.ts

messages/
  en.json
  es.json
```

## Future Enhancements

The architecture intentionally leaves room for:

* MLS / IDX property search integration
* CRM integration (lead tracking, follow-ups)
* Enhanced analytics and conversion tracking
* Expanded resource content (buyer guides, FAQs)
* Multi-step intake flows (if needed)

## Non-Goals (Current Scope)

* Custom MLS ingestion or property database
* User accounts or dashboards
* Complex backend systems
* Full mortgage application processing

## Lessons & Engineering Focus

This project emphasizes:

* Practical architecture decisions under real constraints
* Avoiding overengineering in early stages
* Designing for maintainability and clarity
* Building software that aligns with actual business needs

## Running Locally

```bash
npm install
npm run dev
```

## Deployment

Recommended: Vercel

* Seamless integration with Next.js
* Built-in support for serverless route handlers
* Easy environment variable management (for SMS integration, etc.)

---

## Author

Built and maintained as part of a real client project, with a focus on long-term ownership, simplicity, and practical engineering judgment.
