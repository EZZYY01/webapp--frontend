import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Left Section: Logo and Navigation Links */}
                <div className="flex items-center space-x-8">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="src/assets/images/wiseacademy.png"
                            alt="Logo"
                            className="h-20 w-20"
                        />
                        <span className="ml-2 text-lg font-semibold text-white">
                            Wise Academy
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6">
                        <a
                            href="#"
                            className="text-white font-medium dark:hover:text-blue-500 transition duration-300"
                        >
                            Categories
                        </a>
                        <a
                            href="#"
                            className="text-white font-medium dark:hover:text-blue-500 transition duration-300"
                        >
                            Bookmarks
                        </a>
                    </div>
                </div>

                {/* Center Section: Search Bar */}
                <div className="flex-grow flex justify-center items-center">
                    <div className="relative w-full max-w-lg">
                        <input
                            type="text"
                            className="bg-gray-100 rounded-lg pr-10 pl-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                        />
                        {/* Search Icon */}
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405a2.032 2.032 0 00-.576-.576L15 17z"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Right Section: Sign Up and Sign In */}
                <div className="flex items-center space-x-6">
                    {/* Sign Up Button */}
                    <a
                        href="#"
                        className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        Sign Up
                    </a>
                    {/* Sign In Button */}
                    <a
                        href="#"
                        className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        Sign In
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;