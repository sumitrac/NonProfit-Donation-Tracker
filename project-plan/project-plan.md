# 🌱 NonProfit Donation Tracker: # 📔 Non-Profit-Donation-Tracker:

1.  **Phase 1: Core Logic (Plain Java)**
    * Established the foundation with `DonationInterface` and `BaseDonation` classes.
    * Developed the logic required to calculate yearly totals for one-time versus monthly recurring donations.

2.  **Phase 2: API & Integration**
    * Transitioned the business logic into a **Spring Boot** application.
    * Built REST controllers and mapped endpoints to handle incoming donation data via JSON.

3.  **Phase 3: Database**
    * Integrated **PostgreSQL** using Spring Data JPA.
    * Shifted from in-memory storage to a persistent database to ensure all donation records survive application restarts.

4.  **Phase 4: Frontend Development (React)**
    * Built the user dashboard using **React**.
    * Leveraged **AI-assisted development** to rapidly scaffold UI components and styled them to interface with the Spring Boot API for real-time data display.

---

## 📅 V2 Roadmap (Future Improvements)

* **CSV Import Engine:** Implement `POST /api/donations/import` to allow non-profits to upload bulk historical data from spreadsheets.
* **Donation Lifecycle Management:** Add a `PUT /cancel` endpoint to update the `cancellationDate` for active monthly subscriptions, improving the accuracy of yearly projections.
* **Automated Payment Integration:** Connect **Stripe webhooks** to automatically record live donations and trigger digital receipts.
* **Data Visualization:** Integrate **Charts.js** or **Recharts** to provide visual trends of donation growth over time.
* **Donor Management:** Expand the schema to include `DonorProfile` entities for tracking individual giving history.

## ⚙️ Technical Environment

* **Language:** Java 25
* **Framework:** Spring Boot 3.4 (with Gradle)
* **Database:** PostgreSQL
* **Frontend:** React (Hooks & Fetch API)
* **Cloud Hosting:** Render (configured with dynamic environment variables)
---

## 🔬 System Design & Logic

### Yearly Calculation Engine
* **OneTimeDonation:** Full `amount` applied to the year of the `creationDate`.
* **MonthlyDonation:** Calculated as `(Monthly Amount × Active Months in Year)`.
    * *Logic:* The system validates the `cancellationDate` against the queried year to ensure accurate reporting for donors who stop their subscriptions mid-year.

---

## 🧪 Local Testing & API Snippets

**Get all donation records:**
```bash
curl http://localhost:8080/api/donations
```

Add a one-time donation:
```bash
curl -X POST http://localhost:8080/api/donations \
-H "Content-Type: application/json" \
-d '{"type":"ONE_TIME","amount":500.00,"creationDate":"2024-01-15T00:00:00"}'
```

Get total donations for a year:
```bash
curl http://localhost:8080/api/donations/total?year=2024
```

