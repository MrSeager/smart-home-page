//Components
import Image from "next/image";
import Link from "next/link";

export default function MainSectionSix () {
    return (
        <div className="grid grid-cols-2 max-w-[90rem] h-[50rem]">
            <div className="flex flex-col justify-center gap-10 ps-5">
                <h3 className="font-bold text-[75px] text-[#313131] text-base/17">Download<br />App</h3>
                <p className="text-[#575757] lg:w-[75%]">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
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
            <div className='relative overflow-visible flex justify-center items-center'>
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