import { FooterLink } from "../../common/Footer/FooterLink";
import InfiniteScrollCards from "../../common/Footer/InfiniteScrollCards"
import { Logo } from "../../common/Home/Logo"
import { FaInstagram, FaFacebookSquare, FaPinterest, FaTwitter } from "react-icons/fa";


export const Footer = () => {
    return (
        <div>
            <div className="pt-16 bg-white">

                <InfiniteScrollCards />

                <div className="md:mx-32 px-8">

                    <div className="pt-20 pb-11 flex flex-col md:flex-row justify-between items-center text-center gap-5">
                        <div className="scale-110">
                            <Logo />
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center md:gap-6 lg:gap-10 font-medium">
                            <FooterLink text={'For designers'} />
                            <FooterLink text={'Hire talent'} />
                            <FooterLink text={'Inspiration'} />
                            <FooterLink text={'Advertising'} />
                            <FooterLink text={'Blog'} />
                            <FooterLink text={'About'} />
                            <FooterLink text={'Careers'} />
                            <FooterLink text={'Support'} />
                        </div>
                        <div className="flex gap-4 text-xl hover:cursor-pointer">
                            <FaTwitter />
                            <FaFacebookSquare />
                            <FaInstagram />
                            <FaPinterest />
                        </div>
                    </div>

                    <div className="py-11 flex flex-wrap justify-between items-center font-sans text-black text-sm opacity-50">
                        <div className="flex gap-3 md:gap-4 mx-auto">
                            <p>© 2024 Dribbble</p>
                            <a href="">Terms</a>
                            <a href="">Privacy</a>
                            <a href="">Cookies</a>
                        </div>
                        <div className="flex flex-wrap gap-2 md:gap-4 mx-auto">
                            <a href="">Jobs</a>
                            <a href="">Designers</a>
                            <a href="">Freelancers</a>
                            <a href="">Tags</a>
                            <a href="">Places</a>
                            <a href="">Resources</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
