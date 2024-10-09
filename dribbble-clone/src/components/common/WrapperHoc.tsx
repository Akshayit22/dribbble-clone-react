import { Loader } from "../../common/Home/Loader";

export const WrapperHoc = (Component: any) => {

    return (props: any) => {
        if (props.isLoading)
            return <Loader />;

        if (props.isError)
            return (
                <div className="min-h-screen flex justify-center items-center text-black">
                    <h4 className="text-3xl font-semibold">Something Went Wrong....</h4>
                </div>
            );

        return <Component {...props} />;
    }
}

export default WrapperHoc;