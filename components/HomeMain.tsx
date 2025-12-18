//Componets
import Image from "next/image";

export default function HomeMain() {
    return (
        <main className="max-w-[120rem] w-full flex-1">
            <div className="bg-[#1E5AFA] flex flex-col items-center py-5">
                <h1 className="text-[50px] font-bold text-center text-base/12">
                    Smart Home<br />
                    Application
                </h1>
                <p>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself belive ferrars besides cottage.</p>
                <Image
                    src='images/Hero Image.svg'
                    alt="hero image"
                    width={1200}
                    height={600}
                />
            </div>
        </main>
    );
}