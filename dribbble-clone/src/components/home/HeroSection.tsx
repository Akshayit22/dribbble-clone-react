import { Button } from '../../common/Buttons/Button'
import { WhiteButton } from '../../common/Buttons/WhiteButton'
import DesignGrid from '../../common/Designs/DesignGrid'
import { DesignerCarousel } from '../../common/HorizontalScroll/DesignerCarousel'
import { ColoredHeading } from './ColoredHeading'


export const HeroSection = () => {
    return (
        <div className='flex flex-col items-center justify-center pt-16 min-h-screen'>

            <div className='flex flex-col justify-center items-center w-fit gap-10 mx-56'>
                <ColoredHeading />
                <p className='mx-16 text-7xl text-center font-serif'>The world{'’'}s destination for design</p>
                <p className='text-xl font-semibold'>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
                <Button onClick={() => console.log('get started')} styles={''} flag={false} Component={<></>} text={'Get started'} />
            </div>
            <DesignerCarousel />
            <div className='flex flex-col justify-center items-center mt-20 gap-10'>
                <p className='text-5xl font-serif'>Explore inspiring designs</p>
                <DesignGrid />
                <WhiteButton onClick={() => console.log('bt')} styles={'border-1 border-black w-fit'} flag={false} Component={<></>} text={'Browse more inspiration'} />
            </div>
        </div>
    )
}
