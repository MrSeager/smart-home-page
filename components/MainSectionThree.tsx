import MainSectionThreeItem from "./MainSectionThreeItem";

export default function MainSectionThree () {
    return (
        <div className="flex flex-col items-center gap-3 text-center mt-25">
            <h2 className="font-bold text-[75px] text-[#313131]">Our Clients</h2>
            <p className="text-[#575757] lg:w-[50%]">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
            <div className="grid grid-cols-4">
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