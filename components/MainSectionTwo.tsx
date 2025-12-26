//Components
import MainSectionTwoItem from "./MainSectionTwoItem";

export default function MainSectionTwo () {
    return (
        <div id="section-2" className="scroll-mt-24 flex flex-col gap-5 items-center text-[#313131]">
            <h1 className="text-center font-bold text-[65px]">About us</h1>
            <MainSectionTwoItem 
                order1={'order-1'}
                order2={'order-2'}
                img={'/images/874bce4b3796c0c83c52001b54afa8d36f050e0b.png'}
                title={"Smart Home's Smart Services"}
                par={'Ye am depending property sweetness distrusts belonging collected. Smilling mention he in throught equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.'}
            />
            <MainSectionTwoItem 
                order1={'order-1 md:order-2'}
                order2={'order-1 md:order-1'}
                img={'/images/ec8068d8afb2fb687252bb17b5519087bbbbb905.png'}
                title={"What app can do to your Appliences?"}
                par={'Ye am depending property sweetness distrusts belonging collected. Smilling mention he in throught equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.'}
            />
            <MainSectionTwoItem 
                order1={'order-1'}
                order2={'order-2'}
                img={'/images/01de141d2e1ae28547efabaae468278171cff4fc.png'}
                title={"Control Electric Appliences"}
                par={'Ye am depending property sweetness distrusts belonging collected. Smilling mention he in throught equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.'}
            />
        </div>
    );
}