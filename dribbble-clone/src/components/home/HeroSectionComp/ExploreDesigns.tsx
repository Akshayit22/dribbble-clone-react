import { DesignGrid } from "../../../common/Designs/DesignGrid";
import { useGetDesignCards } from "../../../services/react-query/apis";

const ExploreDesigns = () => {

    const { isPending, error, data } = useGetDesignCards();

    return (
        <DesignGrid isLoading={isPending} isError={error} data={data} />
    )
}

export default ExploreDesigns