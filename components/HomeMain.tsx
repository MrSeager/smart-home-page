//Componets
import MainSectionOne from "./MainSectionOne";
import MainSectionTwo from "./MainSectionTwo";
import MainSectionThree from "./MainSectionThree";
import MainSectionFour from "./MainSectionFour";
import MainSectionFive from "./MainSectionFive";

export default function HomeMain() {
    return (
        <main className="w-full flex-1 overflow-hidden">
            <MainSectionOne />
            <MainSectionTwo />
            <MainSectionThree />
            <MainSectionFour />
            <MainSectionFive />
        </main>
    );
}