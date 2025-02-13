"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar: React.FC = () => {
    const pathname = usePathname();

    return (
        <header className="bg-green-900 text-black p-4 h-20 md:h-[15vh]">
            <div className="container mx-auto flex justify-between items-center px-4 h-full">
                <Link href="/">
                    <h1 className="text-2xl md:text-[5rem] font-medium tracking-[-0.1em]">
                        Luis Delotavo
                    </h1>
                </Link>
                <nav className="flex space-x-4 md:space-x-8 text-2xl md:text-5xl">
                    <Link
                        href="/experiences"
                        className={`tracking-[-0.1em] hover:underline hover:text-white transition-colors ${
                            pathname === '/experiences' ? 'text-white' : ''
                        }`}
                    >
                        experiences
                    </Link>
                    <Link
                        href="/projects"
                        className={`tracking-[-0.1em] hover:underline hover:text-white transition-colors ${
                            pathname === '/projects' ? 'text-white' : ''
                        }`}
                    >
                        projects
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
