export default function MainSectionSeven () {
    return (
        <div className="my-5 grid grid-cols-3 mt-15 bg-[#1E5AFA] py-15 px-20 rounded rounded-[15px] max-w-[65rem]
                        bg-[url('/images/Union.png')] bg-no-repeat bg-[right_30px_bottom_0px] bg-[length:160px_auto]">
            <div className="col-span-2 flex flex-col gap-5">
                <h4 className="text-[35px] font-semibold">Subscribe to get updates</h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimes qui blanditiis praesentium voluptatum deleniti atque.</p>
            </div>
            <div className="flex justify-center items-start">
                <button 
                    type="button"
                    className="border border-white mt-5 rounded rounded-4 px-15 py-5 duration-500
                                hover:bg-white hover:text-[#1E5AFA]
                                focus:bg-white focus:text-[#1E5AFA]"
                >
                    Get start
                </button>
            </div>
        </div>
    );
}