import { useSelector } from "react-redux";
import { Navbar } from "../components/home/Navbar"
import { UnderlineText } from "../common/Home/UnderlineText";
import { Footer } from "../components/home/Footer";
import { toast } from "react-toastify";
import { LuListFilter } from "react-icons/lu";
import DropdownMenu from "../components/Profile/DropdownMenu";
import { useEffect, useState } from "react";
import { HiSearch } from 'react-icons/hi';
import color from '../assets/Home/color-icon.svg'
import ExploreDesigns from "../components/home/HeroSectionComp/ExploreDesigns";
export const Profile = () => {

    const { user } = useSelector((state: any) => state);
    const [filterButton, setFilterButton] = useState(false);

    useEffect(() => {
        toast.success(`Welcome ${user?.name}`);
    }, [])


    return (
        <div className="bg-white">
            <Navbar />

            <div className=" bg-black">
                <p className="text-white text-base text-center p-3">Verify your email to get the most out of Dribbble. Didn't receive an email? <UnderlineText text={'Resend confirmation'} /></p>
            </div>

            <div className="px-8 py-8">
                <div className="flex justify-between">
                    <div>
                        <DropdownMenu />

                    </div>
                    <div>
                        <button className="inline-flex gap-3 justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-lg hover:bg-gray-50 focus:outline-none " onClick={() => setFilterButton(!filterButton)}>
                            <LuListFilter />
                            <p>Filter</p>
                        </button>
                    </div>
                </div>

                {
                    filterButton &&
                    (
                        <div className="flex flex-col md:flex-row  w-full justify-evenly mt-3 gap-2">
                            <div className="w-full">
                                <p>Tags</p>
                                <div className="relative">
                                    <HiSearch className="absolute text-2xl top-5 left-2 text-gray-400" />
                                    <input className="px-5 py-4 pl-10 mt-1 w-full border rounded-lg text-md focus:outline-none ring-pink-300 focus:ring-pink-300" />
                                </div>
                            </div>
                            <div className="w-full">
                                <p>Color</p>
                                <div className="relative">
                                    <img className="absolute text-2xl top-6 left-3 rounded-full" src={color} height={'18px'} width={'18px'}></img>
                                    <input className="px-5 py-4 pl-10 mt-1 w-full border rounded-lg text-md" placeholder="Enter hex or select" />
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>

            <div className="mx-2">
                <ExploreDesigns />
            </div>

            <div className="flex justify-center m-3">
                <button className="py-2 px-3 font-semibold text-xs text-gray-900 bg-gray-200 hover:cursor-pointer hover:bg-gray-300 rounded-full">Load more work</button>
            </div>

            <Footer />

        </div>
    )
}
