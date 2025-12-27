'use client'
//Components
import Link from "next/link";
import { useState, useEffect } from "react";
import LinkButton from "./LinkButton";
//Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function HeaderNavbar () {
    const [open, setOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`w-full max-w-[120rem] fixed top-0 z-50 duration-500 ${isScrolled ? "bg-[#1e59fa60]" : "bg-transparent"} rounded-b-[25px]`}>
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
                className={`z-100 flex flex-col justify-between fixed inset-0 bg-[#1E5AFA] transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} 
                onClick={() => setOpen(false)}
            >
                <div className="flex justify-between items-center px-5">
                    <h1 className="text-[35px] font-bold text-start items-center">smartHome</h1>
                    <button 
                        type="button"
                        className="lg:hidden text-[35px] justify-self-end" 
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
                
                <div className="rounded rounded-5 p-3 flex items-center justify-center gap-5 ">
                    <Link 
                        href='/' 
                        className="p-2 rounded rounded-5 duration-500 
                                hover:bg-white hover:text-[#1E5AFA] hover:scale-110 hover:shadow-xl
                                focus:bg-white focus:text-[#1E5AFA] focus:scale-110 focus:shadow-xl
                                active:bg-white active:text-[#1E5AFA] active:scale-110 active:shadow-xl"
                    >
                        <FaFacebookF size={25} />
                    </Link>
                    <Link 
                        href='/' 
                        className="p-2 rounded rounded-5 duration-500 
                                hover:bg-white hover:text-[#1E5AFA] hover:scale-110 hover:shadow-xl
                                focus:bg-white focus:text-[#1E5AFA] focus:scale-110 focus:shadow-xl
                                active:bg-white active:text-[#1E5AFA] active:scale-110 active:shadow-xl"
                    >
                        <FaInstagram size={25} />
                    </Link>
                    <Link 
                        href='/' 
                        className="p-2 rounded rounded-5 duration-500 
                                hover:bg-white hover:text-[#1E5AFA] hover:scale-110 hover:shadow-xl
                                focus:bg-white focus:text-[#1E5AFA] focus:scale-110 focus:shadow-xl
                                active:bg-white active:text-[#1E5AFA] active:scale-110 active:shadow-xl"
                    >
                        <FaTwitter size={25} />
                    </Link>
                    <Link 
                        href='/' 
                        className="p-2 rounded rounded-5 duration-500 
                                hover:bg-white hover:text-[#1E5AFA] hover:scale-110 hover:shadow-xl
                                focus:bg-white focus:text-[#1E5AFA] focus:scale-110 focus:shadow-xl
                                active:bg-white active:text-[#1E5AFA] active:scale-110 active:shadow-xl"
                    >
                        <FaLinkedinIn size={25} />
                    </Link>
                </div>
            </div>
        </header>
    );
}