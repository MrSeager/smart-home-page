import Link from "next/link"

interface LinkButtonProps {
    name: string;
    link: string;
}

export default function LinkButton ({ name, link }: LinkButtonProps) {
    return <Link href={link} className="p-2 rounded rounded-5 text-4xl lg:text-xl duration-500 
                                        hover:bg-white hover:text-[#1E5AFA] hover:shadow-xl
                                        focus:bg-white focus:text-[#1E5AFA] focus:shadow-xl
                                        active:bg-white active:text-[#1E5AFA] active:shadow-xl"
            >
                {name}
            </Link>

}