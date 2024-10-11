import { useNavigate } from 'react-router-dom';
import { WhiteButton } from '../../common/Buttons/WhiteButton';
import { Button } from '../../common/Buttons/Button';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { UnderlineText } from '../../common/Home/UnderlineText';
import { FaChevronLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';

export const SignupForm = () => {

    const navigate = useNavigate();
    const [signup, setSignup] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        agreeToTerms: false
    });

    const handleInputChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const sendData = async (data: any) => {
        delete data.agreeToTerms;
        try{
            const resp = await axios.post('http://localhost:3000/users', data);
            toast(`${resp.data.name} User Created Successfully.`);
            navigate('/login');
        }catch(error){
            console.log(error);
            toast.error('Something Went Wrong, Please Try again.');
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (formData.agreeToTerms){
            sendData(formData);
        }else{
            toast.error('Select Checkbox for Sign Up.');
        }
    };


    return (
        <div className="lg:ml-24 md:px-16 mx-2 px-5 md:pt-7 w-full flex flex-col">

            {
                signup &&
                (
                    <div className="mb-6 rounded-full border absolute top-10 left-5 md:left-[500px] ">
                        <button className="text-black hover:text-gray-700 px-3 py-2" onClick={() => setSignup(!signup)}>
                            <FaChevronLeft className="inline-block" />
                        </button>
                    </div>
                )
            }

            <p className="text-2xl font-bold mb-10 w-full">Sign up to Dribbble</p>

            {
                !signup &&
                (
                    <>
                        <Button onclick={() => navigate('')} styles={'font-semibold'} flag={true} Component={FcGoogle} text={'Sign in with Google'} />

                        <div className="flex items-center justify-center w-full">
                            <hr className="w-full h-px my-8 bg-gray-400 border " />
                            <span className="absolute px-3 text-gray-500 -translate-x-1/2 bg-white left-1/2">or</span>
                        </div>

                        <WhiteButton onclick={() => setSignup(true)} styles={'w-full border-2 mb-10'} flag={false} Component={<></>} text={'Continue with email'} />

                        <div className='text-xs text-center mt-5'>
                            <p>By creating an account you agree with our <UnderlineText text={'Terms of Service'} onclick={null} />, <UnderlineText text={'Privacy Policy'} onclick={null} />, and our default <UnderlineText text={'Notification Settings'} onclick={null} />.</p>
                        </div>
                    </>
                )
            }


            {
                signup && (

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-md">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    data-testid="name-input"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="px-5 py-4 w-full border rounded-lg text-md"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-black mb-1">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    data-testid="username-input"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="px-5 py-4 w-full border rounded-lg text-md"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                data-testid="email-input"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="px-5 py-4 w-full border rounded-lg text-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-black mb-1">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                data-testid="password-input"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="px-5 py-4 w-full border rounded-lg text-md"
                                placeholder="6+ characters"
                                minLength={6}
                                required
                            />
                        </div>
                        <div>
                            <label className="flex items-start sm:items-center">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    data-testid="checkbox-input"
                                    onChange={handleInputChange}
                                    checked={formData.agreeToTerms}
                                    className="mt-1 sm:mt-0 mr-2"
                                    
                                />
                                <span className="text-xs sm:text-sm text-gray-700">
                                    I agree with Dribbble's{' '}
                                    <a href="#" className="text-black underline">Terms of Service</a>,{' '}
                                    <a href="#" className="text-black underline">Privacy Policy</a>, and default{' '}
                                    <a href="#" className="text-black underline">Notification Settings</a>.
                                </span>
                            </label>
                        </div>

                        <div>
                            <Button onClick={null} type="submit" data-testid="signup-button" styles={'w-full create-account-button'} flag={false} Component={<></>} text={'Create Account'} />
                        </div>

                    </form>
                )
            }

            <div className="mt-5">
                <p className="text-center text-gray-500" >
                    Already have an account? <UnderlineText text={'Sign In'} styles={'text-black'} onclick={() => navigate('/login')} />
                </p>
            </div>

        </div>
    )
}
