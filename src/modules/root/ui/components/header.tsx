'use client'
import React, {useRef} from 'react';


const Header = () => {
    const navRef = useRef<HTMLDivElement>(null);

    return (
        <nav ref={navRef} className='h-[var(--header-height)] mix-blend-difference fixed w-full'>

        </nav>
    );
};

export default Header;