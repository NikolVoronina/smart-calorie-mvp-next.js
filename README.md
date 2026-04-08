## Live Demo 

https://smart-calorie-mvp-next-js.vercel.app/


# Smart Calorie Calculator

A simple and modern web app for calculating daily calories, macros, and water intake based on user data.

The project is built with Next.js and TypeScript and focuses on clean UI, structured logic, and a first step into machine learning concepts.

---

## Features

- Calculate daily calorie needs
- Macro breakdown (protein, fat, carbs)
- Water intake recommendation
- Smart goal suggestion (fat loss, maintenance, muscle gain)
- Modern UI with animated background

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

---

## How it works

The app takes user input:

- age
- weight
- height
- gender
- activity level
- goal

Based on this, it calculates:

- BMR (Basal Metabolic Rate)
- daily calorie needs
- macros distribution
- water intake

---

## Goal classification (ML-inspired)

The app includes a simple classification system that suggests a goal based on BMI and activity level.

Examples:

- High BMI → fat loss
- Low BMI → muscle gain
- Normal range → maintenance

This is a rule-based approach that simulates a basic machine learning classification model.

---

## Project structure
/app
/components
/lib
├── calculateNutrition.ts
└── classifyGoal.ts


/app
/components
/lib
├── calculateNutrition.ts
└── classifyGoal.ts


- `calculateNutrition.ts` → main calculation logic  
- `classifyGoal.ts` → goal classification logic  
- `components/` → UI components  

---

## Installation

```bash
npm install
npm run dev