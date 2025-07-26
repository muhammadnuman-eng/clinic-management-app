# Clinic Management API & Frontend

A simple full-stack application to manage clinic clients and appointments using a **Ruby on Rails API** and a **React frontend**.

---

## 🚀 Stack Used

- **Backend**: Ruby on Rails (API-only mode)
  - Ruby 3.2.2
  - Rails 8.0.2
  - PostgreSQL 16
- **Frontend**: React (with Tailwind CSS, Axios)
  - Node.js v18.20.6
- **Auth**: Custom API Key-based header authentication

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/muhammadnuman-eng/clinic-management-app.git
cd clinic_api

Backend Setup (Rails API)

bundle install
cp .env.example .env
# Add your API key in the `.env` file
# Example:
# API_KEY=your-api-key-here

rails db:create
rails db:migrate
rails server

Frontend Setup (React)

cd clinic-frontend
npm install
cp .env.example .env
# Add the same API key:
# REACT_APP_API_KEY=your-api-key-here

npm start

📦 Configuration
API Key: Must be sent in headers as X-API-KEY

CORS: Ensure CORS is enabled in Rails for the frontend origin (http://localhost:3001)

✅ Assumptions Made
New appointments require either:

An existing client (client_id) or

A new client via client_attributes

Date/time for appointments should be future-dated

Basic validation and error messages are handled on both frontend and backend

⏳ Time Spent
~7 hours, including:

Backend API design

React setup and component structuring

API key integration and error handling

Basic Tailwind UI

Minimal code refactor (for maintainability)

🚧 Incomplete Items / Future Improvements
Add specs/tests (RSpec or system tests)

Add filters, pagination, or search on lists

Backend error serialization (standardize error responses)

Improve modal accessibility

Convert to TypeScript for frontend robustness

🌐 Deployment
No deployment link provided. Application tested locally only.

🐘 PostgreSQL Setup (Linux - Example

sudo service postgresql start

# Create user and database (if needed)
sudo -u postgres createuser -s your_db_user
sudo -u postgres createdb clinic_api_development

📁 Directory Structure
clinic_api/
├── app/
├── config/
├── clinic-frontend/
│   ├── src/
│   ├── .env.example
│   └── ...
├── .env.example
├── .gitignore
└── README.md

