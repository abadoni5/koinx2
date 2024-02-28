import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-white p-4 mb-4">
            {/* Logo */}
            <div className="flex items-center">
                <img className="h-5 ml-6" src="logo.png" alt="Logo" />
            </div>

            {/* Navigation Links and Button */}
            <div className="flex items-center">
                {/* Navigation Links */}
                <div className="hidden md:flex">
                    <a href="/" className="text-black mr-8 font-medium hover:text-gray-300">Crypto Taxes</a>
                    <a href="/about" className="text-black font-medium mr-8 hover:text-gray-300">Free Tools</a>
                    <a href="/contact" className="text-black mr-12 font-medium hover:text-gray-300">Resource Center</a>
                </div>

                {/* Get Started Button */}
                <button className="bg-blue-700 rounded-xl mr-6 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded focus:outline-none focus:shadow-outline">Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;
