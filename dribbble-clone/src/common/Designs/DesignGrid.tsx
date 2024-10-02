import designsData from './data-2.json';
import { DesignCard } from './DesignCard';

const DesignGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-20">
            {designsData.map((design: any, index: any) => (
                <DesignCard key={index} design={design} />
            ))}
        </div>
    );
};

export default DesignGrid;
