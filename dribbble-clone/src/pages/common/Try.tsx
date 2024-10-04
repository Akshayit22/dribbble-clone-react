import data from '../../common/Footer/footer-data.json';

export const Try = () => {

    return (
        <div>
            <div className='flex space-x-16 overflow-hidden group'>
                {
                    data.map((item,index)=>(
                        <div key={index} className='flex-shrink-0 animate-loop-scroll group-hover:paused'>
                            <div className='rounded-xl'>
                                <img
                                    src={item["image-url"]}
                                    alt={item.title}
                                    className=" h-40 object-cover rounded-xl"
                                />
                            </div>


                            <div className="flex mt-4 items-center ">
                                <h3 className="text-md font-normal text-black">{item.title}</h3>
                            </div>
                        </div>
                    ))

                }
            </div>
















            {/* 
            
            <p className="">Lorem ipsum dolor sit amet consectetu</p> 
            <TextLink text={'sample'} styles={''} />
            <Button onClick={() => console.log('bt')} styles={''} flag={false} Component={<></>} text={'Login Button'}/>
            <WhiteButton onClick={() => console.log('bt')} styles={''} flag={true} Component={FcGoogle} text={'Sign in with Google'} /> 
            
            */}


        </div>
    )
}
