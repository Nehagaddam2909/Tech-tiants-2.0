import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="flex items-center justify-center w-1/2 bg-blue-500">
                <div className="text-white text-center">
                    <h1 className="text-4xl font-bold">Welcome!</h1>
                    <p className="mt-4">Made for Teachers | By Students </p>
                    <div className="mt-8 space-x-3 ">
                        <a href="#" className="text-white">Read Guidlines </a>
                        <a href="#" className="text-white">Create an account</a>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center justify-center w-1/2 bg-white">
                <div className="w-3/4 px-8 py-6 space-y-10">
                    <h2 className="text-4xl   text-blue-500 text-center font-bold mb-4">Login</h2>
                    <div className="mb-6 space-y-2">
                        <label htmlFor="name" className="text-gray-800 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="w-full border-b border-blue-500 bg-transparent text-gray-800"
                        />
                    </div>
                    <div className="mb-6 space-y-2">
                        <label htmlFor="password" className="text-gray-800 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full border-b border-blue-500 bg-transparent text-gray-800"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
                        <Link to='/Teacher/Signup/' className="bg-white text-blue-500 py-2 px-4 rounded">Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
