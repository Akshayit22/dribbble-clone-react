import '../../index.css'

import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { SearchBar } from "./SearchBar";
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt2 } from "react-icons/hi";
import { Logo } from "../../common/Home/Logo";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { Button } from "../../common/Buttons/Button";
import { TextLink } from "../../common/Home/TextLink";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/redux/slices/AuthSlice';
import { toast } from 'react-toastify';

export const Navbar = () => {

    const [toggle, setToggle] = useState(true);

    const { user, isLoggedIn } = useSelector((state: any) => state);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const profileImage = 'https://cdn.dribbble.com/assets/avatar-default-5c629cb49eac40967b7fc4762c7232c2b5f2673acef772ae404c8b0d07b0d7fb.gif';

    const handleLogout = () => {
        dispatch(logout());
        toast.success('user logged out successfully...');
        navigate('/');
    }

    return (
        <div>
            <div className="flex flex-col px-5 md:pr-10 md:pl-8 py-6 gap-2">
                {/* Mobile view before toggle */}
                <div className="flex justify-between md:hidden">
                    <div className="flex items-center gap-3 transition-all duration-200">
                        {
                            toggle ?
                                <HiMenuAlt2 className="text-4xl hover:cursor-pointer" onClick={() => setToggle(!toggle)} />
                                : <RxCross2 className="text-4xl hover:cursor-pointer" onClick={() => setToggle(!toggle)} />
                        }

                        <div onClick={()=>navigate('/')}>
                            <Logo />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <IoSearchOutline className="text-xl md:text-3xl hover:cursor-pointer" />

                        {
                            isLoggedIn ?
                                (
                                    <img src={profileImage} width={'45px'} height={'45px'} className='rounded-full group hover:cursor-pointer' onClick={() => navigate('/profile')} />
                                ) :
                                (
                                    <Button onclick={() => navigate('/signup')} styles={''} flag={false} Component={<></>} text={'Sign up'} />
                                )
                        }
                    </div>
                </div>

                {/* Desktop view  */}
                <div className="hidden md:flex justify-between">
                    <div className="flex items-center mr-2">
                        <nav className="flex ">
                            <Dropdown styles={'px-5 items-center'} />
                            <TextLink text={'Inspiration'} styles={'px-5'} />
                            <TextLink text={'Jobs'} styles={'px-5'} />
                            <TextLink text={'Go Pro'} styles={'px-5'} />
                        </nav>
                    </div>

                    <div className="flex items-center" onClick={() => navigate('/')}>
                        <Logo />

                    </div>

                    <div className="flex gap-4">
                        <SearchBar />
                        {
                            !isLoggedIn ?
                                (
                                    <>
                                        <TextLink text={'Log in'} onclick={() => navigate('/login')} styles={'text-center flex items-center '} />
                                        <Button onclick={() => navigate("/signup")} styles={''} flag={false} Component={<></>} text={'Sign up'} />
                                    </>
                                ) :
                                (
                                    <div className='group'>
                                        <img src={profileImage} width={'45px'} height={'45px'} className='rounded-full group hover:cursor-pointer' onClick={() => navigate('/profile')} />

                                        <div className='pt-7 w-80 rounded-xl border invisible opacity-0 absolute top-24 right-10 z-50 group-hover:opacity-100 group-hover:visible transition-all duration-500 bg-white'>
                                            <div className='p-8 '>
                                                <div className='mb-5 flex flex-col justify-center items-center' onClick={() => navigate('/dashboard')}>
                                                    <img src={profileImage} width={'80px'} height={'80px'} className='rounded-full hover:cursor-pointer' />
                                                    <p className='text-center font-semibold text-black hover:cursor-pointer hover:opacity-60'>
                                                        {user?.name}
                                                    </p>
                                                </div>
                                                <div>
                                                    <TextLink text={'Upload Design Work'} styles={'font-normal py-3'} onclick={null} />
                                                    <TextLink text={'Settings'} styles={'py-3'} onclick={null} />

                                                    <div className='border-t-2'>
                                                        <button onClick={() => handleLogout()} className='py-4  text-sm font-semibold hover:cursor-pointer hover:opacity-70 transition-opacity duration-150'>Sign Out</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                        }
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

                            {
                                isLoggedIn === false &&
                                (
                                    <div className="border-t mt-3 ">
                                        <TextLink onclick={() => navigate('/login')} text={'Log in'} styles={'pt-6'} />
                                    </div>
                                )
                            }

                        </div>



                    </div>
                )
            }
        </div>
    )
}
