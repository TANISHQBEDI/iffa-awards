import React from 'react';
import Link from "next/link";
import {NAV_ITEMS} from "@/modules/root/constants/nav-items";

const Header = () => {
    return (
        <nav className='h-[var(--header-height)] mix-blend-difference fixed w-full'>
            <div className='flex items-center justify-between h-full mx-1 lg:mx-10'>
                <div className=''>
                    <span className='text-3xl font-extrabold'>IFFA Awards</span>
                </div>
                <div className='flex flex-row gap-24'>
                    <div className='space-x-20 hidden lg:flex'>
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
                    <div>
                        <Link href='/contact' className='uppercase'>
                            <span>Contact</span>
                        </Link>

                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Header;