export default function HeaderNavbar () {
    return (
        <header className="max-w-[120rem] w-full bg-[#1E5AFA]">
            <nav className="px-5 py-5">
                <div className="grid grid-cols-3">
                    <div className="flex gap-3">
                        <button type="button">Home</button>
                        <button type="button">About</button>
                        <button type="button">Testimonials</button>
                        <button type="button">Contact</button>
                    </div>
                    <h1 className="text-[40px] font-bold text-center">smartHome</h1>
                    <div className="flex gap-3 justify-end">
                        <button type="button">Login</button>
                        <button type="button">Sign up</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}