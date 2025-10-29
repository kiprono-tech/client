## 🪄 **`README.md` — BookingApp Frontend**

````markdown
# 🌐 BookingApp Frontend

![React](https://img.shields.io/badge/React-18.0.0-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?logo=axios&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

The **BookingApp Frontend** is a modern, responsive web interface built with **React.js**, enabling users to search, view, and book hotels seamlessly.  
It connects to a Node.js + Express backend to fetch live data, authenticate users, and manage reservations efficiently.

---

## 🚀 Features

- 🏨 **Hotel Search:** Find hotels by city, dates, and number of guests  
- 🔐 **Authentication:** Secure login and signup integration  
- 📅 **Dynamic Availability:** Real-time room data from backend  
- ⚡ **State Management:** Context API + useReducer  
- 💬 **API Integration:** Axios for backend communication  
- 🎨 **Responsive Design:** Works on mobile, tablet, and desktop  
- 🧭 **Routing:** React Router DOM for smooth navigation  

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js (CRA) |
| **Routing** | React Router DOM |
| **State Management** | Context API + useReducer |
| **HTTP Client** | Axios |
| **Styling** | CSS / Custom Components |
| **Environment** | `.env` for API endpoints |

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/bookingapp-frontend.git
cd bookingapp-frontend
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add:

```
REACT_APP_API_URL=http://localhost:8800/api
```

### 4️⃣ Start Development Server

```bash
npm start
```

Your app will be live at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🗂 Folder Structure

```
src/
│
├── components/        # Reusable UI components (Header, Navbar, Footer, etc.)
├── pages/             # Main pages (Home, List, Hotel, Reserve)
├── context/           # Context API for global state
├── hooks/             # Custom hooks (useFetch.js)
├── assets/            # Images, icons, and static files
└── App.js             # Root component
```

---

## 🧠 Key Highlights

* ⚛️ Component-based React architecture
* 🔄 Dynamic data rendering via Axios
* 🌍 Environment-based API configuration
* 🧭 Protected routes & user authentication
* 📱 Mobile-first design principles

---

## 🧑‍💻 Author

**Vincent Kiprono**
📧 [kiprono.tech@gmail.com](mailto:kiprono.tech@gmail.com)
💼 [LinkedIn](https://linkedin.com/in/vincentkiprono)

---

## 🛡️ License

This project is licensed under the **MIT License**.
You are free to modify, distribute, and use it for personal or commercial purposes.

---

## ⭐ Acknowledgments

* Built with ❤️ using React
* Inspired by modern hotel booking platforms
* Backend powered by Node.js, Express & MongoDB
* Special thanks to open-source contributors for tools & libraries

---
