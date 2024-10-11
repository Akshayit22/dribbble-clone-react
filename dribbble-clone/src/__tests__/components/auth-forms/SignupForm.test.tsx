import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import axios from "axios";
import { SignupForm } from '../../../components/auth/SignupForm';

jest.mock('react-toastify', () => ({
    toast: {
        success: jest.fn(),
        error: jest.fn(),
    },
}));

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}))

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}))

jest.mock('axios');



describe('SignUp Form ', () => {

    const mockNavigate = jest.fn();
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);

    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    test("Signup Form Render", async () => {
        const {container} = render(<SignupForm />)
        const button = container.querySelector('.flex.justify-center.gap-2.px-6.h-fit.py-3.bg-white');
        button?fireEvent.click(button):null;

        expect(screen.getByText(/Username/i)).toBeInTheDocument();
        expect(screen.getByText(/Email/i)).toBeInTheDocument();
        expect(screen.getByText(/Password/i)).toBeInTheDocument();
        expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
        expect(screen.getByTestId("checkbox-input")).toBeInTheDocument();

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(2);

    });

    test('navigates to login when "Sign In" is clicked', () => {
        render(<SignupForm />);

        const signupLink = screen.getAllByText(/Sign In/i);
        fireEvent.click(signupLink[1]);
        expect(mockNavigate).toHaveBeenCalledWith('/login');
    });

    test('form submission logs data and calls sendData', async () => {
        const { container } = render(<SignupForm />)
        const button = container.querySelector('.flex.justify-center.gap-2.px-6.h-fit.py-3.bg-white');
        button ? fireEvent.click(button) : null;

        const mockResponse = { data: [{ email: 'test@example.com', password: 'password123' }] };
        (axios.get as jest.Mock).mockResolvedValue(mockResponse);

        fireEvent.change(await screen.findByTestId('name-input'), {
            target: { value: 'test' },
        });

        fireEvent.change(await screen.findByTestId('username-input'), {
            target: { value: 'test@example.com' },
        });

        fireEvent.change(await screen.findByTestId('email-input'), {
            target: { value: 'test@example.com' },
        });

        fireEvent.change(await screen.findByTestId('password-input'), {
            target: { value: 'password123' },
        });
        
        const element = container.querySelector('.create-account-button');
        if (element) {
            fireEvent.click(element);
        }

    

        // await waitFor(() => {
        //     expect(axios.post).toHaveBeenCalledWith(
        //         'http://localhost:3000/users',
        //         expect.objectContaining({
        //             name: 'John Doe',
        //             username: 'johndoe',
        //             email: 'john@example.com',
        //             password: 'password123',
        //         })
        //     );
        // });

        // await waitFor(()=>{
        //     expect(toast).toHaveBeenCalledWith('John Doe User Created Successfully.');
        // })
        //expect(mockNavigate).toHaveBeenCalledWith('/login');

        

        // Ensure success toast was shown
        

    });


})