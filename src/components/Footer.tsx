import { FiHeart } from "react-icons/fi";
import { HiMiniHome } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

export default function Footer() {
    return (
        <>
            <nav className="lg:hidden flex fixed bottom-0 w-full z-50 justify-center bg-custom-gradient-1 shadow-custom-drop">
                <div className="p-3 w-[85%] max-w-[400px] sm:max-w-[425px] md:w-[65%] md:max-w-[65%]">
                    <div className="flex justify-center bg-custom-gradient-4 rounded-lg *:text-[#B0B0B0] *:size-14 sm*:size-16 *:px-3 *:mx-4 sm:*:mx-6 md:*:mx-10 *:drop-shadow-xl">
                        <MobileNavigation />
                    </div>
                </div>
            </nav>
        </>
    );
}

function MobileNavigation() {
    return (
        <>
            <HiMiniHome />
            <IoSearch />
            <FiHeart />
        </>
    );
}
