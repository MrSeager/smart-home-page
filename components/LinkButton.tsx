import Link from "next/link"

interface LinkButtonProps {
    name: string;
    link: string;
}

export default function LinkButton ({ name, link }: LinkButtonProps) {
    return <Link href={link} className="duration-500 hover:text-shadow-lg/30 hover:scale-110">{name}</Link>

}