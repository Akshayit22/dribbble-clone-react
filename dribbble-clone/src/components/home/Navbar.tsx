import { Logo } from "../../common/Home/Logo";
import { IoSearchOutline } from "react-icons/io5";
import { Button } from "../../common/Buttons/Button";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
// import { IoMdHeart } from "react-icons/io";
// import { TbEyeFilled } from "react-icons/tb";
// import { CiHeart } from "react-icons/ci";
// import { CiBookmark } from "react-icons/ci";
// import { BiShare } from "react-icons/bi";
// import { FaAngleDown } from "react-icons/fa6";

import '../../index.css'
import { SearchBar } from "./SearchBar";
import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { TextLink } from "../../common/Home/TextLink";

export const Navbar = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <div className="flex flex-col px-5 md:pr-10 md:pl-8 py-6 gap-2">
            <div className="flex justify-between md:hidden">
                <div className="flex items-center gap-3 transition-all duration-200">
                    {
                        toggle ? 
                            <HiMenuAlt2 className="text-4xl hover:cursor-pointer" onClick={()=>setToggle(!toggle)}/>
                            : <RxCross2 className="text-4xl hover:cursor-pointer" onClick={() => setToggle(!toggle)} />
                    }
                    
                    <Logo />
                </div>

                <div className="flex items-center gap-2">
                    <IoSearchOutline className="text-lg md:text-3xl hover:cursor-pointer" />
                    <Button onClick={() => console.log('bt')} styles={''} flag={false} Component={<></>} text={'Sign up'} />
                </div>
            </div>

            {
                !toggle && (
                    <div className="z-10 md:hidden">
                        <hr className="w-full"></hr>

                    </div>
                )
            }

            <div className="hidden md:flex justify-center gap-56">
                <div className="flex items-center mr-2">
                    <nav className="flex ">
                        <Dropdown styles={'px-5 items-center'}/>
                        <TextLink text={'Inspiration'} styles={'px-5'} />
                        <TextLink text={'Jobs'} styles={'px-5'} />
                        <TextLink text={'Go Pro'} styles={'px-5'} />
                    </nav>
                </div>

                <div className="flex items-center">
                    <Logo />
                    
                </div>

                <div className="flex gap-5">
                    <SearchBar/>
                    <TextLink text={'Log in'} styles={'text-center flex items-center '} />
                    <Button onClick={() => console.log('bt')} styles={''} flag={false} Component={<></>} text={'Sign up'} />
                </div>

            </div>

        </div>
    )
}
