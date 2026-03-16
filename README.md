# Imagify AI - Text-to-Image Generation Platform

**Imagify AI** is a professional, full-stack web application that allows users to transform their imagination into stunning visuals using advanced AI. Built with a modern tech stack, it features a secure credit-based system, seamless payment integration, and a beautiful, interactive user interface.

![Project Preview](C:\Users\jaisw\.gemini\antigravity\brain\fcbaf3b3-a61e-4117-bee7-56d278b1622f\media__1773669778892.png)

## 🚀 Key Features

- **AI Image Generation**: Convert detailed text prompts into high-quality images instantly.
- **Credit-Based System**: Users consume credits to generate images, adding a professional monetization layer.
- **Razorpay Integration**: A fully functional payment gateway for purchasing credit plans.
- **Secure Authentication**: JWT-based login and signup system with protected routes.
- **User Dashboard**: Track remaining credits and manage profile details.
- **Premium Design**: Modern UI with glassmorphism effects, smooth animations (Framer Motion), and a fully responsive layout.
- **Real-time Feedback**: Interactive loaders and toast notifications for a smooth user experience.

## 🛠️ Tech Stack

### Frontend
- **React.js**: For a dynamic and component-based user interface.
- **Vite**: Ultra-fast build tool for modern web development.
- **Tailwind CSS**: For sleek, modern styling and responsive design.
- **Framer Motion**: For fluid, professional animations.
- **React Context API**: For efficient global state management.

### Backend
- **Node.js & Express.js**: For a robust and scalable server architecture.
- **MongoDB & Mongoose**: For flexible and persistent data storage.
- **JSON Web Token (JWT)**: For secure user authentication and authorization.
- **Axios**: For seamless communication between frontend and backend.
- **Razorpay SDK**: To handle secure financial transactions.

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-link>
cd imagify-ai
```

### 2. Backend Setup
- Navigate to the `server` directory.
- Install dependencies: `npm install`
- Create a `.env` file (refer to `.env.example`).
- Start the server: `npm start`

### 3. Frontend Setup
- Navigate to the `client` directory.
- Install dependencies: `npm install`
- Create a `.env` file (refer to `.env.example`).
- Start the development server: `npm run dev`

## 📁 Project Structure

```text
imagify-ai/
├── client/           # React Frontend (Vite)
│   ├── src/          # Components, Pages, Assets, Context
│   └── .env.example  # Frontend environment template
├── server/           # Node.js Backend (Express)
│   ├── controllers/  # Business logic
│   ├── models/       # Database schemas
│   ├── routes/       # API endpoints
│   └── .env.example  # Backend environment template
└── README.md         # Project documentation
```

## 🔒 Environment Variables

To run this project, you'll need following keys:

- **MongoDB URI**: Your database connection string.
- **JWT Secret**: A secure string for token signing.
- **ClipDrop API/Stability AI**: Your AI engine API key.
- **Razorpay Key ID & Secret**: For payment processing.

## 📄 License

This project is open-source and available for educational and commercial purposes.

---
*Created with ❤️ to bring your imagination to life.*
