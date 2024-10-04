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
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

    const [toggle, setToggle] = useState(true);
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-col px-5 md:pr-10 md:pl-8 py-6 gap-2">
                <div className="flex justify-between md:hidden">
                    <div className="flex items-center gap-3 transition-all duration-200">
                        {
                            toggle ?
                                <HiMenuAlt2 className="text-4xl hover:cursor-pointer" onClick={() => setToggle(!toggle)} />
                                : <RxCross2 className="text-4xl hover:cursor-pointer" onClick={() => setToggle(!toggle)} />
                        }

                        <Logo />
                    </div>

                    <div className="flex items-center gap-2">
                        <IoSearchOutline className="text-lg md:text-3xl hover:cursor-pointer" />
                        <Button onclick={() => navigate('/signup')} styles={''} flag={false} Component={<></>} text={'Sign up'} />
                    </div>
                </div>

                <div className="hidden md:flex justify-center gap-56">
                    <div className="flex items-center mr-2">
                        <nav className="flex ">
                            <Dropdown styles={'px-5 items-center'} />
                            <TextLink text={'Inspiration'} styles={'px-5'} />
                            <TextLink text={'Jobs'} styles={'px-5'} />
                            <TextLink text={'Go Pro'} styles={'px-5'} />
                        </nav>
                    </div>

                    <div className="flex items-center">
                        <Logo />

                    </div>

                    <div className="flex gap-5">
                        <SearchBar />
                        <TextLink text={'Log in'} onclick={() => navigate('/login')} styles={'text-center flex items-center '} />
                        <Button onclick={() => navigate("/signup")} styles={''} flag={false} Component={<></>} text={'Sign up'} />
                    </div>

                </div>
            </div>

            {/* Mobile view on toggle */}
            {
                !toggle && (
                    <div className="absolute w-full z-10 md:hidden bg-white">
                        <hr className="w-full"></hr>

                        <div className="p-8">
                            <div className="mt-3 flex flex-col gap-5">
                                <div>
                                    <TextLink text={'Find designers'} styles={''} />
                                    <div className="my-3 pl-6 border-l-2">
                                        <div>
                                            <TextLink text={'Designer search'} styles={''} />
                                            <p className="text-sm text-gray-600 hover:cursor-pointer">Quickly find your next designer</p>
                                        </div>
                                        <div>
                                            <TextLink text={'Post a job'} styles={''} />
                                            <p className="text-sm text-gray-600 hover:cursor-pointer">The #1 job board for design talent</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <TextLink text={'Inspiration'} styles={''} />
                                </div>
                                <div>
                                    <TextLink text={'Jobs'} styles={''} />
                                </div>
                                <div>
                                    <TextLink text={'Go Pro'} styles={''} />
                                </div>
                            </div>

                            <div className="border-t mt-3 ">
                                <TextLink onclick={()=>navigate('/login')} text={'Log in'} styles={'pt-6'} />
                            </div>

                        </div>

                        

                    </div>
                )
            }
        </div>
    )
}
