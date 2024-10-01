import { Logo } from "../../common/Home/Logo";
import { IoSearchOutline } from "react-icons/io5";
import { Button } from "../../common/Buttons/Button";
import { HiMenuAlt2 } from "react-icons/hi";
// import { RxCross2 } from "react-icons/rx";
// import { IoMdHeart } from "react-icons/io";
// import { TbEyeFilled } from "react-icons/tb";
// import { CiHeart } from "react-icons/ci";
// import { CiBookmark } from "react-icons/ci";
// import { BiShare } from "react-icons/bi";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaPinterest } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaAngleDown } from "react-icons/fa6";

import '../../index.css'
import { SearchBar } from "./SearchBar";
import { WhiteButton } from "../../common/Buttons/WhiteButton";

export const Navbar = () => {
    return (
        <div className="flex flex-col px-5 md:px-10 max-h-12 py-6 ">
            <div className="flex justify-between md:hidden">

                <div className="flex items-center gap-3">
                    <HiMenuAlt2 className="text-4xl hover:cursor-pointer" />
                    <Logo />
                </div>

                <div className="flex items-center gap-2">
                    <IoSearchOutline className="text-lg md:text-3xl hover:cursor-pointer" />
                    <Button onClick={() => console.log('bt')} styles={'font-serif'} flag={false} Component={<></>} text={'Sign up'} />
                </div>

            </div>

            <div className="hidden md:flex">
                <div>
                    <nav>
                        <a>Find designers</a>
                        <a>Inspiration</a>
                        <a>Jobs</a>
                        <a>Go Pro</a>
                    </nav>
                </div>

                <div>
                    <Logo />
                </div>

                <div>
                    <SearchBar/>
                    <Button onClick={() => console.log('bt')} styles={''} flag={false} Component={<></>} text={'Login Button'} />
                    <WhiteButton onClick={() => console.log('bt')} styles={''} flag={false} Component={<></>} text={'Sign in with Google'} />
                </div>

            </div>

        </div>
    )
}
