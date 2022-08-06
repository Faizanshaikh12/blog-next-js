import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <Link href='/'>
                <span className="font-bold text-primary cursor-pointer">FAIZAN SHAIKH</span>
            </Link>
            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <Link href='/'>Products</Link>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <Link href='/'>Portfolio</Link>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <Link href='/'>docs</Link>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <Link href='/'>About</Link>
                </li>
            </ul>
            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <Link href='/'><div className="hover:text-gray-400 cursor-pointer">Login</div></Link>
                </li>
                <li className="font-medium text-gray-600">
                    <Link href='/'><div className="bg-primary cursor-pointer py-2 px-4 rounded-sm text-white hover:bg-primary-dark">Sign up</div></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;