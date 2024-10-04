import { useNavigate } from "react-router-dom";
import { WhiteButton } from "../../common/Buttons/WhiteButton"
import { Button } from "../../common/Buttons/Button";
import { FcGoogle } from "react-icons/fc";

export const LoginForm = () => {
    const navigate = useNavigate();
  return (
      <div className="lg:ml-24 md:px-16 mx-2 px-5 md:pt-7 w-full flex flex-col">
          <p className="text-2xl font-bold mb-10 w-full">Sign in to Dribbble</p>

          <WhiteButton onClick={() => navigate('/login')} styles={'font-bold'} flag={true} Component={FcGoogle} text={'Sign in with Google'} />

          <div className="flex items-center justify-center w-full my-7">
              <hr className="w-full h-px my-8 bg-gray-400 border " />
              <span className="absolute px-3 text-gray-500 -translate-x-1/2 bg-white left-1/2">or sign in with email</span>
          </div>

          <div>
              <p className="font-bold mt-3 mb-1.5">Username or Email</p>
              <input className="px-5 py-4 w-full border rounded-lg text-md"></input>
          </div>

          <div>
              <div className="flex justify-between items-center">
                  <p className="font-bold mt-3 mb-1.5">Password</p>
                  <p className="underline">Forgot?</p>
              </div>
              <input className="px-5 py-4 w-full border rounded-lg"></input>
          </div>
          <div className="mt-8 w-full">
              <Button onClick={() => console.log('bt')} styles={'w-full'} flag={false} Component={<></>} text={'Sign In'} />
          </div>

          <div className="mt-5">
              <p className="text-center text-gray-500" >
                  Don't have an account? <span className="underline text-black">Sign up</span>
              </p>
          </div>

      </div>
  )
}
