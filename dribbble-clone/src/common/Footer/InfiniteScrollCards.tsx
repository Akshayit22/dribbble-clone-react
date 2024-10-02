import { useState, useEffect, useRef } from 'react';

const cardData = [
    {
        "image-url": "https://cdn.dribbble.com/userupload/16086080/file/original-c5b8230ecdc5a1ef3decb0cc5bc7da54.png?format=webp&resize={width}x{height}&vertical=center",
        "title": "Typography"
    },
    {
        "image-url": "https://cdn.dribbble.com/userupload/16455782/file/still-8b9ba61f3a6397572a4e03a827c61278.png?format=webp&resize={width}x{height}&vertical=center",
        "title": "Animation"
    },
    {
        "image-url": "https://cdn.dribbble.com/userupload/16493099/file/original-d2fa4928230371433cf36608375c85e8.png?format=webp&resize={width}x{height}&vertical=center",
        "title": "Mobile"
    },
    {
        "image-url": "https://cdn.dribbble.com/userupload/16461003/file/original-40da9caebd81c1495a21ba884dae678e.png?format=webp&resize={width}x{height}&vertical=center",
        "title": "Illustration"
    },
    {
        "image-url": "https://cdn.dribbble.com/userupload/16116505/file/original-f2caa5da0b7f7f4c7c64a233d1a28723.png?format=webp&resize={width}x{height}&vertical=center",
        "title": "Print"
    },
    {
        "image-url": "https://cdn.dribbble.com/userupload/16439366/file/original-fe0661cecb3f5f91a38b94d69a1bfeca.jpg?format=webp&resize={width}x{height}&vertical=center",
        "title": "Product Design"
    },
    {
        "image-url": "https://cdn.dribbble.com/userupload/16305659/file/original-c7758f4192a1e0b4b721351fef094ad6.jpg?format=webp&resize={width}x{height}&vertical=center",
        "title": "Branding"
    },
    {
        "image-url": "https://cdn.dribbble.com/userupload/16452205/file/original-114536af3a6397572a4e03a827c61278.png?format=webp&resize={width}x{height}&vertical=center",
        "title": "Web Design"
    }
];

const InfiniteScrollCards = () => {
    const [isHovering, setIsHovering] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer:any = scrollRef.current;
        let scrollInterval:any;

        const startScrolling = () => {
            scrollInterval = setInterval(() => {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 1;
                }
            }, 20);
        };

        const stopScrolling = () => {
            clearInterval(scrollInterval);
        };

        if (!isHovering) {
            startScrolling();
        }

        return () => stopScrolling();
    }, [isHovering]);

    return (
        <div
            className="relative w-full overflow-hidden bg-gray-100 py-8"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div
                ref={scrollRef}
                className="flex overflow-x-hidden"
                style={{ width: `${cardData.length * 300}px` }}
            >
                {[...cardData, ...cardData].map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-72 mx-4 bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src={item["image-url"]}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollCards;