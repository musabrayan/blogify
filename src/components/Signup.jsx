import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit, getValues } = useForm();

    const create = async (data) => {
        setError("");
        
        // Check if passwords match
        if (data.password !== data.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const currentUser = await authService.getCurrentUser();
                if (currentUser) dispatch(login(currentUser));
                navigate('/');
            }
        } catch (err) {
            // Check for specific Appwrite error codes
            if (err.code === 409) { // Appwrite's code for conflict/duplicate
                setError("Account with this email already exists");
            } else if (err.code === 400) { // Bad request
                setError("Invalid email or password format");
            } else {
                setError(err.message || "Failed to create account");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg text-text">
            <div className="w-full max-w-md p-8 space-y-8 bg-secondaryBg rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                    <Logo width="100px" />
                </div>
                <form onSubmit={handleSubmit(create)} className="space-y-6">
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters"
                            }
                        })}
                    />
                    <Input
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm your password"
                        {...register("confirmPassword", {
                            required: true,
                            validate: value => value === getValues("password") || "Passwords do not match"
                        })}
                    />
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <Button
                        type="submit"
                        className="w-full"
                        bgColor="bg-accent-color-green"
                        textColor="text-white"
                        hoverBgColor="hover:bg-accent-color-brown"
                        hoverTextColor="hover:text-black"
                    >
                        Sign Up
                    </Button>
                </form>
                <div className="text-center">
                    <p>
                        Already have an account? <Link to="/login" className="text-accent-color-green hover:text-accent-color-brown">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;