import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between bg-white p-4 mb-4">
            {/* Logo */}
            <div className="flex items-center">
                <img className="h-5 ml-6" src="logo.svg" alt="Logo" />
            </div>

            {/* Navigation Links for Normal Mode */}
            <div className="hidden md:flex items-center">
                <div>
                    <a href="/" className="text-black mr-8 font-medium hover:text-gray-300">Crypto Taxes</a>
                    <a href="/" className="text-black font-medium mr-8 hover:text-gray-300">Free Tools</a>
                    <a href="/" className="text-black mr-12 font-medium hover:text-gray-300">Resource Center</a>
                </div>
                <div>
                    <button className="hidden md:block bg-blue-700 rounded-xl mr-6 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded focus:outline-none focus:shadow-outline">Get Started</button>
                </div>
            </div>


            {/* Mobile Menu Icon for Small Screens */}
            <div className="md:hidden">
                <a href="/">
                    <FontAwesomeIcon icon={faBars} className="text-black cursor-pointer" onClick={toggleMobileMenu} />
                </a>
            </div>

            {/* Navigation Links for Small Screens */}
            <div className={`hidden md:hidden ${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col items-center mt-4`}>
                <a href="/" className="text-black mb-2 font-medium hover:text-gray-300">Crypto Taxes</a>
                <a href="/" className="text-black mb-2 font-medium hover:text-gray-300">Free Tools</a>
                <a href="/" className="text-black mb-2 font-medium hover:text-gray-300">Resource Center</a>
                <button className="bg-blue-700 rounded-xl hover:bg-blue-600 text-white font-medium py-2 px-6 rounded focus:outline-none focus:shadow-outline mt-4">Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;
