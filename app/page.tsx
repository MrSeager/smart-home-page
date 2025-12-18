//Components
import Image from "next/image";
import HeaderNavbar from "@/components/HeaderNavbar";
import HomeMain from "@/components/HomeMain";

export default function Home() {
  // #1E5AFA #E7EBEE #FD5757
  // footer: #000F37
  // text: #313131 #000F37 #575757 #5F7285 #1B263D #9C9EA3 
  // buttons: #000F37

  return (
    <div className="flex flex-col min-h-screen w-full bg-white items-center justify-center font-sans">
      <HeaderNavbar />
      <HomeMain />
    </div>
  );
}
