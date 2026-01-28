import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import ThemeRouter from "./routes/ThemeRouter.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import AuthRoute from "./routes/AuthRoute.jsx";

import { AuthProvider, AuthContext } from "./context/AuthContext.jsx";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

// Theme Layout
function Layout({ children }) {
  const { theme, themes } = useContext(ThemeContext);
  return (
    <div className={`min-h-screen ${themes[theme]}`}>
      <ThemeRouter />
      {children}
    </div>
  );
}

// ✅ Wrapper to show Navbar/Footer only if logged in
function AppContent() {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && <Navbar />} {/* ✅ Navbar only when logged in */}

      <div className="pt-28">
        <Routes>

          {/* PUBLIC ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* USER ROUTES (LOGIN REQUIRED) */}
          <Route
            path="/"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <AuthRoute>
                <Cart />
              </AuthRoute>
            }
          />

          <Route
            path="/contact"
            element={
              <AuthRoute>
                <Contact />
              </AuthRoute>
            }
          />

         <Route path="/products" element={<Products />} />


        </Routes>
      </div>

      {user && <Footer />} {/* ✅ Footer only when logged in */}
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Layout>
              <AppContent />
            </Layout>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
