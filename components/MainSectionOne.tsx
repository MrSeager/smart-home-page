//Componets
import Image from "next/image";
import Link from "next/link";

export default function MainSectionOne () {
    return (
        <div className="flex flex-col items-center py-5 gap-3 mb-5">
            <h1 className="mb-5 text-[60px] font-bold text-center text-base/12">
                Smart Home<br />
                Application
            </h1>
            <p className="lg:w-[50%] text-center">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself belive ferrars besides cottage.</p>
            <Image
                src='/images/Hero Image.svg'
                alt="hero image"
                width={1200}
                height={600}
            />
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
    );
}