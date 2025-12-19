//Componets
import Image from "next/image";
import Link from "next/link";
import MainSectionOne from "./MainSectionOne";
import MainSectionTwo from "./MainSectionTwo";

export default function HomeMain() {
    return (
        <main className="w-full flex-1 overflow-hidden">
            <MainSectionOne />
            <MainSectionTwo />
        </main>
    );
}