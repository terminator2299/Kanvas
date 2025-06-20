import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(
          data.message ||
            (data.errors && data.errors[0].msg) ||
            "Registration failed"
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
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-10 rounded-xl shadow-lg w-full max-w-xs sm:max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Register</h2>
        {error && <div className="text-red-500 mb-2 text-center">{error}</div>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 sm:mb-4 p-2 sm:p-3 border rounded text-base sm:text-lg"
          required
        />
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
          className="w-full bg-green-500 text-white py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-600 transition-colors"
        >
          Register
        </button>
        <div className="mt-3 sm:mt-4 text-sm sm:text-base text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 font-semibold">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
