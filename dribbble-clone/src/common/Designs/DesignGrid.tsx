// import data from '../../assets/data/design-cards-data.json';
import WrapperHoc from '../../components/common/WrapperHoc';
import { DesignCard } from './DesignCard';

const _DesignGrid = ({data}:any) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:px-20">
            {data?.map((design: any, index: any) => (
                <DesignCard key={index} design={design} />
            ))}
        </div>
    );
};

export const DesignGrid = WrapperHoc(_DesignGrid);
