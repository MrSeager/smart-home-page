import Image from "next/image";

export default function MainSectionThreeItem ({ img }: {img: string}) {
    return (
        <div className="relative overflow-visible">
            <Image
                src={img}
                alt="logo"
                width={361}
                height={208}
                className="relative scale-120"
            />
        </div>
    );
}