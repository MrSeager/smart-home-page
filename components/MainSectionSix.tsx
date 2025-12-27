//Components
import Image from "next/image";
import Link from "next/link";

export default function MainSectionSix () {
    return (
        <div id="section-6" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 h-[50rem] px-5">
            <div className="flex flex-col justify-center gap-10 ps-5 order-2 md:order-1">
                <h3 className="font-bold text-[45px] md:text-[65px] text-[#313131] text-base/17">Download App</h3>
                <p className="text-base/5 text-[#575757] lg:w-[75%]">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
            <div className="flex gap-5">
                <Link 
                    href='/'
                    className="shadow-sm duration-500 hover:shadow-2xl focus:shadow-2xl"
                >
                    <Image 
                        src='/images/Apple download button.png'
                        alt="Apple download button image"
                        width={201}
                        height={67}
                    />
                </Link>
                <Link 
                    href='/'
                    className="shadow-sm duration-500 hover:shadow-2xl focus:shadow-2xl"
                >
                    <Image 
                        src='/images/Google download button.png'
                        alt="Google download button image"
                        width={201}
                        height={67}
                    />
                </Link>
            </div>
            </div>
            <div className='relative overflow-visible flex justify-center items-center order-1 md:order-2'>
                <Image 
                    src={'/images/874bce4b3796c0c83c52001b54afa8d36f050e0b.png'}
                    alt="img"
                    width={3000}
                    height={2000} 
                    className="relative z-10 scale-240 pointer-events-none"
                />
            </div>
        </div>
    );
}