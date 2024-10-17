// import DropdownMenu from "../../components/Profile/DropdownMenu"

// import { Loader } from "../../common/Home/Loader"

const myStyles = {
    container: 'h-10 bg-black text-white',
    childs: "h-10 bg-white text-black",
    hover:"hover:text-pink-300"
};

export const Try = () => {


    return (
        <div>
            <div className={`${myStyles.container}  ${myStyles.hover}`}>
                container
                <div className={`${myStyles.childs} ${myStyles.hover}`}>
                    childs
                </div>
            </div>
            {/* <DropdownMenu/> */}
            
            {/* <Loader/> */}
            {/* 
            
            <p className="">Lorem ipsum dolor sit amet consectetu</p> 
            <TextLink text={'sample'} styles={''} />
            <Button onClick={() => console.log('bt')} styles={''} flag={false} Component={<></>} text={'Login Button'}/>
            <WhiteButton onClick={() => console.log('bt')} styles={''} flag={true} Component={FcGoogle} text={'Sign in with Google'} /> 
            
            */}


        </div>
    )
}


