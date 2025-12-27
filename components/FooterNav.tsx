//Components
import FooterNavItem from "./FooterNavItem";

export default function FooterNav () {
    return (
        <div className="mt-5 flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-[#575757] gap-15 px-5 md:px-10 lg:px-15">
                <div className="flex flex-col gap-5">
                    <h5 className="text-[#313131] font-bold text-[30px]">smartHome</h5>
                    <p className="text-base/4">Automate your entire healthcare hiring, onboarding and compliance with a true technology platform.</p>
                    <div className="flex gap-3 justify-between">
                        <input 
                            type="mail" 
                            placeholder="Email Address"
                            className="p-3 border border-[#E7EBEE] bg-[#FAFAFA] duration-500 rounded rounded-3 w-[100%]"
                        />
                        <button 
                            type="submit"
                            className="font-semibold text-[#575757] cursor-pointer border border-2 rounded px-4 duration-500
                                    hover:bg-[#000F37] hover:border-[#000F37] hover:text-white hover:shadow-xl/30"
                        >
                            Register
                        </button>
                    </div>
                </div>
                <FooterNavItem 
                    head={'Cotegories'}
                    links={[
                        {name: 'Profuct Management', link: '/'},
                        {name: 'Design / Creatives', link: '/'},
                        {name: 'Education & Training', link: '/'},
                        {name: 'UI/UX Designers', link: '/'},
                        {name: 'Development', link: '/'},
                        {name: 'Customer Support', link: '/'},
                    ]}
                />
                <FooterNavItem 
                    head={'About'}
                    links={[
                        {name: 'About Us', link: '/'},
                        {name: 'Partnerships', link: '/'},
                        {name: 'Finance Experts', link: '/'},
                        {name: 'Project Management', link: '/'},
                        {name: 'Product Manager', link: '/'},
                        {name: 'The Team', link: '/'},
                    ]}
                />
                <FooterNavItem 
                    head={'Follow Us'}
                    links={[
                        {name: 'Facebook', link: '/'},
                        {name: 'Twitter', link: '/'},
                        {name: 'Instagram', link: '/'},
                        {name: 'Linkedin', link: '/'},
                    ]}
                />
            </div>
            <div className="py-5 bg-[#000F37]">
                <h6 className="text-white text-center text-[15px] md:text-[20px]">Copyright &copy; 2021 all rights reserved smartHome</h6>
            </div>
        </div>
    );
}