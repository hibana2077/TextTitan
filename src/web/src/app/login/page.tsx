'use client';

import React, { useState } from 'react';
import { User, Lock, LogIn } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 處理登入邏輯
    console.log('Login attempt', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dodger-blue-900 to-dodger-blue-950 flex items-center justify-center p-4">
      <div className="bg-dodger-blue-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-dodger-blue-100 mb-6 text-center">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-dodger-blue-200 mb-2 text-sm font-medium">
              Email Address
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dodger-blue-400" size={18} />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-dodger-blue-700 text-dodger-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-dodger-blue-500"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-dodger-blue-200 mb-2 text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dodger-blue-400" size={18} />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-dodger-blue-700 text-dodger-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-dodger-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-dodger-blue-500 focus:ring-dodger-blue-400 border-dodger-blue-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-dodger-blue-200">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-dodger-blue-300 hover:text-dodger-blue-200">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-dodger-blue-500 hover:bg-dodger-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dodger-blue-500 transition duration-150 ease-in-out"
            >
              <LogIn className="mr-2" size={18} />
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-dodger-blue-300">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-dodger-blue-200 hover:text-dodger-blue-100">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;