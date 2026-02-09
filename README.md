# 🏠 LocalLockTT

**Property Management Software Built for Trinidad & Tobago Landlords**

LocalLockTT is a modern, cloud-based property management platform designed specifically for the Trinidad and Tobago market. It helps landlords automate rent tracking, send payment reminders, manage tenants, and stay organized—all in one place.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green)](https://supabase.com/)

---

## ✨ Features

### **MVP (Version 1.0)**

#### 🏘️ Property Management

- Add, edit, and delete rental properties
- Support for apartments, houses, commercial properties
- Track property details and monthly rent amounts
- Filter and search across your portfolio

#### 👥 Tenant Management

- Complete tenant profiles with contact information
- Lease tracking (start date, end date, rent amount)
- Security deposit recording
- Upload and store lease documents (PDF)
- WhatsApp number support for easy communication

#### 💰 Rent Payment Tracking

- Record rent payments with date and payment method
- Automatic PDF receipt generation
- Email receipts to tenants
- Payment history per tenant
- Outstanding rent dashboard
- Monthly and annual income reports

#### ⏰ Automated Reminders

- 5 days before rent due: Upcoming payment reminder
- On due date: Payment due notification
- 3 days overdue: Overdue payment notice
- 30 days before lease expires: Renewal alert
- Multi-channel delivery: Email, SMS, WhatsApp

#### 🔧 Maintenance Management

- Tenants can submit maintenance requests
- Photo upload support for issue documentation
- Track request status (Open → In Progress → Completed)
- Priority levels (Low, Medium, High)
- Cost tracking for repairs
- Complete maintenance history

#### 📊 Dashboard & Reporting

- Portfolio overview at a glance
- Outstanding rent summary
- Upcoming lease expirations
- Monthly income by property
- Annual tax reports
- Occupancy tracking

---

## 🛠️ Tech Stack

### **Frontend**

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI Library:** React 19
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Forms:** React Hook Form + Zod

### **Backend**

- **API:** Next.js API Routes + Server Actions
- **Database:** PostgreSQL (via Supabase)
- **ORM:** Prisma (optional) or Supabase Client
- **Authentication:** Clerk

### **Infrastructure**

- **Hosting:** Vercel
- **Database:** Supabase
- **File Storage:** DigitalOcean Spaces / AWS S3
- **Email:** Resend
- **SMS/WhatsApp:** Twilio
- **Scheduled Jobs:** Vercel Cron

### **Developer Tools**

- **Package Manager:** pnpm
- **Linting:** ESLint
- **Formatting:** Prettier
- **Version Control:** Git

---

## 🗺️ Roadmap

### **Version 1.0 (MVP)** ✅

- [x] Property management (CRUD)
- [x] Tenant management with lease tracking
- [x] Manual rent payment recording
- [x] Automated rent reminders (email/SMS/WhatsApp)
- [x] Maintenance request tracking
- [x] Dashboard and basic reporting
- [x] Receipt generation and delivery

### **Version 2.0** (Planned)

- [ ] Online payment processing (Stripe/WiPay integration)
- [ ] Tenant portal for self-service
- [ ] Advanced financial reports and analytics
- [ ] Expense tracking and categorization
- [ ] Multi-unit building support (units table)
- [ ] Recurring expense management
- [ ] Mobile-responsive improvements

### **Version 3.0** (Future)

- [ ] Native mobile apps (iOS/Android)
- [ ] Accounting software integration (QuickBooks, Xero)
- [ ] Tenant screening and background checks
- [ ] Vacancy advertising
- [ ] Contractor management
- [ ] Move-in/move-out inspection checklists
- [ ] Utility bill management

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💡 Why LocalLockTT?

LocalLockTT was born from conversations with Trinidad & Tobago landlords who were managing properties using Excel spreadsheets, notebooks, and WhatsApp messages. The platform is purpose-built for the local market with:

- **TTD pricing** - 60-70% cheaper than international competitors
- **WhatsApp integration** - The primary communication channel in TT
- **Local payment methods** - Support for Trinidad bank transfers and local gateways
- **TT-specific features** - Understanding of local landlord-tenant law and tax requirements
- **Same timezone support** - No waiting for overseas support teams

---
