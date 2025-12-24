'use client'
//Components
import { useState } from "react";
import LinkButton from "./LinkButton";

export default function HeaderNavbar () {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <header className="w-full">
            <nav className="p-5">
                <div className="grid grid-cols-2 lg:grid-cols-3">
                    <div className="hidden lg:flex gap-5 justify-center items-center">
                        <LinkButton 
                            name={'Home'}
                            link={'/'}
                        />
                        <LinkButton 
                            name={'About'}
                            link={'/'}
                        />
                        <LinkButton 
                            name={'Testimonials'}
                            link={'/'}
                        />
                        <LinkButton 
                            name={'Contact'}
                            link={'/'}
                        />
                    </div>
                    <h1 className="text-[40px] font-bold lg:text-center items-center">smartHome</h1>
                    <div className="hidden lg:flex gap-5 justify-center items-center">
                        <LinkButton 
                            name={'Login'}
                            link={'/'}
                        />
                        <button 
                            type="button"
                            className="px-5 py-3 rounded rounded-5 bg-white border border-white text-black font-semibold duration-500 cursor-pointer
                                        hover:bg-transparent hover:text-white"
                        >
                            Sign up
                        </button>
                    </div>
                    <button 
                        type="button"
                        className="lg:hidden text-[25px] justify-self-end" 
                        onClick={() => setOpen(true)}
                    >
                        ☰
                    </button>
                </div>
            </nav>
            <div 
                className={`z-100 fixed inset-0 bg-[#1E5AFA] transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} 
                onClick={() => setOpen(false)}
            >
                <div className="flex justify-between items-center px-5">
                    <h1 className="text-[35px] font-bold text-start items-center">smartHome</h1>
                    <button 
                        type="button"
                        className="md:hidden text-[35px] justify-self-end" 
                        onClick={() => setOpen(true)}
                    >
                        ✕
                    </button>
                </div>
                <div className="flex flex-col gap-3 px-5">
                        <LinkButton 
                            name={'Home'}
                            link={'/'}
                        />
                        <LinkButton 
                            name={'About'}
                            link={'/'}
                        />
                        <LinkButton 
                            name={'Testimonials'}
                            link={'/'}
                        />
                        <LinkButton 
                            name={'Contact'}
                            link={'/'}
                        />
                        <LinkButton 
                            name={'Login'}
                            link={'/'}
                        />
                        <LinkButton 
                            name={'Sign up'}
                            link={'/'}
                        />
                </div>
            </div>
        </header>
    );
}