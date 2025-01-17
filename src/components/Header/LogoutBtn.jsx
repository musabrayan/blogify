import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
            navigate('/login'); // Redirect to login page after logout
        });
    };

    return (
        <button
            className='inline-block px-3 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base duration-200 hover:bg-accentGreen hover:text-red-400 rounded-full text-text w-full sm:w-auto'
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;