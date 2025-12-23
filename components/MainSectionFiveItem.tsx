'use client'
//Components
import { useState } from "react"

export default function MainSectionFiveItem ({ head, par }: { head: string, par: string }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full text-[#575757] border rounded-[15px] cursor-pointer transition-all duration-500
                        ${isOpen ? "shadow-2xl bg-white border-white" : "border-[#E7EBEE] bg-[#FAFAFA]"}`}
        >
            <div className="flex gap-3 items-center px-5 py-3">
                <div className="relative w-[55px] h-[55px] flex items-center justify-center">
                    <span
                        className={`absolute text-[55px] transition-all duration-300
                                    ${isOpen ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}
                    >
                        +
                    </span>
                    <span
                        className={`absolute text-[55px] text-[#FD5757] transition-all duration-300
                                    ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                    >
                        -
                    </span>
                </div>
                <p className="font-semibold pt-1">{head}</p>
            </div>

            <div
                className={`overflow-hidden transition-all duration-500 flex flex-col items-center
                            ${isOpen ? "max-h-[500px] pb-5" : "max-h-0 pb-0"}`}
            >
                <p className="w-[71%]">{par}</p>
            </div>
        </div>
    );
}