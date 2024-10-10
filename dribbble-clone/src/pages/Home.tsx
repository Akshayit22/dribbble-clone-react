import { Footer } from "../components/home/Footer"
import { HeroSection } from "../components/home/HeroSection"
import { Navbar } from "../components/home/Navbar"
import ErrorBoundary from "./common/ErrorBoundary"


export const Home = () => {
    return (
        <div className="w-full">
            <ErrorBoundary>
                <Navbar />
            </ErrorBoundary>
            <HeroSection />
            <Footer />
        </div>
    )
}
