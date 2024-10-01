// import { TextLink } from "../common/Home/TextLink"
// import { Navbar } from "../components/home/Navbar"

import { Button } from "../common/Buttons/Button"
import { WhiteButton } from "../common/Buttons/WhiteButton"

import { FcGoogle } from "react-icons/fc";

export const Home = () => {
    return (
        <div>

            {/* <p>Lorem ipsum dolor sit amet consectetu</p> */}
            {/* <TextLink text={'sample'} styles={''} /> */}
            {/* <Navbar/> */}
            <Button onClick={() => console.log('bt')} styles={''} flag={true} Component={FcGoogle} text={'Login Button'}/>
            <WhiteButton onClick={() => console.log('bt')} styles={''} flag={true} Component={FcGoogle} text={'Sign in with Google'} />
        </div>
    )
}
