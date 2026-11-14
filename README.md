# FitLog — Workout Planner

A responsive workout-planning web application that helps users explore exercises, build a daily workout plan, and keep track of completed activities.

**Live Demo:** https://fitlog-nafsun.vercel.app/  
**Repository:** https://github.com/Nafsun-baust/fitlog

## Homepage Screenshot

![FitLog Homepage Screenshot](./fitlog%20home%20ss.jpg)

## Overview

FitLog provides a workout library backed by an external API and a personal planning area. Users can browse exercises, open individual workout details, save exercises for later, and organize a daily plan.

## Key Features

- Browse a workout library containing exercises for different muscle groups.
- Load workout data from an external API.
- Open individual workout pages to view exercise information and instructions.
- Add exercises to a daily plan with a maximum of five lifts.
- Save exercises and switch between the daily plan and saved list.
- Mark planned exercises as completed or remove them from a list.
- Sort the plan by duration, estimated calories, or rating.
- View plan totals for exercises, minutes, and estimated calories.

## Technology Stack

- **Framework:** Next.js 16
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **State Management:** React Context API
- **Data:** External FitLog API

## Main Dependencies

### Runtime dependencies

- `next`
- `react`
- `react-dom`
- `lucide-react`
- `react-hot-toast`

### Development dependencies

- `typescript`
- `tailwindcss`
- `@tailwindcss/turbopack`
- `eslint`
- `eslint-config-next`
- `@types/node`
- `@types/react`
- `@types/react-dom`

See [package.json](./package.json) for the exact package versions.

## Run Locally

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Nafsun-baust/fitlog.git
   cd fitlog
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` — start the local development server.
- `npm run build` — create a production build.
- `npm run start` — start the production server.
- `npm run lint` — run ESLint.

## Data Source

Workout information is loaded from the FitLog API:

`https://api.abcz.workers.dev/api/fitlog`

The application needs an internet connection to retrieve workout data.

## Project Links

- **Live Demo:** https://fitlog-nafsun.vercel.app/
- **GitHub Repository:** https://github.com/Nafsun-baust/fitlog

---

Developed by **MD Nafsun Kabir**.
