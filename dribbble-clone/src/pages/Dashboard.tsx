import { UnderlineText } from "../common/Home/UnderlineText"
import { Footer } from "../components/home/Footer"
import { Navbar } from "../components/home/Navbar"

export const Dashboard = () => {

    return (
        <div className="bg-white w-full">
            <Navbar />

            <div className=" bg-black">
                <p className="text-white text-base text-center p-3">Verify your email to get the most out of Dribbble. Didn't receive an email? <UnderlineText text={'Resend confirmation'} /></p>
            </div>

            Dashboard

            <Footer />

        </div>
    )
}
