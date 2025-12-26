import MainSectionThreeItem from "./MainSectionThreeItem";

export default function MainSectionThree () {
    return (
        <div id="section-3" className="scroll-mt-24 flex flex-col items-center gap-3 text-center mt-25">
            <h2 className="font-bold text-[65px] text-[#313131] text-base/15">Our Clients</h2>
            <p className="text-[#575757] lg:w-[50%] px-3">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
            <div className="grid grid-cols-2 md:grid-cols-4">
                <MainSectionThreeItem
                    img={'/images/Logo.png'}
                />
                <MainSectionThreeItem
                    img={'/images/Logo (1).png'}
                />
                <MainSectionThreeItem
                    img={'/images/Logo (2).png'}
                />
                <MainSectionThreeItem
                    img={'/images/Logo (3).png'}
                />
                <MainSectionThreeItem
                    img={'/images/Logo (4).png'}
                />
                <MainSectionThreeItem
                    img={'/images/Logo (5).png'}
                />
                <MainSectionThreeItem
                    img={'/images/Logo (6).png'}
                />
                <MainSectionThreeItem
                    img={'/images/Logo (7).png'}
                />
            </div>
        </div>
    );
}