//Components
import Link from "next/link";

interface FooterNavItemProps {
    head: string;
    links: {
        name: string,
        link: string
    }[];
}

export default function FooterNavItem ({ head, links }: FooterNavItemProps) {
    return (
        <div className="flex flex-col">
            <h5 className="uppercase mb-10 font-semibold text-[#313131] text-[25px]">{head}</h5>
            <nav className="flex flex-col gap-3">
                {links.map((item) => (
                    <Link key={item.name} href={item.link}>
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}