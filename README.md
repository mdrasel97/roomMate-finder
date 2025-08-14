# 🏠 Roommate Finder Website

A full-stack web platform that helps individuals find compatible roommates based on location, budget, lifestyle preferences, and interests. Users can create profiles, post roommate requests, browse listings, and connect through a secure interface with authentication and CRUD capabilities.

---

## 🚀 Screenshots

### Home Page

![Home Page](/src/assets/homepage.png)

### Featured Roommates Section

![Featured Roommates](/src/assets/Screenshot%20fetured.png)

---

## 🚀 Features

- 🔐 Email/Password + Google Authentication
- 🧑‍🤝‍🧑 Roommate Matching System with Listings
- 📍 Location & Lifestyle-based Filters
- 💬 Protected Routes & User-based Authorization
- 🎨 Light/Dark Theme Toggle
- ❤️ Like-based interest system
- 📞 Show Contact Info on Like
- ⚙️ CRUD functionality for roommate listings
- 🔥 Lottie, React Simple Typewriter, React Awesome Reveal,

---

## 🗂️ Project Structure

### 🔝 Layout Structure

- **Header/Navbar**

  - Home
  - Add to Find Roommate (🔒 Protected)
  - Browse Listing
  - My Listings (🔒 Protected)
  - Login / SignUp (conditionally rendered)
  - User profile photo + hover tooltip with display name + logout button when logged in

- **Main Section**

  - Dynamic routing for page content

- **Footer**
  - Contact Details
  - Terms & Conditions
  - Social Media Links

---

## 🏡 Home Page

- 🔁 **Banner/Slider** – Minimum 3 slides with meaningful content
- ⭐ **Featured Roommates Section** – Show 6 available roommate posts with a "See More" button to view details
- ➕ **Extra Sections** – Add 2 relevant, meaningful sections
- 🌓 **Dark/Light Mode Toggle**
- 🔄 Navbar and Footer are consistent across all pages except 404

---

## 🔐 Authentication

### Login Page

- Email & Password fields
- Google Login
- Redirect link to Register Page
- Toast/Sweet Alert for feedback

### Register Page

- Name, Email, photoURL, Password
- Google Login
- Password Rules:
  - At least 1 uppercase letter
  - At least 1 lowercase letter
  - Minimum length: 6 characters

⚠️ _No email verification or forgot password for the sake of simplicity._

---

## 🧑‍💻 Core Functionalities

### ➕ Add to Find Roommate (Protected)

- Fields:
  - Title, Location, Rent, Room Type, Lifestyle Preferences, Description, Contact Info, Availability
  - User Email & Name (Read-only)
- Submit stores data to DB
- Success feedback via toast/alert

### 📄 Details Page (Protected)

- Shows all roommate post info
- "Like" button:
  - Increases like count
  - Reveals contact info
- Text above: "`{likeCount} people interested in`"

### 📋 Browse Listings Page

- Table of all roommate posts
- "See More" for full post details (redirects to Details Page)

### 📑 My Listings (Protected)

- Displays logged-in user's posts only
- Table format
- Actions:
  - ✏️ Update (opens Update form or modal)
  - 🗑️ Delete (with confirmation)

### ✏️ Update Page (Protected)

- Pre-filled form (Email & Name are read-only)
- Submit updates DB and shows toast/sweet alert
- Optional: Modal-based editing

### 🗑️ Delete Functionality

- Confirmation before delete
- Deletes roommate post from DB

---

## ❓ Other Requirements

- ❌ 404 Page – Custom not found page
- ⏳ Loading Spinner – For async data fetch
- 🌟 Theme Toggle – Light and dark theme support

---

## 🔧 Technologies Used

- **Frontend**: React, TailwindCSS, React Router
- **Backend**: Express.js, MongoDB
- **Authentication**: Firebase Auth
- **State Management**: useState, useEffect, Context API
- **Libraries**:
  - `react-lottie`
  - `react-simple-typewriter`
  - `react-tooltip`
  - `react-toastify` or `sweetalert2` for alerts

---

## Live Link: https://simple-login-auth-9e384.firebaseapp.com/

## 📦 Setup Instructions

```bash
git clone https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-mdrasel97
cd roommate-finder
npm install
npm run dev
```
