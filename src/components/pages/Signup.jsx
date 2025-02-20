
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/api.js"; // Import API function

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            const response = await registerUser({
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            if (response.success) {
                alert("Signup successful! Redirecting to login...");
                navigate("/Login");
            } else {
                setError(response.message || "Signup failed.");
            }
        } catch (error) {
            setError("Signup failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="w-1/2 bg-white flex flex-col justify-center items-center">
                <div className="text-center">
                    <img src="src/assets/images/logo.png" alt="SoundSage Logo" className="h-45" />
                </div>
            </div>

            {/* Right Section */}
            <div className="w-1/2 bg-white flex flex-col justify-center px-16">
                <form className="w-3/4 max-w-md" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-black mb-4">Create Your Account</h2>
                    {error && <p className="text-red-500">{error}</p>}

                    {/* Input Fields */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-black mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-black mb-1">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        disabled={loading}
                    >
                        {loading ? "Signing up..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;