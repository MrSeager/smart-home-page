//Components
import Image from "next/image";

interface MainSectionTwoItemProps {
    order1: string;
    order2: string;
    img: string;
    title: string;
    par: string;
}

export default function MainSectionTwoItem({ order1, order2, img, title, par }: MainSectionTwoItemProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className={`relative ${order1} overflow-visible
                            before:content-[''] 
                            before:absolute 
                            before:bottom-2 md:before:bottom-24 lg:before:bottom-2
                            before:left-1/5 
                            before:w-3/5 
                            before:h-3/5 md:before:h-3/6 lg:before:h-3/5 
                            before:bg-[#1E5AFA] 
                            before:rounded-xl 
                            before:z-0`}>
                <Image 
                    src={img}
                    alt="img"
                    width={3000}
                    height={2000} 
                    className="relative z-10 mx-auto scale-190 pointer-events-none"
                />
            </div>
            <div className={`flex flex-col ${order2} mx-5 my-5 lg:ms-[20%] items-start gap-5 justify-center lg:pe-[25%]`}>
                <h2 className="font-semibold text-base/10 text-[40px]">{title}</h2>
                <p className="text-[#575757] lg:w-90">{par}</p>
                <button 
                    type="button" 
                    className="font-semibold text-[#575757] cursor-pointer border border-2 rounded px-5 py-3 duration-500
                                hover:bg-[#000F37] hover:border-[#000F37] hover:text-white hover:shadow-xl/30"
                >
                    Learn more
                </button>
            </div>
        </div>
    );
}