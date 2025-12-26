import Image from "next/image";

interface MainSectionFourItemProps {
    par: string;
    img: string;
    head1: string;
    head2: string;
}

export default function MainSectionFourItem ({ par, img, head1, head2 }: MainSectionFourItemProps) {
    return (
        <div className="border border-[#E7EBEE] bg-[#FAFAFA] rounded rounded-[15px] flex flex-col justify-around gap-5 md:gap-10 p-5 md:p-15 duration-500
                        hover:border-white hover:bg-white hover:shadow-2xl
                        focus:border-white focus:bg-white focus:shadow-2xl
                        active:border-white active:bg-white active:shadow-2xl">
            <p className="text-[#5F7285] italic">{par}</p>
            <div className="flex gap-3">
                <div className="relative w-15 h-15 rounded-full overflow-hidden">
                    <Image src={img} alt="avatar" fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="font-semibold text-[#1B263D]">{head1}</h3>
                    <h3 className="text-[#9C9EA3] text-sm">{head2}</h3>
                </div>
            </div>
        </div>
    );
}