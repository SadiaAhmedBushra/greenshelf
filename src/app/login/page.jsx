'use client';

import React, { useState } from 'react';
import Cookies from 'js-cookie';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'user@example.com' && password === 'password123') {
      localStorage.setItem('user', JSON.stringify({
        name: 'John Doe',
        image: 'https://i.pravatar.cc/40',
      }));

      Cookies.set('auth', 'true', { expires: 1 });

      window.location.href = '/products';
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 mt-20 bg-base-200 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="btn btn-primary w-full">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
