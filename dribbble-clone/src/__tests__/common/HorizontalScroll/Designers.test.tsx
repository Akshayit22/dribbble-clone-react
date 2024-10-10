import { render, screen } from '@testing-library/react';
import { Designers } from '../../../common/HorizontalScroll/Designers'; // Adjust the import as necessary
import "@testing-library/jest-dom";

describe('Designers Component', () => {
    const mockDesignerImage = {
        mediaType: 'image',
        mediaUrl: 'mock-image-url.jpg',
        name: 'John Doe',
        designation: 'Graphic Designer',
        tags: ['Illustration', 'Branding'],
    };

    const mockDesignerVideo = {
        mediaType: 'video',
        mediaUrl: 'mock-video-url.mp4',
        name: 'Jane Smith',
        designation: 'Web Designer',
        tags: ['UI/UX', 'Responsive'],
    };

    test('renders an image when mediaType is "image"', () => {
        render(<Designers designer={mockDesignerImage} />);

        const imgElement = screen.getByRole('img');
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', mockDesignerImage.mediaUrl);
        expect(imgElement).toHaveAttribute('alt', mockDesignerImage.name);
    });

    test('renders a video when mediaType is "video"', () => {
        const { container } = render(<Designers designer={mockDesignerVideo} />);
        const videoElement = container.querySelector('.w-full.h-full.object-cover');

        expect(videoElement).toBeInTheDocument();
        expect(videoElement).toHaveAttribute('src', mockDesignerVideo.mediaUrl);
        expect(videoElement).toHaveAttribute('autoPlay');
        expect(videoElement).toHaveAttribute('loop');
    });

    test('renders all tags correctly', () => {
        const { container  } = render(<Designers designer={mockDesignerImage} />);
        const spans = container.querySelectorAll('div.flex > span');
        //screen.debug();

        expect(spans).toHaveLength(mockDesignerImage.tags.length);

        mockDesignerImage.tags.forEach((tag, index) => {
            expect(spans[index]).toHaveTextContent(tag);
        });
    });
});
