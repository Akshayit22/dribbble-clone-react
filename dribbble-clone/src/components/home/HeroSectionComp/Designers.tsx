import { DesignerCarousel } from '../../../common/HorizontalScroll/DesignerCarousel';
import { useGetDesignersInfo } from '../../../services/react-query/apis';

const Designers = () => {

    const { isPending, error, data } = useGetDesignersInfo();


    return (
        <DesignerCarousel isLoading={isPending} isError={error} data={data} />
    )
}

export default Designers