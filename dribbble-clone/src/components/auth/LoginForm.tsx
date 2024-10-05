import { useNavigate } from "react-router-dom";
import { WhiteButton } from "../../common/Buttons/WhiteButton"
import { Button } from "../../common/Buttons/Button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export const LoginForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="lg:ml-24 md:px-16 mx-2 px-5 md:pt-7 w-full flex flex-col">
            <p className="text-2xl font-bold mb-10 w-full">Sign in to Dribbble</p>

            <WhiteButton onClick={() => navigate('/login')} styles={'font-bold'} flag={true} Component={FcGoogle} text={'Sign in with Google'} />

            <div className="flex items-center justify-center w-full my-7">
                <hr className="w-full h-px my-8 bg-gray-400 border " />
                <span className="absolute px-3 text-gray-500 -translate-x-1/2 bg-white left-1/2">or sign in with email</span>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <p className="font-bold mt-3 mb-1.5">Username or Email</p>
                    <input type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="px-5 py-4 w-full border rounded-lg text-md"
                        required
                    ></input>
                </div>

                <div>
                    <div className="flex justify-between items-center">
                        <p className="font-bold mt-3 mb-1.5">Password</p>
                        <p className="underline hover:cursor-pointer">Forgot?</p>
                    </div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="px-5 py-4 w-full border rounded-lg text-md"
                        placeholder="6+ characters"
                        minLength={6}
                        required
                    />
                </div>
                <div className="mt-8 w-full">
                    <Button onClick={null} type="submit" styles={'w-full'} flag={false} Component={<></>} text={'Sign In'} />
                </div>
            </form>


            <div className="mt-5">
                <p className="text-center text-gray-500" >
                    Don't have an account? <span className="underline text-black hover:cursor-pointer" onClick={() => navigate('/signup')}>Sign up</span>
                </p>
            </div>

        </div>
    )
}
