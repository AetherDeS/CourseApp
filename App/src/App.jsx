import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';


function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><HomePage /></Layout>,
  },
  {
    path: "/login",
    element: <Layout><LoginPage /></Layout>,
  },
  {
    path: "/signup",
    element: <Layout><SignUpPage /></Layout>,
  },
  {
    path: "/*",
    element: <Layout><NotFoundPage /></Layout>,
  },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;