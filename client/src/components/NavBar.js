import React, { useState } from "react";

export const NavBar = () => {
    const [menu, setMenu] = useState([
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

    return (
        <nav className="bg-teal-500 fixed top-0 w-full transition-all z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-12">
                    <div className="flex-shrink-0">
                        <span className="text-purple-600 font-bold text-xl">Logo</span>
                    </div>
                    <div className="md:hidden">
                        <button className="text-white hover:text-gray-200 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-4">
                            {menu.map((item, index) => (
                                <a key={index} href={item.link} className="text-purple-600 font-medium transition duration-500 hover:text-purple-500 hover:shadow-neon">{item.name}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
