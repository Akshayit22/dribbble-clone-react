// import data from '../../assets/data/footer-data.json';
import WrapperHoc from '../../components/common/WrapperHoc';
import { FooterScrollCard } from './FooterScrollCard';

const _InfiniteScrollCards = ({data}:any) => {

    return (
        <div className="relative w-full overflow-hidden " >
            <div className="flex w-full overflow-x-hidden gap-6 group">
                {
                    [...data, ...data].map((item, index) => (

                        <div key={index} className="flex-shrink-0 animate-loop-scroll-footer group-hover:paused w-52 hover:cursor-pointer">

                            <FooterScrollCard item={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export const InfiniteScrollCards = WrapperHoc(_InfiniteScrollCards);