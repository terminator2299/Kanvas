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
        navigate("/");
      }
    } catch (err) {
      setError("Network error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-2 sm:px-0">
      <h1
        className="text-4xl sm:text-6xl font-extrabold mb-8 sm:mb-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center drop-shadow-lg"
        style={{ fontFamily: 'Inter, Nunito, ui-sans-serif, system-ui, sans-serif' }}
      >
        Planify
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-10 rounded-xl shadow-lg w-full max-w-xs sm:max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <div className="text-red-500 mb-2 text-center">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 sm:mb-4 p-2 sm:p-3 border rounded text-base sm:text-lg"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 sm:mb-4 p-2 sm:p-3 border rounded text-base sm:text-lg"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
        <div className="mt-3 sm:mt-4 text-sm sm:text-base text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 font-semibold">
            Register
          </a>
        </div>
        <p className="text-xs sm:text-sm text-gray-400 mt-4 text-center">
          We'll never share your credentials with anyone.
        </p>
      </form>
    </div>
  );
};

export default Login;
