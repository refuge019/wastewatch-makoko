# 🌍 WasteWatch Makoko

A community-powered civic tech platform that enables residents to report waste hotspots and helps community leaders and administrators prioritize cleanup responses.

Built as a hackathon-style MVP inspired by real-world challenges in informal settlements like Makoko (Lagos).

---

## 🚀 Problem Statement

In informal waterfront communities such as Makoko:

* Waste collection vehicles cannot access homes easily
* Waste accumulates in waterways
* Reporting systems are fragmented or nonexistent
* Response prioritization is often unclear

WasteWatch Makoko solves this by enabling **community-driven reporting and structured response workflows**.

---

## 💡 Solution Overview

WasteWatch Makoko is a lightweight civic system where:

1. Residents report waste locations
2. The system assigns a priority score (AI-inspired logic)
3. Community leaders and admins respond to reports
4. Status updates track cleanup progress

This creates a **simple but functional civic response pipeline**.

---

## 🧠 Key Features

### 📌 1. Waste Reporting System

* Submit waste reports with:

  * Location
  * Waste type
  * Severity
  * Description
* Automatic timestamp generation

---

### 📊 2. AI Priority Engine (Rule-Based)

Each report is assigned a priority level:

* LOW
* HIGH
* CRITICAL

Based on:

* Waste type
* Severity level

---

### 🧑‍💼 3. Role-Based Dashboard

Three system roles:

* Resident → submits reports
* Community Leader → manages response
* Admin → full control (approve, resolve, delete)

---

### 🔄 4. Workflow System

Reports move through lifecycle:

Submitted → In Progress → Resolved / Rejected

---

### 📈 5. Analytics Dashboard

Displays:

* Total reports
* Critical cases
* High priority cases
* Resolved cases
* Pending cases

---

## 🛠️ Tech Stack

* React.js
* React Router DOM
* JavaScript (ES6)
* LocalStorage (for data persistence)
* CSS (custom styling)

No backend required (frontend-only MVP).

---

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Report.jsx
│   ├── Dashboard.jsx
│   └── Analytics.jsx
├── utils/
│   └── priority.js
├── App.js
├── App.css
└── index.js
```

---

## 💻 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/wastewatch-makoko.git
```

---

### 2. Navigate into project folder

```bash
cd wastewatch-makoko
```

---

### 3. Install dependencies

```bash
npm install
```

---

### 4. Start development server

```bash
npm start
```

---

### 5. Open in browser

```
http://localhost:3000
```

---

## 🧪 Demo Flow (For Lecturers / Judges)

1. Open Home Page
2. Switch role (Resident / Admin / Leader)
3. Submit a waste report
4. View report in Dashboard
5. Admin updates status:

   * Start Response
   * Mark Resolved
   * Reject
6. View Analytics update in real-time

---

## 🌱 Design Philosophy

This project is built on the principle of:

> **Ubuntu — “I am because we are”**

WasteWatch Makoko emphasizes:

* Community participation
* Shared responsibility
* Local decision-making
* Transparent civic response systems

---

## ⚙️ Future Improvements

* Backend integration (Node.js + MongoDB)
* Real authentication system
* Map-based waste visualization
* SMS/WhatsApp reporting system
* Real-time updates across users

---

## 📌 Author

Built as part of a hackathon-style civic technology sprint focused on African urban infrastructure challenges.

---

## ⭐ Acknowledgements

Inspired by:

* Community-driven reporting systems
* Civic tech movements in Africa
* Informal settlement resilience models

```
```
