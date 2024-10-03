import { useState, useEffect, useRef } from 'react';
import cardData from './footer-data.json';

const InfiniteScrollCards = () => {
    const [isHovering, setIsHovering] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer: any = scrollRef.current;
        let scrollInterval: any;

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
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div
                ref={scrollRef}
                className="flex overflow-x-hidden gap-6"
            >
                {[...cardData, ...cardData].map((item, index) => (

                    <div key={index} className="flex-shrink-0 w-52 overflow-hidden transition-transform duration-300 hover:cursor-pointer">

                        <div className='rounded-xl'>
                            <img
                                src={item["image-url"]}
                                alt={item.title}
                                className=" h-40 object-cover rounded-xl"
                            />
                        </div>


                        <div className="flex mt-4 items-center ">
                            <h3 className="text-md font-normal text-black">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollCards;