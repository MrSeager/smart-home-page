'use client'
//Components
import { useState } from "react"

export default function MainSectionFiveItem ({ head, par }: { head: string, par: string }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div 
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full text-[#575757] border rounded rounded-[15px] cursor-pointer duration-500
                        ${isOpen ? 'shadow-2xl bg-white border-white' : 'border-[#E7EBEE] bg-[#FAFAFA]'}`}
        >
            <div className="flex gap-3 items-center px-5">
                <h3 className={`text-[55px] ${isOpen ? 'text-[#FD5757]' : ''} duration-500`}>{isOpen ? "-" : "+"}</h3>
                <p className="font-semibold">{head}</p>
            </div>
            <div className={`${isOpen ? 'h-display pb-5' : 'h-0 pb-0'} duration-500 overflow-hidden flex flex-col items-center`}>
                <p className="w-[82%]">{par}</p>
            </div>
        </div>
    );
}