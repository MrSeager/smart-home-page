import Link from "next/link";

export default function HeaderNavbar () {
    return (
        <header className="w-full">
            <nav className="px-5 py-5">
                <div className="grid grid-cols-3">
                    <div className="flex gap-5 justify-center items-center">
                        <Link href='/'>Home</Link>
                        <Link href='/'>About</Link>
                        <Link href='/'>Testimonials</Link>
                        <Link href='/'>Contact</Link>
                    </div>
                    <h1 className="text-[40px] font-bold text-center items-center">smartHome</h1>
                    <div className="flex gap-5 justify-center">
                        <button type="button">Login</button>
                        <button type="button">Sign up</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}