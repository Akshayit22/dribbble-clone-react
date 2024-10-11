import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { LoginForm } from "../../../components/auth/LoginForm"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify";
import axios from "axios";

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



describe('LoginForm', () => {

    const mockNavigate = jest.fn();
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    test("Login Form Render", async () => {
        render(<LoginForm />)

        expect(screen.getByText(/Username or Email/i)).toBeInTheDocument();
        expect(screen.getByText(/Password/i)).toBeInTheDocument();

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(2);

        const emailInput = await screen.findByTestId('email-input');
        expect(emailInput).toBeInTheDocument()

    });

    test('navigates to signup when "Sign up" is clicked', () => {
        render(<LoginForm />);

        const signupLink = screen.getByText(/Sign up/i);

        fireEvent.click(signupLink);
        expect(mockNavigate).toHaveBeenCalledWith('/signup');
    });


    test('form submission logs data and calls sendData', async () => {
        const { container } = render(<LoginForm />);

        const mockResponse = { data: [{ email: 'test@example.com', password: 'password123' }] };
        (axios.get as jest.Mock).mockResolvedValue(mockResponse);

        fireEvent.change(await screen.findByTestId('email-input'), {
            target: { value: 'test@example.com' },
        });
        fireEvent.change(await screen.findByTestId('password-input'), {
            target: { value: 'password123' },
        });

        // screen.debug();
        
        const element = container.querySelector('.flex.justify-center.items-center.gap-2.px-6.h-fit.py-3.bg-black.rounded-full');
        if (element) {
            fireEvent.click(element);
        }

        await waitFor(() => {
            // console.log(axios.get);
            expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/users?email=test@example.com&password=password123');
        });

        await waitFor(() => {
            // console.log(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledWith(expect.anything());
            expect(toast.success).toHaveBeenCalledWith('login sucess.');
        });

        expect(mockNavigate).toHaveBeenCalledWith('/profile');

    });


})