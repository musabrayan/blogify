import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate('/');
            }
        } catch (err) {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg text-text">
            <div className="w-full max-w-md p-8 space-y-5 bg-secondaryBg rounded-lg shadow-lg">
                <div className="flex justify-center w-15">
                    <Logo width='130px'/>
                </div>
                <form onSubmit={handleSubmit(login)} className="space-y-6">
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", { required: true })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <Button
                        type="submit"
                        className="w-full"
                        bgColor="bg-accent-color-green"
                        textColor="text-white"
                        hoverBgColor="hover:bg-accent-color-brown"
                        hoverTextColor="hover:text-white"
                    >
                        Login
                    </Button>
                </form>
                <div className="text-center">
                    <p>
                        Don't have an account? <Link to="/signup" className="text-accent-color-green hover:text-accent-color-brown">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;