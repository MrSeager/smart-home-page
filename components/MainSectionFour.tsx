//Components
import Image from "next/image";
import MainSectionFourItem from "./MainSectionFourItem";

export default function MainSectionFour () {
    return (
        <div className="flex flex-col items-center gap-3 mb-5">
            <h2 className="text-center font-bold text-[75px] text-[#313131]">Testimonials</h2>
            <p className="text-center text-[#575757] lg:w-[50%]">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
            <div className="grid grid-cols-2 gap-3 max-w-[1400px]">
                <MainSectionFourItem
                    par={'our company, we do ongoing research with our target audience. This includes 30-45 minute phone interview. It was difficult to conduct the interview, really listen, and ask good follow up questions'}
                    img={'/images/3ca1f97757c6e0c327d249d182bed7cb93ac2f78.png'}
                    head1={'Cham'}
                    head2={'Product designer'}
                />
                <MainSectionFourItem
                    par={'We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility on how projects can be structured'}
                    img={'/images/28c03f541e467d18375b82e868f83b3aa62e041b.png'}
                    head1={'Scopic Software'}
                    head2={'Custom IT Solutions Firm'}
                />
                <MainSectionFourItem
                    par={'It is easy to communicate with clients through their messege system and their SafePay feature ensures thet all funds are secure prior to any work being done.'}
                    img={'/images/ee66db2a047440e78c8960871fb5a2ea86fce017.png'}
                    head1={'Russell Lee'}
                    head2={'Writer'}
                />
                <MainSectionFourItem
                    par={'At SOLACE Engineers, we provide engineering solutions and other services on various freelancing platforms. Among them all, Guru is the best and our first choice to invite clients.'}
                    img={'/images/3d894eb7bae16393959746ba4bae049998e3430f.png'}
                    head1={'Solace Engineer Inc.'}
                    head2={'Engineering Firm'}
                />
            </div>
            <Image 
                src={'/images/slider nav.png'}
                alt="slider"
                width={115}
                height={18}
                className="mt-5"
            />
        </div>
    );
}