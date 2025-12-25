//Components
import Link from "next/link";
//Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function NavSidebar () {
    return (
        <div className="rounded rounded-5 p-3 hidden lg:flex flex-col gap-5 absolute top-[25rem] left-[1rem]">
          <Link href='/' className="p-2 rounded rounded-5 duration-500 hover:bg-white hover:text-[#1E5AFA] hover:scale-110 hover:shadow-xl">
            <FaFacebookF size={25} />
          </Link>
          <Link href='/' className="p-2 rounded rounded-5 duration-500 hover:bg-white hover:text-[#1E5AFA] hover:scale-110 hover:shadow-xl">
            <FaInstagram size={25} />
          </Link>
          <Link href='/' className="p-2 rounded rounded-5 duration-500 hover:bg-white hover:text-[#1E5AFA] hover:scale-110 hover:shadow-xl">
            <FaTwitter size={25} />
          </Link>
          <Link href='/' className="p-2 rounded rounded-5 duration-500 hover:bg-white hover:text-[#1E5AFA] hover:scale-110 hover:shadow-xl">
            <FaLinkedinIn size={25} />
          </Link>
        </div>
    );
}