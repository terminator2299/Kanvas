import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onSuccess, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
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
        setError("");
        if (onSuccess) onSuccess();
        navigate("/board");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-0 rounded-none shadow-none space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Welcome Back!</h2>
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-center text-sm">
          {error}
        </div>
      )}
      <div className="space-y-4">
        <div>
          <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-900 transition-colors"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-900 transition-colors"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-60"
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <button type="button" onClick={onSwitch} className="font-medium text-blue-600 hover:text-blue-500 transition-colors underline">
            Register
          </button>
        </p>
      </div>
    </form>
  );
};

export default LoginForm; 