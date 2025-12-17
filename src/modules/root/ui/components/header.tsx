'use client'
import React, {useRef} from 'react';
import Link from "next/link";
import {NAV_ITEMS} from "@/modules/root/constants/nav-items";

const Header = () => {
    const navRef = useRef<HTMLDivElement>(null);

    return (
        <nav ref={navRef} className='h-[var(--header-height)] z-50 mix-blend-difference fixed w-full'>
            <div className='mx-auto grid h-full py-4 gap-8 w-full grid-cols-[repeat(12,minmax(0,1fr))] items-center px-8'>


                <Link href='/' className='col-span-2 h-full items-center flex text-3xl font-semibold'>
                    <span className='w-full'>
                        IFFA
                    </span>

                </Link>
                <div id='nav_desktop_cont' className='col-start-5 col-span-8 h-full w-full flex justify-start justify-self-end box-border'>
                    <div id='nav_desktop_right' className='flex justify-between w-full items-center'>
                        <ul id='nav_desktop_links_wrap' className='flex gap-16'>
                            {
                                NAV_ITEMS.map(({id, label, href})=>(
                                    <li key={id}>
                                        <Link href={href} className='space-x-1 nav_desktop_link'>
                                            <sup className='text-2xs'>{id}</sup>
                                            <span className='text-sm'>{label}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div id='nav_desktop_right_btns' className='flex justify-start items-center'>
                            <div id='btn-group' className='w-[86px]'>
                                <Link href='/contact' className='flex items-center relative'>
                                    <div className='h-4 w-4 absolute '>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%"
                                             className="btn-bubble-arrow__arrow-svg">
                                            <polyline points="18 8 18 18 8 18" fill="none" stroke="currentColor"
                                                      strokeMiterlimit="10" strokeWidth="1.5"></polyline>
                                            <line x1="18" y1="18" x2="5" y2="5" fill="none" stroke="currentColor"
                                                  strokeMiterlimit="10" strokeWidth="1.5"></line>
                                        </svg>
                                    </div>
                                    <span className='uppercase text-sm pr-1 relative'>Contact</span>
                                    <div className='h-4 w-4 right-0 absolute items-center justify-center flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%"
                                             className="btn-bubble-arrow__arrow-svg">
                                            <polyline points="10 6 18 12 10 18" fill="none" stroke="currentColor"
                                                      strokeMiterlimit="10" strokeWidth="1.5"></polyline>
                                            <line x1="18" y1="12" x2="0" y2="12" fill="none" stroke="currentColor"
                                                  strokeMiterlimit="10" strokeWidth="1.5"></line>
                                        </svg>
                                    </div>

                                </Link>
                            </div>
                            <div id='nav_menu_toggle_container' className='flex justify-start w-20'>
                                <div id='nav_menu_btn_spacer' className='w-8'/>
                                <div id='nav_menu_toggle_wrapper' className='w-12 h-12 flex justify-center items-center'>
                                    <button id='nav_menu_toggle' className='h-full'>
                                        <div id='nav_menu_line_wrapper' className='px-[3px] py-[8px] gap-1 flex-col flex justify-center'>
                                            <div id='nav_menu_line_top' className='bg-white h-[2px] w-[18px]'/>
                                            <div id='nav_menu_line_bottom' className='bg-white h-[2px] w-[12px]'/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Header;