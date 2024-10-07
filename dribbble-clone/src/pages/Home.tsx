import { Footer } from "../components/home/Footer"
import { HeroSection } from "../components/home/HeroSection"
import { Navbar } from "../components/home/Navbar"


export const Home = () => {
    console.log(JSON.parse(localStorage.getItem('user')??"null"))
    return (
        <div className="w-full">
            <Navbar />
            <HeroSection />
            <Footer />
        </div>
    )
}
