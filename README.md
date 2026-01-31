# My Assignment – React Mini Apps

A modular **React + Vite** application demonstrating multiple commonly used UI patterns and logic implementations such as Todo management, form validation, countdown timer, search filtering, and progress indicators.

---

## 🚀 Tech Stack

* **React 18**
* **Vite** (fast development build tool)
* **JavaScript (ES6+)**
* **Tailwind CSS / Utility-first styling**
* **LocalStorage API**

---

## 📂 Project Structure

```
my-assignment/
├── src/
│   ├── components/
│   │   ├── Todo/
│   │   │   ├── TodoApp.jsx
│   │   │   ├── TodoItem.jsx
│   │   │   └── TodoFilter.jsx
│   │   ├── Forms/
│   │   │   └── UserForm.jsx
│   │   ├── Timer/
│   │   │   └── CountdownTimer.jsx
│   │   ├── Search/
│   │   │   └── SearchList.jsx
│   │   └── Progress/
│   │       └── MultiProgressBar.jsx
│   ├── utils/
│   │   └── helper.js
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

---

## ✨ Features

### 📝 Todo App

* Add and delete tasks
* Priority levels (Low / Medium / High)
* Mark tasks as completed
* Filter tasks (All / Active / Completed)
* Clean empty-state handling

### 👤 User Form

* Controlled inputs
* Email validation
* Password show / hide toggle
* Inline error messages
* Submitted data preview

### ⏱ Countdown Timer

* Start / Pause / Resume / Reset
* Persistent timer using LocalStorage
* Status handling (idle, running, paused, completed)

### 🔍 Search List

* Real-time filtering
* Case-insensitive search
* Result count display

### 📊 Multi Progress Bar

* Multiple progress indicators
* Dynamic progress rendering

---

## 🧠 Architecture Decisions

* **Component-based structure** for reusability and clarity
* **Utility helpers** (`utils/helper.js`) to avoid duplication
* **LocalStorage abstraction** for persistence
* **Controlled components** for predictable form behavior
* **Separation of concerns** between UI, logic, and helpers

---

## 🔁 Error Handling & Edge Cases

* Form validation before submission
* Prevent invalid email input
* Graceful empty states (e.g., no todos found)
* Safe LocalStorage access with fallbacks

---


## ▶️ How to Run Locally

npm install
npm install lucide-react
npm install tailwindcss


---

## ▶️ How to Run Locally

npm run dev

---

# Run as Localhost

Link: http://localhost:5173

---

## Deploy Link:

Link: https://anilvasundharaatask.vercel.app

---

## 🙌 Author

**Anil Kumar**



