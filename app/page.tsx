//Components
import HeaderNavbar from "@/components/HeaderNavbar";
import HomeMain from "@/components/HomeMain";

export default function Home() {
  // #1E5AFA #E7EBEE #FD5757
  // footer: #000F37
  // text: #313131 #000F37 #575757 #5F7285 #1B263D #9C9EA3 
  // buttons: #000F37

  return (
    <div className="min-h-screen bg-white select-none">
      <div className="mx-auto flex flex-col w-full max-w-[120rem] items-center justify-center font-sans gap-5
                      bg-gradient-to-b from-[#1E5AFA] from-[47rem] via-transparent via-[47rem]">
        <HeaderNavbar />
        <HomeMain />
      </div>
    </div>
  );
}
