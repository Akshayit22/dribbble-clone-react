import { Footer } from "../components/home/Footer"
import { HeroSection } from "../components/home/HeroSection"
import { Navbar } from "../components/home/Navbar"
// import { TextLink } from "../common/Home/TextLink"
// import { Button } from "../common/Buttons/Button"
// import { WhiteButton } from "../common/Buttons/WhiteButton"
// import { FcGoogle } from "react-icons/fc";

export const Home = () => {
    return (
        <div className="w-full">
            <Navbar/>
            <HeroSection/>
            <Footer/>
            {/* <p className="">Lorem ipsum dolor sit amet consectetu</p> 
            <TextLink text={'sample'} styles={''} />
            <Button onClick={() => console.log('bt')} styles={''} flag={false} Component={<></>} text={'Login Button'}/>
            <WhiteButton onClick={() => console.log('bt')} styles={''} flag={true} Component={FcGoogle} text={'Sign in with Google'} /> */}
        </div>
    )
}
