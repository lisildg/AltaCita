import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const [menu] = useState([
        {
            name: "About Us",
            link: "/about"
        },
        {
            name: "Login",
            link: "/login"
        },
        {
            name: "Sign up",
            link: "/sign-up"
        },
    ]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-teal-500 fixed top-0 w-full transition-all z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-12">
                    <Link to="/" className="flex-shrink-0">
                        <span className="text-purple-600 font-bold text-xl agbalumo-regular hover:text-purple-500">Alta Cita</span>
                    </Link>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-purple-600 hover:text-purple-400 focus:outline-none ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className={`absolute md:relative md:flex md:items-center md:space-x-4 bg-teal-500 md:bg-transparent md:w-auto md:h-auto md:shadow-none md:flex-row md:space-x-4 md:divide-y-0 divide-y divide-gray-300 md:divide-y-0 divide-y-0 ${isMenuOpen ? 'block' : 'hidden'} md:block w-full left-0 right-0 md:right-auto md:left-auto top-12 md:top-0 md:space-y-0 md:flex-row md:space-y-0 flex-col space-y-4`}>
                        {menu.map((item, index) => (
                            <Link key={index} to={item.link} className="block md:inline-block text-purple-600 font-medium transition duration-500 hover:text-purple-500  md:py-2 ml-4">{item.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
