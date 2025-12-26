//Components
import HeaderNavbar from "@/components/HeaderNavbar";
import NavSidebar from "@/components/NavSidebar";
import HomeMain from "@/components/HomeMain";
import FooterNav from "@/components/FooterNav";

export default function Home() {
  // #1E5AFA #E7EBEE #FD5757
  // footer: #000F37
  // text: #313131 #000F37 #575757 #5F7285 #1B263D #9C9EA3 
  // buttons: #000F37

  return (
    <div className="min-h-screen bg-white select-none">
    <div
      className="
        relative mx-auto flex flex-col w-full max-w-[120rem] items-center justify-center font-sans gap-5
        bg-[url('/images/Ellipse753.png'),linear-gradient(to_bottom,#1E5AFA_32rem,transparent_32rem)]
        md:bg-[url('/images/Ellipse753.png'),linear-gradient(to_bottom,#1E5AFA_40rem,transparent_40rem)]
        lg:bg-[url('/images/Ellipse753.png'),linear-gradient(to_bottom,#1E5AFA_47rem,transparent_47rem)]
        bg-no-repeat bg-right-top
      "
    >
        <HeaderNavbar />
        <HomeMain />
        <NavSidebar />
        <FooterNav />
      </div>
    </div>
  );
}
