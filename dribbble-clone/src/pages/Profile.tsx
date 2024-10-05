import { useSelector } from "react-redux";
import { Navbar } from "../components/home/Navbar"
import { UnderlineText } from "../common/Home/UnderlineText";
import DesignGrid from "../common/Designs/DesignGrid";
import { Footer } from "../components/home/Footer";

export const Profile = () => {

    const { user } = useSelector((state: any) => state);

    return (
        <div className="bg-white">
            <Navbar/>

            <div className=" bg-black">
                <p className="text-white text-base text-center p-3">Verify your email to get the most out of Dribbble. Didn't receive an email? <UnderlineText text={'Resend confirmation'}/></p>
            </div>

            <div className="">
                <div>
                    <div>
                        <button >Following</button>

                    </div>
                    <div>
                        <button >Filter</button>
                    </div>
                </div>
            </div>

            <DesignGrid/>

            <div className="flex justify-center m-3">
                <button className="py-2 px-3 font-semibold text-xs text-gray-900 bg-gray-200 hover:cursor-pointer hover:bg-gray-300 rounded-full">Load more work</button>
            </div>

            <Footer/>

        </div>
    )
}
