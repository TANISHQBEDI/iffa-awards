'use client'
import React, {useRef} from 'react';
import Link from "next/link";
import {NAV_ITEMS} from "@/modules/root/constants/nav-items";

import {DURATION, gsap} from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/lib/gsap/custom-effect";
import {setupGsapHover} from "@/lib/gsap/gsap-utils";

const Header = () => {
    const navRef = useRef<HTMLDivElement>(null);

    // Use gsap timeline for hover effects on contact button arrows

    useIsomorphicLayoutEffect(()=>{
        if(!navRef.current) return;
        const ctx = gsap.context((c)=>{
            const mm = gsap.matchMedia();
            mm.add('(min-width: 1024px)', ()=> {
                const scrollTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: navRef.current,
                        start: 'top top',
                        end: '+=1',
                        toggleActions: 'play none none reverse',
                    }
                })
                scrollTimeline
                    .to(c.selector?.('#nav_desktop_links_wrap'),{
                        y: -50,
                        duration: DURATION
                    })
                    .to(c.selector?.('#nav_desktop_right_btns'), {
                        xPercent: -50,
                        duration: DURATION
                    },'<')
                    .fromTo(c.selector?.('#nav_menu_line_wrapper'),
                        {
                            scale: 0,
                        },
                        {
                            transformOrigin: 'center center',
                            scale: 1,
                            duration: 0.1
                        }, '-=0.4')
            })

        }, navRef)
        return () => ctx.revert();

    }, [])

    return (
        <nav ref={navRef} className='h-[var(--header-height)] z-50 mix-blend-difference fixed w-full'>
            <div className='mx-auto grid h-full py-4 gap-[var(--site-gutter)] w-[calc(100%-var(--site-margin)*2)] grid-cols-12 auto-cols-fr'
                style={{
                    gridTemplateRows: 'auto'
                }}
            >
                <Link href='/' className='col-span-2 h-full items-center flex text-3xl font-semibold'>
                    <span className='w-full'>
                        IFFA
                    </span>

                </Link>
                <div id='nav_desktop_cont'
                     className='col-start-5 col-span-8 flex justify-start justify-self-end box-border items-center '
                >
                    <div id='nav_desktop_right' className='flex justify-end w-full items-center gap-4'>
                        <ul id='nav_desktop_links_wrap' className='lg:flex gap-16 hidden'>
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
                        <div id='nav_desktop_right_btns' className='flex justify-start items-center lg:translate-x-1/2'>
                            <div
                                id='btn-group'
                                className='w-[86px]'>
                                <Link href='/contact' className='flex items-center relative'>
                                    <span className='uppercase text-sm font-semibold pr-1 relative'>Contact</span>
                                </Link>
                            </div>
                            <div id='nav_menu_toggle_container' className='flex justify-start w-20'>
                                <div id='nav_menu_btn_spacer' className='w-8'/>
                                <div id='nav_menu_toggle_wrapper' className='w-12 h-12 flex justify-center items-center bg-white/20 lg:bg-transparent hover:bg-white/20'>
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

