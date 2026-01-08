import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {excludedNavIds, NAV_ITEMS} from "@/modules/navbar/constants/nav-items";

const NavMenuOverlay = () => {
    return (
        <div className='fixed inset-0 bg-black z-30 mix-blend-normal isolate'>
            <div className='flex h-full flex-1 items-center justify-center'>
                <ul className='space-y-4'>
                    {
                        NAV_ITEMS.filter(item => !excludedNavIds.includes(item.id))
                            .map(({id, label, href})=>(
                            <li key={id}>
                                <Link href={href} className='space-x-1 nav_desktop_link'>
                                    {/*<sup className='text-2xs'>{id}</sup>*/}
                                    <span className='text-3xl lg:text-5xl'>{label}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default NavMenuOverlay;