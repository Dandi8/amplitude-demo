# Amplitude Analytics Demo – Hackathon Event Page

This project is a simplified front-end event registration demo page that integrates **Amplitude Analytics** to track user interactions. It is designed as part of a small analytics and security-focused project.

## 📌 Project Overview

The page simulates a **Hackathon event landing site**, originally created as part of a PHP-based system. For this demo, the front-end has been extracted and hosted using **GitHub Pages**.

It includes:
- A navigation bar
- Event details
- A “Register Now” button integrated with Amplitude event tracking
- Custom responsive styling using CSS

## 🎯 Purpose

This project demonstrates:
- How to integrate Amplitude with a static HTML/CSS/JS site
- How to track custom events (e.g., button clicks)
- How analytics tools can be used to improve product or event planning

## 📊 Amplitude Integration

Amplitude is initialized via `amplitude.js`, and the `Register Now` button triggers a custom event:  
```javascript
amplitude.getInstance().logEvent("Register Button Clicked");
