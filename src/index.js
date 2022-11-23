import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import AuthProvider from './contexts/AuthProvider'
import 'react-datepicker/dist/react-datepicker.css'
import { Toaster } from 'react-hot-toast'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AuthProvider>
    <Toaster />
    <ToastContainer
    position="top-center"
    />
    <App />
  </AuthProvider>
)
