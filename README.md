# Utsav Cleaners – Full Stack Web Application

A modern, high-converting full-stack website and doorstep laundry booking system for **Utsav Cleaners**, built according to the custom design theme (`#0F6E56` accent teal on white & soft section backgrounds).

---

## Features

- **Home Page (`/`)**: Hero section, service highlights, 4-step process preview, why choose us pillars, verified customer testimonials, and CTA banner.
- **Services & Pricing (`/services`)**: Interactive **Instant Price Estimator** calculator, category filters (Dry Cleaning, Saree Care, Wash & Fold, Steam Pressing, Shoe Care, Curtains), and commercial bulk quotes.
- **About Us (`/about`)**: Store history, eco-friendly solvent pledge (100% organic, zero PERC), facility statistics, and quality guarantees.
- **How It Works (`/how-it-works`)**: 4-step doorstep pickup breakdown, turnaround time matrix by garment category, and interactive FAQ accordion.
- **Book a Pickup (`/book`)**: Multi-step interactive booking form with date picker, time slot selector (Morning, Afternoon, Evening), garment notes, instant UI confirmation modal, and direct WhatsApp notification link.
- **Contact Us (`/contact`)**: Store contact info, phone click-to-call, embedded Google Map, store hours, and contact form.
- **Admin Management Dashboard (`/admin`)**:
  - Protected with JWT authentication (`/admin/login`).
  - Key metrics summary cards (Total Bookings, Pending, Picked Up, In Processing, Delivered).
  - Filterable table with search by customer name, phone number, or booking reference ID.
  - Quick status dropdown actions (Pending → Picked up → In Process → Delivered → Cancelled).
  - Customer contact messages viewer.

---

## Color Palette & Design System

| Token | Hex | Usage |
|---|---|---|
| Base Background | `#FFFFFF` | Main page background |
| Section Background | `#F7F7F5` | Alternate section cards & panels |
| Accent Primary | `#0F6E56` | Primary buttons, links, active badges |
| Text Primary | `#2C2C2A` | Headings & titles |
| Text Secondary | `#5F5E5A` | Body copy |
| Text Muted | `#888780` | Labels, placeholders, subtext |
| Border | `#E5E4DE` | Card borders, dividers |

---

## Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Default Admin Credentials
- **Login URL**: `http://localhost:3000/admin/login`
- **Username**: `admin`
- **Password**: `utsav123`

---

## Zero-Config Persistence Fallback
The application is pre-configured with a dual storage engine:
- If `MONGODB_URI` is present in `.env.local`, it connects to your MongoDB Atlas database.
- If no MongoDB URI is provided, it seamlessly uses an embedded file storage adapter (`data/db.json`), allowing full creation, status updates, and messaging to work instantly out-of-the-box!

---

## Deployment Instructions

### Deploy to Vercel (Recommended for Frontend + API)
1. Push code repository to GitHub.
2. Import project into [Vercel](https://vercel.com).
3. Set environment variables in Vercel project settings:
   - `JWT_SECRET`: `your_random_secret_key`
   - `ADMIN_USER`: `admin`
   - `ADMIN_PASS`: `your_secure_password`
   - `MONGODB_URI`: `mongodb+srv://...` (optional)
4. Click **Deploy**.

---

## License
© Utsav Cleaners. All rights reserved.
