'use client';
//Componets
import MainSectionOne from "./MainSectionOne";
import MainSectionTwo from "./MainSectionTwo";
import MainSectionThree from "./MainSectionThree";
import MainSectionFour from "./MainSectionFour";
import MainSectionFive from "./MainSectionFive";
import MainSectionSix from "./MainSectionSix";
import MainSectionSeven from "./MainSectionSeven";
//Icons
import { GoArrowDown, GoArrowUp } from "react-icons/go";

export default function HomeMain() {
    const sections = [
        "section-1", 
        "section-2", 
        "section-3", 
        "section-4", 
        "section-5", 
        "section-6", 
        "section-7",
    ];

    const scrollToSection = (direction: string) => {
        const current = window.scrollY;
        const position = sections.map((id) => {
            const el = document.getElementById(id);
            return el ? el.offsetTop : 0;
        });

        let index = position.findIndex((pos) => current < pos + 200);

        if (direction === 'up') index = Math.max(0, index - 1);
        if (direction === 'down') index = Math.min(sections.length - 1, index + 1);

        const target = document.getElementById(sections[index]);
        target?.scrollIntoView({ behavior: "smooth"});
    }

    return (
        <main className="w-full flex-1 overflow-hidden flex flex-col gap-5 items-center">
            <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
                <button type="button" onClick={() => scrollToSection("up")}
                    className={`w-10 h-10 bg-white text-black flex items-center justify-center shadow duration-500 hover:shadow-xl hover:scale-105`}
                >
                    <GoArrowUp /><span className="hidden">up</span>
                </button>
                <button type="button" onClick={() => scrollToSection("down")}
                    className={`w-10 h-10 bg-white text-black flex items-center justify-center shadow duration-500 hover:shadow-xl hover:scale-105`}
                >
                    <GoArrowDown /><span className="hidden">down</span>
                </button>
            </div>
            
            <MainSectionOne />
            <MainSectionTwo />
            <MainSectionThree />
            <MainSectionFour />
            <MainSectionFive />
            <MainSectionSix />
            <MainSectionSeven />
        </main>
    );
}