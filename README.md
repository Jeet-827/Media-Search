# Media-Search
 A modern **Media Search Application** that allows users to search **Photos, and Videos** from popular media APIs. Built with **React**, **Redux Toolkit**, **React Router**, and **Tailwind CSS**, this app provides a fast, responsive, and user-friendly experience with persistent data using **LocalStorage**.


## 🚀 Features

- 🔍 Search **Photos** using **Pexels API**
- 🎞️ Search **Videos** using **Pexels API**

- ⚡ Fast and responsive UI with **Tailwind CSS**
- 🧠 Global state management using **Redux Toolkit**
- 🔁 Client-side routing using **React Router DOM**
- 💾 Save favorite media using **LocalStorage**
- ❌ Remove saved items anytime
- 📱 Fully responsive design (Mobile / Tablet / Desktop)

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **Redux Toolkit**
- **React Redux**
- **React Router DOM**
- **Tailwind CSS**

### API & Data Handling
- **Axios** (for API requests)
- **Pexels API** (Photos & Videos)


### Storage
- **LocalStorage** (Save & manage favorite media)

---

## 📦 NPM Packages Used

```bash
react
react-dom
react-router-dom
@reduxjs/toolkit
react-redux
axios
tailwindcss
postcss
autoprefixer
```

---

## 🔑 API Integration

### Pexels API
Used for searching **Photos** and **Videos**.

- Website: https://www.pexels.com/api/
- Requires API Key


---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_PEXELS_API_KEY=your_pexels_api_key
VITE_TENOR_API_KEY=your_tenor_api_key
```

---

## 📁 Project Structure

```
src/
│── api/              # API configurations (Pexels & Tenor)
│── components/       # Reusable UI components
│── pages/            # Page components (Photos, Videos,  Saved)
│── redux/            # Redux store & slices
│── utils/            # LocalStorage helper functions
│── App.jsx
│── main.jsx
│── index.css
```

---

## 💾 LocalStorage Usage

- Save favorite Photos,  and Videos
- Persist data even after page reload
- Remove saved items anytime

---

## ▶️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/media-search-app.git
cd media-search-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm run dev
```

---

## 🌟 Future Enhancements

- 🔐 User Authentication
- ☁️ Cloud database integration
- 🎨 Dark / Light theme toggle
- 📥 Download media feature
- 🔎 Advanced search filters

---

## 📸 Screenshots

_Add screenshots of your application here_

---

## 👨‍💻 Author

**Jeet Ranpariya**  
Frontend / MERN Stack Developer

- 💼 Portfolio: _Add your portfolio link_
- 🔗 GitHub: _Add your GitHub link_
- 🔗 LinkedIn: _Add your LinkedIn link_

---

## 📄 License

This project is licensed under the **MIT License**.

---

⭐ If you like this project, don’t forget to **star** the repository!

