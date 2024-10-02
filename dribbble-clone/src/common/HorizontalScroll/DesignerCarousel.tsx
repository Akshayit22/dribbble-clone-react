import { useEffect, useRef } from "react";
import data from '../Home/designer-data.json';
import { Designers } from "./Designers";

export const DesignerCarousel = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollElement: any = scrollRef.current;
        if (scrollElement) {
            const scroll = () => {
                if (scrollElement.scrollLeft >= (scrollElement.scrollWidth - scrollElement.clientWidth)) {
                    scrollElement.scrollLeft = 0;
                } else {
                    scrollElement.scrollLeft += 1;
                }
            };
            const intervalId = setInterval(scroll, 20);
            return () => clearInterval(intervalId);
        }
    }, []);

    return (
        <div className="w-full overflow-hidden">
            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-hidden py-16"
            style={{ width: `${data.length * 222}px` }}
            >
                {data.map((designer, index) => (
                    <Designers key={index} designer={designer} />
                ))}
            </div>
        </div>
    );
};
