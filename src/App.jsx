import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header, BlogifyLoading } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Show loading animation for 2-3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds duration for the loading animation

    // Authenticate user after the loading animation duration
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      });

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <BlogifyLoading />  
      ) : (
        <div className='min-h-screen flex flex-wrap content-between bg-bg text-text'>
          <div className='w-full block'>
            <Header />
            <main className="flex-grow">
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;