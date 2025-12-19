//Componets
import Image from "next/image";

export default function MainSectionTwo () {
    return (
        <div className="flex flex-col items-center gap-5 text-[#313131]">
            <h1 className="text-center font-bold text-[75px]">About us</h1>
            <div className="grid grid-cols-2">
                <div className="">
                    <Image 
                        src='/images/874bce4b3796c0c83c52001b54afa8d36f050e0b.png'
                        alt="img"
                        width={4096}
                        height={2662} 
                        className="mx-auto"
                    />
                </div>
                <div className="flex flex-col items-start gap-5 justify-center lg:pe-[25%]">
                    <h2 className="font-semibold text-base/12 text-[50px]">Smart Home&apos;s Smart Services</h2>
                    <p className="text-[#575757]">
                        Ye am depending property sweetness
                        distrusts belonging collected. Smilling mention
                        he in throught equally musical. Wisdom new
                        and valley answer. Contented it so is discourse
                        recommend. Man its upon him call mile. An 
                        pasture he himself believe ferrars besides
                        cottage.
                    </p>
                    <button type="button">Learn more</button>
                </div>
            </div>
        </div>
    );
}