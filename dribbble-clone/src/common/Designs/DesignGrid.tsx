import designsData from '../../assets/data/design-cards-data.json';
import { DesignCard } from './DesignCard';

const DesignGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:px-20">
            {designsData.map((design: any, index: any) => (
                <DesignCard key={index} design={design} />
            ))}
        </div>
    );
};

export default DesignGrid;
