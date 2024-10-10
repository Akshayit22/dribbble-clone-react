import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../../../common/Buttons/Button";
import { WhiteButton } from "../../../common/Buttons/WhiteButton";
import "@testing-library/jest-dom";


describe('Button Component', () => {
    const mockOnClick = jest.fn();
    const MockComponent = () => <span>Icon</span>; 

    test('renders correctly with text', () => {
        render(<Button onclick={mockOnClick} text={"Click Me"} />);

        const buttonElement = screen.getByText('Click Me');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.tagName).toBe('P');
        // screen.debug();
    });

    test('calls onclick function when clicked', () => {
        render(<Button onclick={mockOnClick} text="Click Me" />);

        const buttonElement = screen.getByText('Click Me');
        fireEvent.click(buttonElement);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test('renders component when flag is true', () => {
        render(<Button onclick={mockOnClick} text="Click Me" flag={true} Component={MockComponent} />);

        const iconElement = screen.getByText('Icon');
        expect(iconElement).toBeInTheDocument();
    });

    test('does not render component when flag is false', () => {
        render(<Button onclick={mockOnClick} text="Click Me" flag={false} Component={MockComponent} />);

        const iconElement = screen.queryByText('Icon');
        expect(iconElement).not.toBeInTheDocument();
    });
});


describe('White Button Component', () => {
    const mockOnClick = jest.fn();
    const MockComponent = () => <span>Icon</span>;

    test('calls onclick function when clicked', () => {
        render(<WhiteButton onclick={mockOnClick} text="Click Me" />);

        const buttonElement = screen.getByText('Click Me');
        fireEvent.click(buttonElement);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test('renders component when flag is true', () => {
        render(<WhiteButton onclick={mockOnClick} text="Click Me" flag={true} Component={MockComponent} />);

        const iconElement = screen.getByText('Icon');
        expect(iconElement).toBeInTheDocument();
    });

    test('does not render component when flag is false', () => {
        render(<WhiteButton onclick={mockOnClick} text="Click Me" flag={false} Component={MockComponent} />);

        const iconElement = screen.queryByText('Icon');
        expect(iconElement).not.toBeInTheDocument();
    });
});
