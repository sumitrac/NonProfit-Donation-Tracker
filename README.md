# 🌱 NonProfit Donation Tracker

An internal management tool for non-profit staff to record, track, and report on donations. This is not a public donation platform — it is a back-office tool to help organizations understand their donation data.

---
## What It Does

- Add **one-time** or **monthly recurring** donations manually
- Query **total donations for any given year**
- Track and manage **donor contribution history** in a single resource log

---

# NonProfit Donation Tracker

**Live Website:** [https://nonprofit-donation-tracker-frontend.onrender.com](https://nonprofit-donation-tracker-frontend.onrender.com)

## Tech Stack

| Layer          | Technology |
|----------------|------|
| **Frontend**   | React with inline Styles |
| **Backend**    | Java 17, Spring Boot, Gradle |
| **Database**   | PostgreSQL |
| **Deployment** | Render, Github |

---

## Architecture

```
React Frontend  →  Spring Boot API  →  PostgreSQL
(Browser UI)       (Business Logic)    (Data Storage)
```

---

## Core Domain Model

```
DonationInterface
└── BaseDonation (abstract)
    ├── OneTimeDonation   → counts in the year it was made
    └── MonthlyDonation   → counts active months × amount per year

NonProfit → calculates total donations for any given year
```

---

## Key API Endpoints

| Method | Endpoint | Description                          |
|---|---|--------------------------------------|
| `GET` | `/api/donations` | Retrieve all donation records        |
| `GET` | `/api/donations/total?year={year}` | Get total donations for a given year |
| `POST` | `/api/donations/onetime` | Add a one-time donation              |
| `POST` | `/api/donations/monthly` | Add a monthly donation   |

---

## Author

Sumitra Chhetri  
