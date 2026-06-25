# 📚 Book Borrowing Platform

A modern online book borrowing platform built with Next.js, Better Auth, MongoDB, Tailwind CSS, and DaisyUI. The platform allows users to browse books, search and filter by category, view book details, authenticate securely, and manage their profile information.

---

## 🌐 Live Website

Live URL: https://book-borrowing-platform-ten.vercel.app

---

## 🎯 Project Purpose

The goal of this project is to digitize the traditional library experience by allowing users to explore a collection of books online and manage their account through secure authentication.

---

## ✨ Key Features

* 🔐 Email & Password Authentication using Better Auth
* 🔑 Google Login Authentication
* 📚 Browse all available books
* 🔍 Search books by title
* 🏷️ Filter books by category (Story, Tech, Science)
* 📖 View detailed information about each book
* 🔒 Private Routes for authenticated users
* 👤 User Profile Page
* ✏️ Update Profile Information (Name & Profile Image)
* 🎠 Featured Books Carousel using SwiperJS
* 📱 Fully Responsive Design for Mobile, Tablet, and Desktop
* ☁️ MongoDB Database Integration
* 🚀 Deployed on Vercel

---

## 🛠️ Technologies Used

* Next.js
* React
* Tailwind CSS
* DaisyUI
* Better Auth
* MongoDB
* SwiperJS

---

## 📦 NPM Packages Used

```bash
better-auth
mongodb
react-hook-form
react-hot-toast
swiper
lucide-react
tailwindcss
daisyui
```

## 📂 Project Structure

```bash
src
├── app
├── Components
├── data
├── lib
├── public
```

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_better_auth_secret

BETTER_AUTH_URL=your_website_url

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## ⚙️ Run Locally

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add the required environment variables.

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## 👨‍💻 Author

Developed as part of a Next.js assignment project.
