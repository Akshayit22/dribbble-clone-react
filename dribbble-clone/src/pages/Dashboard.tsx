import { useSelector } from "react-redux"
import { BsThreeDots } from "react-icons/bs";
import { UnderlineText } from "../common/Home/UnderlineText"
import { Footer } from "../components/home/Footer"
import { Navbar } from "../components/home/Navbar"

export const Dashboard = () => {
    const { user } = useSelector((state: any) => state);
    const profileImage = 'https://cdn.dribbble.com/assets/avatar-default-5c629cb49eac40967b7fc4762c7232c2b5f2673acef772ae404c8b0d07b0d7fb.gif';
    const dashboardNavItems = ['Work', 'Boosted Shots', 'Collections', 'Liked Shots', 'About'];

    return (
        <div className="bg-white w-full">
            <Navbar />

            <div className=" bg-black">
                <p className="text-white text-base text-center p-3">Verify your email to get the most out of Dribbble. Didn't receive an email? <UnderlineText text={'Resend confirmation'} /></p>
            </div>

            <div className="pt-14 pb-7 flex justify-center">
                <div className="flex">
                    <div>
                        <img src={profileImage} width={'80px'} height={'80px'} className='rounded-full group hover:cursor-pointer' />
                    </div>
                    <div className="flex flex-col justify-start ml-5 gap-3">
                        <p className="text-3xl">{user.name}</p>
                        <p>India</p>
                        <div className="flex justify-center mb-2.5 mt-2 gap-2">
                            <button className="px-5 py-3 border rounded-full ">Edit Profile</button>
                            <button className="px-5 py-3 border rounded-full"><BsThreeDots /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <nav className="mb-8 ml-5">
                    <ul className="flex gap-3">
                        {
                            dashboardNavItems.map((item, index) => (
                                <div key={item} className={`rounded-full px-4 py-2 flex items-center ${index === 0 ? 'bg-gray-200' : ''}`}>
                                    <a href="#" className=" inline-block font-medium hover:text-opacity-65">
                                        {item}
                                    </a>
                                </div>
                            ))
                        }
                    </ul>
                </nav>
                
            </div>

            <Footer />

        </div>
    )
}
