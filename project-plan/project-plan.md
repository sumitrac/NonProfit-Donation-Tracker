# 🌱 NonProfit Donation Tracker

An internal management tool for non-profit staff to record, track, and report on donations. 
This is not a public donation platform — it is a back-office tool to help organizations understand their donation data.

---

## What It Does

- Add **one-time** or **monthly recurring** donations manually
- **Import donations in bulk** via CSV file upload
- Query **total donations for any given year**
- Cancel and track monthly donation lifecycles

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React |
| **Backend** | Java 21, Spring Boot, Gradle |
| **Database** | PostgreSQL |
| **ORM** | Spring Data JPA |

---

## Project Structure

```
NonProfit-Donation-Tracker/
├── README.md
├── project-plan/
│   └── project-plan.md
├── backend/
├── frontend/
└── .gitignore
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

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/donations/total?year={year}` | Get total donations for a year |
| `POST` | `/api/donations/onetime` | Add a one-time donation |
| `POST` | `/api/donations/monthly` | Add a monthly donation |
| `POST` | `/api/donations/import` | Bulk import donations via CSV |
| `PUT` | `/api/donations/monthly/{id}/cancel` | Cancel a monthly donation |

---

## CSV Import Format

```
type,amount,creationDate,cancellationDate
ONE_TIME,500.00,2024-01-15,
MONTHLY,100.00,2024-03-01,2024-09-01
```

---

## Future Improvements

- Payment processor integration (Stripe, PayPal) to auto-import donations
- Donor management and profiles
- Dashboard with charts and yearly trends

---

## Author
Sumitra Chhetri  
