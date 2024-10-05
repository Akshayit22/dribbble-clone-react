import { Designers } from "./Designers";
import data from '../Home/designer-data.json';


export const DesignerCarousel = () => {

    return (
        <div className="w-full overflow-hidden">
            <div className="flex gap-8 overflow-x-hidden py-16 w-full">
                {
                    
                    (typeof data !== 'undefined') ?
                    (
                            data?.map((designer: any, index: number) => (
                                <div key={index} className="relative w-[280px] h-[350px] flex-shrink-0 animate-loop-scroll-hero overflow-hidden rounded-3xl">

                                    <Designers designer={designer} />
                                </div>
                            ))
                    ):
                    (
                        <div></div>
                    )
                }
            </div>
        </div>
    );
};
