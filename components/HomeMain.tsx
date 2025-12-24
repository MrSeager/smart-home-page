//Componets
import MainSectionOne from "./MainSectionOne";
import MainSectionTwo from "./MainSectionTwo";
import MainSectionThree from "./MainSectionThree";
import MainSectionFour from "./MainSectionFour";
import MainSectionFive from "./MainSectionFive";
import MainSectionSix from "./MainSectionSix";
import MainSectionSeven from "./MainSectionSeven";
import FooterNav from "./FooterNav";

export default function HomeMain() {
    return (
        <main className="w-full flex-1 overflow-hidden flex flex-col gap-5 items-center">
            <MainSectionOne />
            <MainSectionTwo />
            <MainSectionThree />
            <MainSectionFour />
            <MainSectionFive />
            <MainSectionSix />
            <MainSectionSeven />
            <FooterNav />
        </main>
    );
}