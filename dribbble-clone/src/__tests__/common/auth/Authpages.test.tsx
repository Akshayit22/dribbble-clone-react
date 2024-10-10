import { render } from '@testing-library/react';
import { AuthPages } from '../../../common/auth/AuthPages'; // Adjust the import based on your structure
import "@testing-library/jest-dom";

// Mocking the Logo component and useNavigate
jest.mock('../../../common/Home/Logo', () => ({
    Logo: () => <div>Mocked Logo</div>,
}));

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('AuthPages Component', () => {
    const MockComponent = () => <div>Mock Component</div>;


    test('renders video element with correct src', () => {
        const mockUrl = 'mock-video-url.mp4';

        render(<AuthPages url={mockUrl} Component={MockComponent} />);

        const { container } = render(<AuthPages url={mockUrl} Component={MockComponent} />);

        const videoElement = container.querySelector('.w-full.h-full.object-cover');

        expect(videoElement).toBeInTheDocument();
        expect(videoElement).toHaveAttribute('src', mockUrl);

        console.log(videoElement?.getAttribute('src'));
        // screen.debug();
    });

});
