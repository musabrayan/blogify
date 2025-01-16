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
            className='inline-block px-6 py-2 duration-200 hover:bg-accentGreen hover:text-red-400 rounded-full text-text'
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;