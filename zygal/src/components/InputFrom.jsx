import React, { useState } from 'react';

const InputForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailValid, setEmailValid] = useState(null);
    const [passwordValid, setPasswordValid] = useState(null);

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const validatePassword = (value) => {
        return value.length >= 6;
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailValid(validateEmail(value));
        console.log("emailflag",emailValid);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordValid(validatePassword(value));
    };
    
    const handleSubmit = ()=>{
        setEmail("");
        setPassword("");
        setEmailValid(null);
        setPasswordValid(null);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className={`mt-1 block w-full p-2 border rounded ${
                            emailValid === null ? '' : emailValid ? 'border-green-500' : 'border-red-500'
                        }`}
                    />
                    {emailValid === false && (
                        <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className={`mt-1 block w-full p-2 border rounded ${
                            passwordValid === null ? '' : passwordValid ? 'border-green-500' : 'border-red-500'
                        }`}
                    />
                    {passwordValid === false && (
                        <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters long.</p>
                    )}
                </div>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default InputForm;
