'use client'
import React, {useRef} from 'react';
import Link from "next/link";
import {NAV_ITEMS} from "@/modules/root/constants/nav-items";


const Header = () => {
    const navRef = useRef<HTMLDivElement>(null);

    return (
        <nav ref={navRef} className='h-[var(--header-height)] mix-blend-difference fixed w-full'>
            <div className='flex items-center justify-between h-full mx-4 lg:mx-10'>
                <div className=''>
                    <span className='text-4xl font-extrabold'>IFFA</span>
                </div>
                <div className='flex flex-row gap-24'>
                    <div className='nav-items space-x-20 hidden lg:flex'>
                        {NAV_ITEMS.map((link) => (
                            <Link className='space-x-1' href={link.href} key={link.id}>
                                <sup>
                                    {link.id}
                                </sup>
                                <span>
                                    {link.label}
                                </span>
                            </Link>

                        ))}
                    </div>
                    <div id='contact-btn'>
                        <Link  href='/contact' className=' uppercase'>
                            <span>Contact</span>
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Header;