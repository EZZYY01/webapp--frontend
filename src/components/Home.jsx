import React from 'react';
import logo from '../assets/images/logo.png';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="flex justify-between items-center px-6 py-4 bg-white">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="SoundSage Logo" className="h-12 w-15" />
                    <span className="text-2xl font-bold">SoundSage</span>
                </div>
                <div className="flex gap-4 mr-20">
                    <button className="text-gray-600 hover:text-gray-800">
                        Log in
                    </button>
                    <button className="text-blue-500 hover:bg-blue-50 px-3 py-1 rounded-md transition-colors">
                        Sign up
                    </button>
                </div>
            </header>
            <main className="container mx-auto px-6 py-8">
                {/* Your content goes here */}
            </main>
        </div>
    );
};

export default Home;