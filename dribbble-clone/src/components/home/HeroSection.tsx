import { Button } from '../../common/Buttons/Button'
import { WhiteButton } from '../../common/Buttons/WhiteButton'
import DesignGrid from '../../common/Designs/DesignGrid'
import { DesignerCarousel } from '../../common/HorizontalScroll/DesignerCarousel'
import { ColoredHeading } from './ColoredHeading'


export const HeroSection = () => {
    return (
        <div className='flex flex-col items-center justify-center pt-16'>

            <div className='flex flex-col justify-center items-center w-fit gap-10 md:mx-56'>
                <ColoredHeading />
                <p className='mx-16 text-3xl md:text-7xl text-center font-serif'>The world{'’'}s destination for design</p>
                <p className='md:text-xl font-semibold mx-5 text-center'>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
                <Button onClick={() => console.log('get started')} styles={''} flag={false} Component={<></>} text={'Get started'} />
            </div>

            <DesignerCarousel />

            <div className='flex flex-col justify-center items-center mt-20 gap-12'>
                <p className='text-3xl md:text-5xl font-serif'>Explore inspiring designs</p>
                <DesignGrid />
                <WhiteButton onClick={() => console.log('bt')} styles={'border-1 border-black w-fit'} flag={false} Component={<></>} text={'Browse more inspiration'} />
            </div>

            <div className='pb-28 pt-28 mt-28 w-full bg-yellowbg'>
                <div className='mx-16 md:mx-32 flex flex-col gap-10 justify-center items-center '>
                    <p className='text-3xl md:text-6xl font-serif text-center font-normal'>Find your next designer today</p>
                    <div className='flex flex-col gap-2 items-center text-center'>
                        <p className='text-xl'>The world{'’'}s leading brands use Dribbble to hire creative talent.</p>
                        <p className='text-xl  w-[80%]'>Browse millions of top-rated portfolios to find your perfect creative match.</p>
                    </div>
                    <div className='flex flex-wrap justify-center gap-5 '>
                        <Button onClick={() => console.log('bt')} styles={''} flag={false} Component={<></>} text={'Get started now'} />
                        <WhiteButton onClick={() => console.log('bt')} styles={'border-0 font-medium'} flag={false} Component={<></>} text={'Learn about hiring'} />
                    </div>
                    
                    <p className='text-xl m-4 font-s text-center'>Are you a designer? <span className='hover:cursor-pointer underline'>Join Dribbble</span></p>
                </div>
            </div>

        </div>
    )
}
