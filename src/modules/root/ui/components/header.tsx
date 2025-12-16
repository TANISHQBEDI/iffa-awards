'use client'
import React, {useRef} from 'react';
import Link from "next/link";
import {NAV_ITEMS} from "@/modules/root/constants/nav-items";


import { gsap } from '@/lib/gsap'
import useIsomorphicLayoutEffect from "@/lib/gsap/custom-effect";

const Header = () => {
    const navRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        if (!navRef.current) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add('(min-width: 1024px)', () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: navRef.current,  // ok if you want header-based range
                        start: 'top top',
                        end: 'bottom 4rem',
                        scrub: 1,
                    },
                });

                // Use scoped selectors (descendants of navRef)
                tl.to('.nav-items', { y: -100, duration: 0.6, ease: 'none' }, 0);
                tl.to('#contact-btn', { x: -100, duration: 0.6, ease: 'none' }, 0);

                return () => tl.kill();
            });

            return () => mm.revert();
        }, navRef); // <-- scope here (critical)

        return () => ctx.revert();
    }, []);


    return (
        <nav ref={navRef} className='h-[var(--header-height)] mix-blend-difference fixed w-full'>
            <div className='flex items-center justify-between h-full mx-1 lg:mx-10'>
                <div className=''>
                    <span className='text-3xl font-extrabold'>IFFA Awards</span>
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