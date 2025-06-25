import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(
          data.message || (data.errors && data.errors[0].msg) || "Login failed"
        );
      } else {
        navigate("/board");
      }
    } catch (err) {
      setError("Network error");
    }
  };

  return (
    <div className="min-h-screen bg-violet-200 dark:bg-gradient-to-br dark:from-[#0a0c10] dark:via-[#141926] dark:to-[#1f2a38] transition-colors duration-500">
      {/* Logo in top right */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="8" width="40" height="32" rx="8" fill="url(#calendar-gradient)" />
          <rect x="4" y="16" width="40" height="24" rx="6" fill="#fff" fillOpacity="0.9" />
          <rect x="12" y="24" width="8" height="8" rx="2" fill="#6366F1" />
          <rect x="28" y="24" width="8" height="8" rx="2" fill="#a78bfa" />
          <rect x="12" y="34" width="8" height="4" rx="2" fill="#6366F1" fillOpacity="0.7" />
          <rect x="28" y="34" width="8" height="4" rx="2" fill="#a78bfa" fillOpacity="0.7" />
          <rect x="14" y="10" width="4" height="8" rx="2" fill="#6366F1" />
          <rect x="30" y="10" width="4" height="8" rx="2" fill="#a78bfa" />
          <defs>
            <linearGradient id="calendar-gradient" x1="4" y1="8" x2="44" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1"/>
              <stop offset="1" stopColor="#A78BFA"/>
            </linearGradient>
          </defs>
        </svg>
        <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg tracking-wide" style={{ fontFamily: 'Inter, Nunito, ui-sans-serif, system-ui, sans-serif' }}>Planify</span>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Welcome Back!</h2>
            {error && (
              <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-3 rounded-lg text-center text-sm">
                {error}
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Sign In
            </button>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <a href="/register" className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
